const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const less = require("gulp-less");
const browserify = require("browserify");
const gulpIf = require("gulp-if");
const babelify = require("babelify");
const buffer = require("vinyl-buffer");
const source = require("vinyl-source-stream");
const LessAutoprefix = require("less-plugin-autoprefix");
const yargs = require("yargs");
const watchify = require("watchify");
const gutil = require("gulp-util");
const envify = require("envify/custom");
const sourcemaps = require('gulp-sourcemaps');
const reload = browserSync.reload;
const del = require('del')


let isDebug = Boolean(yargs.debug);
// less autoprefix
let autoprefix = new LessAutoprefix({ browsers: ['> 5%', 'Firefox >= 20'] });

let customOpts = {
    entries: ['./demo/index.js'],
    debug: isDebug
}

let opts = Object.assign({}, watchify.args, customOpts);
let babelOpts = {
    presets: ["es2015", "stage-0", "react"],
    plugins: ["transform-remove-strict-mode", "transform-object-assign"]
}
let watchifyTask = watchify(browserify(opts)
    .transform("babelify", babelOpts)
    .transform(envify({
        NODE_ENV: "development"
    }))
);

watchifyTask.on('update', bundle);
watchifyTask.on('log', gutil.log)

function bundle() {
    return watchifyTask.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('all.js'))
        // optional, remove if you don't need to buffer file contents
        .pipe(buffer())
        // optional, remove if you dont want sourcemaps
        //loads map from browserify file
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./demo/dist'))
}


gulp.task('develop', bundle);

gulp.task('clean', (cb) => {
    return del(['./*.map'], cb);
});

gulp.task('build', ['clean'], () => {
    return browserify(customOpts)
        .transform("babelify", babelOpts)
        .transform(envify({
            NODE_ENV: "production"
        }))
        .bundle()
        .pipe(source('all.js'))
        .pipe(buffer())
        .pipe(gulpIf(isDebug, uglify({
            mangling: false,
            output: {
                ascii_only: true
            }
        })))
        .on('error', gutil.log)
        .pipe(gulp.dest('./demo/dist'));
});

gulp.task('server', () => {
    return browserSync.init({
        server: {
            baseDir: './demo/dist'
        },
        port: 3000
    })
})

gulp.task('css', () => {
    return gulp.src(['demo/less/*.less'])
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./demo/dist/css'));
})
gulp.task('watch', () => {
    gulp.watch(['./demo/less/*.less'], ['css']).on('change', () => {
        reload();
    });
    gulp.watch(['./demo/dist/*.js', './demo/dist/*.html']).on('change', reload);
})

gulp.task('default', ['server', 'watch', 'develop'], () => {
    console.log(`default task is runing! \n current debug is ${isDebug}`);
})

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const less = require("gulp-less");
const browserify = require("browserify");
const gulpIf = require("gulp-if");
const buffer = require("vinyl-buffer");
const sourceStrem = require("vinyl-source-stream");
const LessAutoprefix = require("less-plugin-autoprefix");
const yards = require("yards");
const watchify = require("watchify");
const gutil = require("gulp-util");
const envify = require("envify/custom");
const reload = browserSync.reload;

let isDebug = Boolean(yards.debug);
// less autoprefix
let autoprefix = new LessAutoprefix({ browsers: ['> 5%', 'Firefox >= 20'] });

let customOpts = {
    entries: ['./src/main.js'],
    debug: isDebug
}

let opts = Object.assign({}, watchify.args, customOpts);
let babelOpts = {
    presets: ["es2015", "stage-0"],
    plugins: ["transform-remove-strict-mode", "transform-object-assign"]
}
let watchifyTask = watchify(browserify(opts)
    .transform("babelify", babelOpts)
    .transform(envify({
        NODE_ENV: "development"
    }));
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
        .pipe(sourcemaps.write('./demo')) // writes .map file
        .pipe(gulp.dest('./demo'))
        .pipe(reload());
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
        .pipe(gulp.dest('./demo'));
});

gulp.task('server', () => {
    return browserSync.init({
        server: {
            baseDir: './demo'
        },
        port: 3000
    })
})

gulp.task('css', () => {
    return gulp.src(['src/less/*.less'])
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./demo/css'));
})
gulp.task('watchCss', () => {
    gulp.watch(['./src/less/*.less']).on('change', ['less'], )
})

gulp.task('default', ['server', 'watchCss', 'develop'], () => {
    console.log(`default task is runing! \n current debug is ${isDebug}`);
})

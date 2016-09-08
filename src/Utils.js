module.exports = {
    clone,
}


function clone(obj) {
    if(typeof obj === 'undefined'){
        return false;
    }
    //isArray ie6,7不支持
    let array = Array.isArray(obj);
    let dist = array && [] || {};

    if (array) {
        //数组情况
        obj.forEach(function (e, i) {
            if (typeof(e) !== 'object' || !e) {
                dist[i] = e;
            } else if (typeof(e) === 'object') {
                dist[i] = cloneDeep(e);
            }
        })

    } else {
        //object情况
        for (let i in obj) {
            if (typeof(obj[i]) !== 'object' || !obj[i]) {
                dist[i] = obj[i];
            } else {
                dist[i] = cloneDeep(obj[i]);
            }
        }
    }

    return dist;
}

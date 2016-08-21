window.onload = function() {
    let text = document.querySelector('.text');
    text.onclick = function(e) {
        if(text.className.indexOf('yellow') == -1) {
            text.className += ' yellow';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let sizeInfo = document.querySelector('#sizeInfo');
    sizeInfo.innerHTML = '<h1>Width: ' + width + 'px' + ' Height: ' + height + 'px</h1>';
});

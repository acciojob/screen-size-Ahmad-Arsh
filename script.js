//your JS code here. If required.
window.addEventListener('resize', function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let sizeInfo = document.getElementById('sizeInfo');
    sizeInfo.innerHTML = '<h1>Width: ' + width + 'px, Height: ' + height + 'px</h1>';
});

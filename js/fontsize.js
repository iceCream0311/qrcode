(function () {
    function setFontSize(){
    var html = document.documentElement;
    fontSize = html.clientWidth / 10.8;
    html.style.fontSize = fontSize + 'px';
    }
    document.addEventListener('DOMContentLoaded', setFontSize, false);
}())
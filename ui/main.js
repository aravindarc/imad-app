console.log('Loaded!');
var img = document.getElementById('pic');

img.onClick = function () {
    var interval = setInterval(moveRight, 50);
};

var marginLeft = 0;
function moveRight() {
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
}
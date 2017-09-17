console.log('Loaded!');
var img = document.getElementById('pic');

var marginLeft = 0;
function moveRight() {
    marginLeft += 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onClick = function () {
    var interval = setInterval(moveRight, 50);
};


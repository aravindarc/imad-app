console.log('Loaded!');
var img = document.getElementById('pic');

var marginLeft = 0;
var marginRight = 0;
var hitRight = false;
var hitLeft = false;
function moveRight() {
    if(hitRight !== true ) {
        marginLeft += 10;
        img.style.marginLeft = marginLeft + 'px';
        if(marginLeft === 1000 ){
            hitRight = true;
            hitLeft = false;
            marginLeft = -100;
        }
    }
    else if(hitLeft !== true) {
        marginRight += 10;
        img.style.marginRight = marginRight + 'px';
        if(marginRight === 1000 ){
            hitLeft = true;
            hitRight = false;
            marginRight = -100;
        }
    }
}

img.onclick = function () {
    var interval = setInterval(moveRight, 20);
};

function animate() {
    
}

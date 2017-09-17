console.log('Loaded!');
var img = document.getElementById('pic');

var marginLeft = 0;
var marginRight = 0;
function moveRight() {
    if(hitRight !== true ) {
        marginLeft += 10;
        img.style.marginLeft = marginLeft + 'px';
        if(marginLeft === 100 )
            hitRight = true;
    }
    else if(hitLeft !== true) {
        marginRight += 10;
        img.style.marginRight = marginRight + 'px';
        if(marginRight === 100 )
            hitLeft = false;
    }
}

img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};

function animate() {
    
}

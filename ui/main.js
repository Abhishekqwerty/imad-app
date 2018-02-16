console.log('Loaded!');

var newContent = document.getElementById("main-content");

newContent.innerHTML = "New Content";

var img = document.getElementById("coder");

var marginLeft= 0;
function moveRight (){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onClick = function(){
    var interval = setInterval(moveRight,50);
};
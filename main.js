
const inputTopLeft = document.getElementById('top-left')
const inputTopRight = document.getElementById('top-right')
const inputBottomRight = document.getElementById('bottom-left')
const inputBottomLeft = document.getElementById('bottom-right')
const body = document.getElementById('body');
const square = document.getElementById('square')



inputTopLeft.addEventListener('input', function(){
    let topLeft = inputTopLeft.value;
    square.style.borderTopLeftRadius = topLeft + 'px';
    console.log('1')

});
inputTopRight.addEventListener('input', function(){
    let topRight = inputTopRight.value;
    square.style.borderTopRightRadius = topRight + 'px';
    console.log('2')
});
inputBottomRight.addEventListener('input', function(){
    let bottomRight = inputBottomRight.value;
    square.style.borderBottomRightRadius = bottomRight + 'px';
    console.log('3')

});
inputBottomLeft.addEventListener('input', function(){ 
    let bottomLeft = inputBottomLeft.value;
    square.style.borderBottomLeftRadius = bottomLeft + 'px';
    console.log('4')

});




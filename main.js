const spans = document.querySelectorAll('span');
const inputs = document.querySelectorAll('input');
const inputTopLeft = document.getElementById('top-left')
const inputTopRight = document.getElementById('top-right')
const inputBottomRight = document.getElementById('bottom-right')
const inputBottomLeft = document.getElementById('bottom-left')
const square = document.getElementById('square')
const rangeBottom = document.getElementById('range-bottom');


document.body.addEventListener('click', e => {
    if(e.target.tagName!='INPUT') {
        limpaTooltips();
    }

})

inputs.forEach(element => {
    element.addEventListener ('click', () => {    
       limpaTooltips()
       topLeft(element);
       topRight(element);
       bottomRight(element);
       bottomLeft(element);
       
    })
});


function topLeft(element){
    if(element.className.match('__top-left'))
        toggleTooltip('span-top-left');
        
}

function topRight(element){
    if(element.className.match('__top-right'))
        toggleTooltip('span-top-right');
        
}

function bottomRight(element){
    if(element.className.match('__bottom-right'))
        toggleTooltip('span-bottom-right');
        
}

function bottomLeft(element){
    if(element.className.match('__bottom-left'))
        toggleTooltip('span-bottom-left');
        
}

function limpaTooltips () {
    spans.forEach(span => {

        span.classList.add('visible');
    })
}

function changeBorder (topLeft,topRight,bottomRight,bottomLeft) {

    square.style.borderTopLeftRadius = topLeft + 'px';
    square.style.borderTopRightRadius = topRight + 'px';
    square.style.borderBottomRightRadius = bottomRight + 'px';
    square.style.borderBottomLeftRadius = bottomLeft + 'px';
}

document.addEventListener('input', e => {
    
    changeBorder(
        inputTopLeft.value,
        inputTopRight.value,
        inputBottomRight.value,
        inputBottomLeft.value);
    
})


function toggleTooltip (text) {
    const span = document.getElementById(text)
    span.classList.toggle('visible');
}



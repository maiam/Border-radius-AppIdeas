const spans = document.querySelectorAll('span');
const inputs = document.querySelectorAll('input');
const inputTopLeft = document.getElementById('top-left')
const inputTopRight = document.getElementById('top-right')
const inputBottomRight = document.getElementById('bottom-right')
const inputBottomLeft = document.getElementById('bottom-left')
const square = document.getElementById('square')
const inputCopy = document.querySelector('.input-copy');
const btn = document.querySelector('.btn-copy');
const pCopy = document.getElementById('p-copy');
const resetBtn = document.querySelector('.reset-button');


function limpaInputs(topLeft,topRight, bottomRight, bottomLeft) {
    inputTopLeft.value = topLeft;
    inputTopRight.value = topRight; 
    inputBottomRight.value = bottomRight;
    inputBottomLeft.value = bottomLeft;
}

function copyClipboard(element){

    // Select the text field
    element.select();
    element.setSelectionRange(0, 99999);

    // Copy the text inside the text field
    navigator.clipboard.writeText(element.value);
    pCopy.innerHTML = `Copiado para a Área de transferência.`;
}

function injetaValorNoInput(inputTopLeft,inputTopRight, inputBottomRight, inputBottomLeft) {
    
    let topLeft = inputTopLeft.value;
    let topRight = inputTopRight.value;
    let bottomRight = inputBottomRight.value;
    let bottomLeft = inputBottomLeft.value;

    inputCopy.value = 
    "border-radius: " + topLeft + "px "
    + topRight + "px "
    + bottomRight + "px "
    + bottomLeft + "px ";

    return inputCopy.value;
}

document.body.addEventListener('click', e => {
    if(e.target.tagName!='INPUT') {
        limpaTooltips();
    }

})

inputs.forEach(element => {
    element.addEventListener ('focus', () => {    
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
    
    injetaValorNoInput(inputTopLeft,inputTopRight, inputBottomRight, inputBottomLeft);

    
})

function toggleTooltip (text) {
    const span = document.getElementById(text)
    span.classList.toggle('visible');
    pCopy.classList.add('visible');
}


btn.addEventListener('click', () => {

   copyClipboard(inputCopy);
   pCopy.classList.remove('visible');
   console.log(inputCopy.value)
})

resetBtn.addEventListener('click', () => {

    changeBorder(0,0,0,0);
    limpaInputs(0,0,0,0);
    pCopy.classList.add('visible');
});

const inputTopLeft = document.getElementById('top-left')
const inputTopRight = document.getElementById('top-right')
const inputBottomRight = document.getElementById('bottom-right')
const inputBottomLeft = document.getElementById('bottom-left')
const body = document.getElementById('body');
const square = document.getElementById('square')
const rangeBottom = document.getElementById('range-bottom');

function visible (text) {
    const span = document.getElementById(text)
    span.classList.remove('visible');
    setTimeout(function() {
        span.classList.add('visible');
      }, 3000);
};



function changeBottomLeft (valor){
    inputBottomRight.value = 0;
    inputBottomLeft.value = valor;
    square.style.borderBottomLeftRadius = valor + 'px';
    
    visible('span-bottom-left');
};

// function range(){
//     let valor = rangeBottom.value;
//     if(valor > 0){
//         changeBottomRight();
//     } else if (valor < 0) {
//         changeBottomLeft(-valor)
//     }
// }


rangeBottom.addEventListener('change', function(){
    let valor = rangeBottom.value;
    
    if(valor > 0){
        changeBottomRight();
    } else if (valor < 0) {
        changeBottomLeft(-valor)
    }
});

inputTopLeft.addEventListener('input', function(){
    let topLeft = inputTopLeft.value;
    square.style.borderTopLeftRadius = topLeft + 'px';
    
    visible('span-top-left')
    }, 
false);


inputTopRight.addEventListener('input', function(){
    let topRight = inputTopRight.value;
    square.style.borderTopRightRadius = topRight + 'px';
    
    visible('span-top-right')
    }, 
false);




inputBottomLeft.addEventListener('input', function(){ 
    let bottomLeft = inputBottomLeft.value;
    square.style.borderBottomLeftRadius = bottomLeft + 'px';

    visible('span-bottom-left')
    }, 
false);


function changeBottomRight(){
    let bottomRight = inputBottomRight.value;
    square.style.borderBottomRightRadius = bottomRight + 'px';
    
    // if(!valor){
    //     rangeBottom.value = valor;
    // } else {
        rangeBottom.value = bottomRight;
        
    // }
   
    visible('span-bottom-right')
    
};

inputBottomRight.addEventListener('input', changeBottomRight, false);

// inputTopLeft.addEventListener('mouseover', function(){
//     const span = document.getElementById('span-top-left')
//     span.classList.remove('visible');
//     setTimeout(function() {
//         span.classList.add('visible');
//       }, 1000);
//     }, false);


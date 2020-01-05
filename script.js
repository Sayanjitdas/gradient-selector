var colorOne = document.getElementById('color1');
var colorTwo = document.getElementById('color2');
var linGrad = document.querySelector('body');
var css = document.querySelector('code');


linGrad.style.background = 'linear-gradient(to right,'+colorOne.value+','+colorTwo.value+')';
css.textContent = 'linear-gradient(to right,'+colorOne.value+','+colorTwo.value+')';

function linearGrad() {
    // css.textContent = '';
    css.textContent = 'linear-gradient(to right,'+colorOne.value+','+colorTwo.value+')';
    linGrad.style.background = 'linear-gradient(to right,'+colorOne.value+','+colorTwo.value+')';
}


colorOne.addEventListener('input', linearGrad);

colorTwo.addEventListener('input',linearGrad);
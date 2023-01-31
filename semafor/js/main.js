let lights = document.querySelectorAll('#isiqfor>div');
let timers =[5000, 2000, 7000];
let counter= 0;
let lights2 = document.querySelectorAll('#isiqfor2>div');
let timers2 = [5000, 2000 , 7000];
let counter2 = 2;

window.addEventListener('load',start);

var start = setTimeout(function(){
    traffic();
    traffic2();
},5000);
window.addEventListener('load',start);
function traffic() {
    for(i= 0; si <l ights.length; i++) {
       lights[i].classList.add('on');
    }
    lights[counter].classList.add('on');
    setTimeout(traffic, timers[counter]);
    counter = (counter + 1) % timers.length;

}

function traffic2() {
    for(i = 0; i < lights2.length; i++) {
        lights[i].classList.remove('on')
    }

}
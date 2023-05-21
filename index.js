//redlight
var stoplight = document.querySelector('#stopLight');
var stopbutton = document.querySelector('#stopButton');
//greenlight
var golight = document.querySelector('#goLight');
var gobutton = document.querySelector('#goButton');
//yellow light
var slowlight = document.querySelector('#slowLight');
var slowbutton = document.querySelector('#slowButton');
//red light function to toggle light
let redLight = function() {
  stoplight.classList.toggle('stop');
}
stopbutton.addEventListener('click', redLight);

//red light enter/exit box
stopbutton.addEventListener("mouseenter", mouseEnter);
stopbutton.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  console.log('Entered stop button');
}

function mouseLeave() {
  console.log('left stop button');
}

//green light function to toggle light
let greenLight = function() {
  golight.classList.toggle('go');
}
gobutton.addEventListener('click', greenLight);

//green light enter/exit box
gobutton.addEventListener("mouseenter", mouseEntergo);
gobutton.addEventListener("mouseleave", mouseLeavego);

function mouseEntergo() {
  console.log('Entered go button');
}

function mouseLeavego() {
  console.log('left go button');
}

//yellow light function to toggle light
let yellowLight = function() {
  slowlight.classList.toggle('slow');
}
slowbutton.addEventListener('click', yellowLight);

//yellow light enter/exit box
slowbutton.addEventListener("mouseenter", mouseEnterslow);
slowbutton.addEventListener("mouseleave", mouseLeaveslow);

function mouseEnterslow() {
  console.log('Entered slow button');
}

function mouseLeaveslow() {
  console.log('left slow button');
}

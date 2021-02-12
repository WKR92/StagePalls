import gsap from "gsap";
import {TimelineLite} from "gsap";
console.log("widzi")

gsap.from(".nav__logo", {duration: 1, y: -100});
// gsap.from(".submitBtn", {duration: 1.5, rotationX: [-90, 90]});
gsap.from(".table-disc", {duration: 1.5, x: +100 });
gsap.from(".block", {duration: 1.5, x: +100 });


var navLogoElem = document.querySelector('.nav__logo');
navLogoElem.addEventListener('mouseover', shakeLogo);
function shakeLogo(event) {
    var navLogo = event.target;
    var tl = new TimelineLite();
    tl.to(navLogo, 0.1, {x:"+=10", yoyo: true, repeat: 3});
}


// var tableDiscElem = document.querySelector('.block');
// tableDiscElem.addEventListener('mouseover', hover);
// function hover(e) {
//     var tableDisc = e.target;
//     gsap.to(tableDisc, {duration: 1, rotationX: [-90, 90]});
// }

// var submitBtnElem = document.querySelector('.submitBtn');
// submitBtnElem.addEventListener('mouseover', onMouseOver);
// function onMouseOver(event) {
//     var submitBtn = event.target;
//     var tl = new TimelineLite();
//     tl.to(submitBtn, {duration: 0.1, backgroundColor: "#be3144"});
// }
// submitBtnElem.addEventListener('mouseout', onmousedown);
// function onmousedown(event) {
//     var submitBtn = event.target;
//     var tl = new TimelineLite();
//     tl.to(submitBtn, {duration: 0.1, backgroundColor: "#363840"});
// }
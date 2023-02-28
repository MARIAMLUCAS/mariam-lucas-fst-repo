import {bookAppointment} from "./functions.js";
var index = 0;
var slides = document.querySelectorAll(".slides");

var form = document.getElementById("book-form");

var pName = document.getElementById("p-name");
var pNum = document.getElementById("p-num");
var age = document.getElementById("age");
var gender = document.getElementById("gender");
var time = document.getElementById("time");
var date = document.getElementById("date");
var docName = document.getElementById("doc-name");
var docNum = document.getElementById("doc-name");
var message = document.getElementById("message");

form.addEventListener("submit", (e)=>{
e.preventDefault()
bookAppointment(1, pName.value, date.value, time.value.split(":")[0], message.value, docName.value ? docName.value : null, docNum.value ? docNum.value : null, gender.value, pNum.value)
form.reset();
});




function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    // dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  // dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,3000);

  //reveal boxes
  function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
  
}

changeSlide();

// javascript for toggle menu 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var x = document.getElementById("myCheck").addEventListener('click',myFunction)
//for checkbox in book appointment form 
function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var name = document.getElementById("doc-name");
  var num = document.getElementById("doc-num");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    name.style.display = "block";
    num.style.display = "block";
  } else {
    name.style.display = "none";
    num.style.display = "none";
  }
}


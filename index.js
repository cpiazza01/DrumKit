// document.addEventListener("click", function(event) {
//   if (event.target.tagName==="BUTTON") {
//     alert("I got clicked.");
// //   }
// });
var myButtons = document.querySelectorAll(".drum");
myButtons.forEach(function(elem) {
  elem.addEventListener('click', function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  })
})
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(keyOrInnerHTML) {
  switch (keyOrInnerHTML) {
    case "w":
      var tom1Sound = new Audio("sounds/tom-1.mp3");
      tom1Sound.play();
      break;
    case "a":
      var tom2Sound = new Audio("sounds/tom-2.mp3");
      tom2Sound.play();
      break;
    case "s":
      var tom3Sound = new Audio("sounds/tom-3.mp3");
      tom3Sound.play();
      break;
    case "d":
      var tom4Sound = new Audio("sounds/tom-4.mp3");
      tom4Sound.play();
      break;
    case "j":
      var snareSound = new Audio("sounds/snare.mp3");
      snareSound.play();
      break;
    case "k":
      var crashSound = new Audio("sounds/crash.mp3");
      crashSound.play();
      break;
    case "l":
      var kickBassSound = new Audio("sounds/kick-bass.mp3");
      kickBassSound.play();
      break;
    default: console.log(keyOrInnerHTML);
  }
}

function buttonAnimation(keyOrInnerHTML) {
  document.querySelector("." + keyOrInnerHTML).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + keyOrInnerHTML).classList.remove("pressed");
  }, 100);
}

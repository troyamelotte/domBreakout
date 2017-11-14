
// 1
// document.querySelector("h3").textContent = "Troy";

// document.querySelector("h3").innerHTML = "Troy";

let header = document.getElementsByTagName('h3');
header[0].textContent = "Troy";
// 2

// let box = document.getElementsByClassName("red");
// box[0].style.background = "blue";

let box = document.querySelector(".red");
box.style.background = "blue";

// 3

// let threeBoxes = document.getElementsByClassName("empty");
//
// for(var i = 0; i<threeBoxes.length; i++){
//   threeBoxes[i].style.background = "red";
//   threeBoxes[i].style.height = "50px";
//   threeBoxes[i].style.width = "50px";
// }

let threeBoxes = document.getElementsByClassName("empty");

for(var i = 0; i<threeBoxes.length; i++){
  // console.log(i);
  threeBoxes[i].classList.add("red");
}

// 4
// let firstText = document.querySelector("#p-tag");

let firstText = document.getElementsByTagName("p")[3];

// let secText = document.getElementsByTagName("b")[0];

let secText = document.querySelector("b");

let temp = firstText.textContent;
firstText.textContent = secText.textContent;
secText.textContent = temp;

// 5

let img = document.querySelector("img");

img.src = "https://s-i.huffpost.com/gen/1399622/images/o-KIP-DYNAMITE-facebook.jpg";

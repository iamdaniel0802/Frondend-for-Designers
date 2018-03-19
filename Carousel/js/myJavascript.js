console.log("test");

var nextButton = document.querySelector(".next");
console.log("next: " + nextButton);

var backButton = document.querySelector(".back");
console.log("back: " + backButton);

var leftImg = document.querySelector(".left");
console.log("left " + leftImg);

var leftOneImg = document.querySelector(".leftone");
console.log("left " + leftOneImg);


var nextImg = function () {
    leftImg.classList.toggle(".left");
    leftOneImg.classList.toggle(".leftone");

}

nextButton.addEventListener("click", nextImg);


console.log("test");

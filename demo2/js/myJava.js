console.log("test");

var pop = document.querySelector("article");
console.log("pop: " + pop);

var popup = document.querySelector(".diveen");
console.log("popup " + popup);

var meerInfo = function () {
    popup.classList.toggle("diveen");
    popup.classList.toggle("divtwee");

}

pop.addEventListener("click", meerInfo);

/* if else state gebruiken. In elke state een toggle
op github zetten, verschillende versies, verschillende 
linkjes, je maakt een versie, kopie van die map en dan 
naar github, repostery frontend daar al die mappen in 
doen link in de readme doen.*/

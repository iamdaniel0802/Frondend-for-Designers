var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'
var request = new XMLHttpRequest();
var container = document.querySelector('div');
//console.log(container);

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var jason = request.response;
    console.log("wat is mijn json? ", jason);
    filmtitle(jason);

}

var filmtitle = function (jsonObj) {
    var films = request.response;

    for (var i = 0; i < films.length; i++) {
        console.log("hi ", i);

        var blok = document.createElement('div');
        container.appendChild(blok);

        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj[i]['title'];
        blok.appendChild(myH1);

        var covers = document.createElement('img');
        covers.src = jsonObj[i]['cover'];
        blok.appendChild(covers);

        var kleinfilmplot = document.createElement('p');
        kleinfilmplot.textContent = jsonObj[i]['simple_plot'];
        blok.appendChild(kleinfilmplot);

        //meer infoblok//
        var infoblok = document.createElement('div');
        infoblok.classList.add("bloktwee")
        container.appendChild(infoblok);

        var myH1A = document.createElement('h1');
        myH1A.textContent = jsonObj[i]['title'];
        infoblok.appendChild(myH1A);

        var genre = document.createElement('p');
        genre.textContent = jsonObj[i]['genres'];
        infoblok.appendChild(genre);

        var releasedate = document.createElement('h2');
        releasedate.textContent = jsonObj[i]['release_date'];
        infoblok.appendChild(releasedate);

        var grootplot = document.createElement('p');
        grootplot.textContent = jsonObj[i]['plot'];
        infoblok.appendChild(grootplot);

        //acteurs//
        var acteurs = jsonObj[i]['actors'];

        for (var ia = 0; ia < acteurs.length; ia++) {
            var acteurimg = document.createElement('img');
            acteurimg.src = jsonObj[i]['actors'][ia]['url_photo'];
            infoblok.appendChild(acteurimg);

        }


        //button open en close//
        var infobutton = document.createElement("button");

        infobutton.innerHTML = "Meer info";
        infobutton.classList.add("meerinfo");

        blok.appendChild(infobutton);


        infobutton.info = infoblok;


        // mouse enter event//
        infobutton.addEventListener("mouseenter", function (event) {
            event.target.style.backgroundColor = "purple";

            setTimeout(function () {
                event.target.style.backgroundColor = "";
            }, 500);
        }, false);

        //click event//
        infobutton.addEventListener("click", function () {
            console.log("click");
            this.info.classList.toggle('active');

            //wat is de tekst van de buren als er wordt geklikt? even console loggen ... 
            //gebruik 'this' om te verwijzen naar 
            console.log("wat is de button tekst nu?", this.innerHTML);

            //als de tekst 'meer info' is dan veranderen in 'close', en andersom ...
            //deze if/else had je eerst hierboven staan bij het aanmaken van de button.
            if (this.innerHTML == "Meer info") {
                this.innerHTML = "Close";
            } else {
                this.innerHTML = "Meer info";
            }

        });

    }
}




/*
filmblok.classList.add("filmblok")
Hiermee kan je class fiksen aan je javascript


*/


/*

            var filmpie = request.response[0];
            //en nu de json data koppelen aan html elementen
            //1 createElement
            //2 koppel json data met textContent
            //3 append het html element zodat het in je browser komt
            var blokfilm = document.createElement('div');
            var filmtitle = document.createElement('h1');
            var filmplot = document.createElement('p');
            var cover = document.createElement('img');

            filmtitle.textContent = filmpie.title;
            filmplot.textContent = filmpie.simple_plot;
            cover.src = filmpie.cover;

            container.appendChild(filmtitle);
            container.appendChild(filmplot);
            container.appendChild(cover);

            var filmpie = request.response[1];
            var filmtitle = document.createElement('h1');
            var filmplot = document.createElement('p');
            var cover = document.createElement('img');

            filmtitle.textContent = filmpie.title;
            filmplot.textContent = filmpie.simple_plot;
            cover.src = filmpie.cover;

            container.appendChild(filmtitle);
            container.appendChild(filmplot);
            container.appendChild(cover);

            var filmpie = request.response[2];
            var filmtitle = document.createElement('h1');
            var filmplot = document.createElement('p');
            var cover = document.createElement('img');

            filmtitle.textContent = filmpie.title;
            filmplot.textContent = filmpie.simple_plot;
            cover.src = filmpie.cover;

            container.appendChild(filmtitle);
            container.appendChild(filmplot);
            container.appendChild(cover);

            var filmpie = request.response[3];
            var filmtitle = document.createElement('h1');
            var filmplot = document.createElement('p');
            var cover = document.createElement('img');

            filmtitle.textContent = filmpie.title;
            filmplot.textContent = filmpie.simple_plot;
            cover.src = filmpie.cover;

            container.appendChild(filmtitle);
            container.appendChild(filmplot);
            container.appendChild(cover);

            var filmpie = request.response[4];
            var filmtitle = document.createElement('h1');
            var filmplot = document.createElement('p');
            var cover = document.createElement('img');

            filmtitle.textContent = filmpie.title;
            filmplot.textContent = filmpie.simple_plot;
            cover.src = filmpie.cover;

            container.appendChild(filmtitle);
            container.appendChild(filmplot);
            container.appendChild(cover);

            var filmpie = request.response[5];
            var filmtitle = document.createElement('h1');
            var filmplot = document.createElement('p');
            var cover = document.createElement('img');

            filmtitle.textContent = filmpie.title;
            filmplot.textContent = filmpie.simple_plot;
            cover.src = filmpie.cover;

            container.appendChild(filmtitle);
            container.appendChild(filmplot);
            container.appendChild(cover);

        }
*/

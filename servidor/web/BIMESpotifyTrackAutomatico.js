// find template and compile it
var resultsPlaceholder = document.getElementById('results'),
    
    templateSourceBIME = document.getElementById('bimetracks-template').innerHTML,
    template2 = Handlebars.compile(templateSourceBIME),
    
    playingCssClass = 'playing',
    audioObject = null;

var playBIME = function () {
    $.ajax({
        url: 'https://api.spotify.com/v1/tracks/?ids=4znKp61MTtp04IvAnmtX40,7y8aVfDkqt6qirGNivvs0M,0RchWnEHETINMAyrTrlBmo,0ahOkCowJzgyrkoB1HJLPY,2gUSIsapdX6jEJ0DvjqTt2,2Oehrcv4Kov0SuIgWyQY9e,4St0bvXjgF9YiVfgRorHmK,6iWwfN1euztxZi1OK38HbU,0mh7eTsBmQj29bkgpQKoPj',
        data: {
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template2(response);
            //bucle con Each
            var currentTrack = $('#results div:first-child');
            currentTrack.removeClass('coverHide').addClass('cover');
            audioObject = new Audio(currentTrack.attr('preview_url'));
            audioObject.play();
            currentTrack.addClass(playingCssClass);
            audioObject.addEventListener('ended', function () {
            	currentTrack.removeClass('cover').addClass('coverHide');
            });
			var artist = document.getElementById("artist");  
			artist.firstChild.nodeValue =
                currentTrack.getAttribute('artistName');
            var song = document.getElementById("song");
            song.firstChild.nodeValue =
                currentTrack.getAttribute('trackName');
        }
    });
};

document.getElementById("mostrar").addEventListener("click", function (e) {
    e.preventDefault();
    playBIME();
}, false);

//playBIME()


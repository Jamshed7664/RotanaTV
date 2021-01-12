var player;
var init = function() {
	 setPlayer();
	 document.getElementById("closeBtn").classList.add('hideNaveBtn')
	 
}

window.onload = init;

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("closeBtn").classList.add("showNaveBtn")
   document.getElementById("closeBtn").classList.remove("hideNaveBtn")
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("closeBtn").classList.remove('showNaveBtn')
    document.getElementById("closeBtn").classList.add('hideNaveBtn')
}

function setPlayer() {
	player = videojs('player_one');
	var url = "../vid.mp4"

	player.src({
	    type: 'application/x-mpegURL',
	    src: url
	});
}

function pause() {
	alert('pause call')
	 player.pause();
	 document.getElementById("pause-btn").classList.add('showNaveBtn')
	 document.getElementById("play-btn").classList.add("hideNaveBtn")
	}

function play() {
	alert('play call')
	player.play();
	document.getElementById("pause-btn").classList.add('hideNaveBtn')
	document.getElementById("play-btn").classList.add("showNaveBtn")
}


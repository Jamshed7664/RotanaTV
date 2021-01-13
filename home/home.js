function gotoVideo(){
	 window.location.href = "../video/video.html";
}

var span = document.getElementById('clock');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
	  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
  console.log(d,m,h)
}

setInterval(time, 1000);

window.onload = time();
var allChannelList = ["1" , "1" , "1" , "1" , "1" , "1" , "1" , "1" , "1"];
var selectedRecentPos=0;
var inPlayer = "true";

var apiKey = "ZgdgzkAaktL434Jzgh4W9m7XAwMaLnZEHspCwAeTHkvSzn3uU7E6UVjb9buS7es2";

var player;
var init = function() {
	
	
	var timeStamp = Math.round(getTimeStamp()/1000);
	console.log(SHA1(apiKey + "-" +timeStamp));
	 console.log(timeStamp);
	 initTizenKeys();
	 makeCards();
	 setPlayer();
	 document.getElementById("closeBtn").classList.add('hideNaveBtn');
	 
}

window.onload = init;


/**
* Secure Hash Algorithm (SHA1)
* http://www.webtoolkit.info/
**/
function SHA1(msg) {
 function rotate_left(n,s) {
 var t4 = ( n<<s ) | (n>>>(32-s));
 return t4;
 };
 function lsb_hex(val) {
 var str='';
 var i;
 var vh;
 var vl;
 for( i=0; i<=6; i+=2 ) {
 vh = (val>>>(i*4+4))&0x0f;
 vl = (val>>>(i*4))&0x0f;
 str += vh.toString(16) + vl.toString(16);
 }
 return str;
 };
 function cvt_hex(val) {
 var str='';
 var i;
 var v;
 for( i=7; i>=0; i-- ) {
 v = (val>>>(i*4))&0x0f;
 str += v.toString(16);
 }
 return str;
 };
 function Utf8Encode(string) {
 string = string.replace(/\r\n/g,'\n');
 var utftext = '';
 for (var n = 0; n < string.length; n++) {
 var c = string.charCodeAt(n);
 if (c < 128) {
 utftext += String.fromCharCode(c);
 }
 else if((c > 127) && (c < 2048)) {
 utftext += String.fromCharCode((c >> 6) | 192);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 else {
 utftext += String.fromCharCode((c >> 12) | 224);
 utftext += String.fromCharCode(((c >> 6) & 63) | 128);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 }
 return utftext;
 };
 var blockstart;
 var i, j;
 var W = new Array(80);
 var H0 = 0x67452301;
 var H1 = 0xEFCDAB89;
 var H2 = 0x98BADCFE;
 var H3 = 0x10325476;
 var H4 = 0xC3D2E1F0;
 var A, B, C, D, E;
 var temp;
 msg = Utf8Encode(msg);
 var msg_len = msg.length;
 var word_array = new Array();
 for( i=0; i<msg_len-3; i+=4 ) {
 j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |
 msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);
 word_array.push( j );
 }
 switch( msg_len % 4 ) {
 case 0:
 i = 0x080000000;
 break;
 case 1:
 i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;
 break;
 case 2:
 i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;
 break;
 case 3:
 i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8 | 0x80;
 break;
 }
 word_array.push( i );
 while( (word_array.length % 16) != 14 ) word_array.push( 0 );
 word_array.push( msg_len>>>29 );
 word_array.push( (msg_len<<3)&0x0ffffffff );
 for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {
 for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];
 for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
 A = H0;
 B = H1;
 C = H2;
 D = H3;
 E = H4;
 for( i= 0; i<=19; i++ ) {
 temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
 E = D;
 D = C;
 C = rotate_left(B,30);
 B = A;
 A = temp;
 }
 for( i=20; i<=39; i++ ) {
 temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
 E = D;
 D = C;
 C = rotate_left(B,30);
 B = A;
 A = temp;
 }
 for( i=40; i<=59; i++ ) {
 temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
 E = D;
 D = C;
 C = rotate_left(B,30);
 B = A;
 A = temp;
 }
 for( i=60; i<=79; i++ ) {
 temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
 E = D;
 D = C;
 C = rotate_left(B,30);
 B = A;
 A = temp;
 }
 H0 = (H0 + A) & 0x0ffffffff;
 H1 = (H1 + B) & 0x0ffffffff;
 H2 = (H2 + C) & 0x0ffffffff;
 H3 = (H3 + D) & 0x0ffffffff;
 H4 = (H4 + E) & 0x0ffffffff;
 }
 var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

 return temp.toLowerCase();
}

function initTizenKeys()
{
	 // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		moveLeft();
    		break;
    	case 38: //UP arrow
    		moveUp();
    		break;
    	case 39: //RIGHT arrow
    		moveRight();
    		break;
    	case 40: //DOWN arrow
    		moveDown();
    		break;
    	case 13: //OK button
    		moveOk();
       		break;
    	case 10009: //RETURN button
		  //  location.href = "../home/home.html";
    		break;
    	default:
    		console.log('Key code : ' + e.keyCode);
    		break;
    	}
    });
}


function moveOk(){
	if(inPlayer == "true"){

		  if (player.paused()) {
			  player.play();
		  }
		  else {
			  player.pause();
		  }
	}
	else{
		closeNav();
		inPlayer = "true";
	}
}

function moveLeft(){
	
	if(inPlayer == "true"){
		openNav();
		inPlayer = "false";
		 setFocus("card-all " + selectedRecentPos, 'activeRecent');
		 setFocus('recent_img_' +  selectedRecentPos, 'setBoxShadow');

	}
	
}


function moveRight(){
	
	if(inPlayer == "false"){
		closeNav();
		inPlayer = "true";

	}
}



function moveUp(){
	
	if(inPlayer == "false"){
		if(document.getElementsByClassName("activeRecent")[0] !== undefined){
			
			
			
			if(selectedRecentPos!=0){
						 selectedRecentPos = selectedRecentPos - 1;
						 s("card-all " + selectedRecentPos);
						    removeFocus("activeRecent");
					        removeFocus("setBoxShadow");

					        setFocus("card-all " + selectedRecentPos, "activeRecent");
					        setFocus("recent_img_" + selectedRecentPos, "setBoxShadow");
			}
			else{
				 selectedRecentPos = allChannelList.length-1;
				 s("card-all " + selectedRecentPos);
				    removeFocus("activeRecent");
			        removeFocus("setBoxShadow");

			        setFocus("card-all " + selectedRecentPos, "activeRecent");
			        setFocus("recent_img_" + selectedRecentPos, "setBoxShadow");
			        }
					
				}

	}
		      
		
	}




function moveDown(){
	
if(inPlayer == "false"){
	if(document.getElementsByClassName("activeRecent")[0] !== undefined){
		
		
		
		if(selectedRecentPos!=allChannelList.length-1){
					 selectedRecentPos = selectedRecentPos + 1;
					 s("card-all " + selectedRecentPos);
					    removeFocus("activeRecent");
				        removeFocus("setBoxShadow");

				        setFocus("card-all " + selectedRecentPos, "activeRecent");
				        setFocus("recent_img_" + selectedRecentPos, "setBoxShadow");
		}
		else{
			 selectedRecentPos = 0;
			 s("card-all " + selectedRecentPos);
			    removeFocus("activeRecent");
		        removeFocus("setBoxShadow");

		        setFocus("card-all " + selectedRecentPos, "activeRecent");
		        setFocus("recent_img_" + selectedRecentPos, "setBoxShadow");
		        }
				
			}

}
	      
	
}



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
//	var url = "../vid.mp4"
	//var url = "https://hiplayer.hibridcdn.net/p/rotana-khaleejiya?p=0&s=1610975450&e=1610975450&cf=1610975450&h=60c6204c026d6c09bd25271e15964d6b"

	player.src({
		src : "../vid.mp4",
	      withCredentials: true,
	     type : "application/x-mpegURL"
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


function makeCards(){
	
	var rowId = "-1";
	
	 document.getElementById("container-fluid_id").innerHTML = ``;
	    
		var showcase = document.getElementById("container-fluid_id");
		
	 allChannelList.forEach((result, index) => {
			
		
	  	if(index === 0 ){
      		
             showcase.innerHTML += ` <div id="card-all ${index}" class="col-12">
            <img class="cardImg" id="recent_img_${index}" src="../images/splash.png" alt="Card image cap">
            </div>`;
             
      	}
      	else {
      	
              showcase.innerHTML += ` <div id="card-all ${index}" class="col-12 mt-4">
              <img class="cardImg" id="recent_img_${index}" src="../images/splash.png" alt="Card image cap">
              </div>`;

				
			}
	        
       

	 })
	 
	 
	
	
}




function setFocus(id, clas) {

    document.getElementById(id).classList.add(clas);

}

function removeFocus(clas) {

    var el = document.getElementsByClassName(clas)[0].id;
    document.getElementById(el.toString()).classList.remove(clas);
}

//function scrollToCenter() {
//	  var container = $('.container'),
//	    scrollTo = $('.5');
//
//	  container.animate({
//	    //scrolls to center
//	    scrollTop: scrollTo.offset().top - container.offset().top + scrollTo.scrollTop() - container.height() / 2
//	  });
//	}


function scrollToTop(){
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scroll(by , id) {
	    $('html, #id').animate({
	        scrollTop: by
	    }, 300);
}


function s(id){
	document.getElementById(id).scrollIntoView({
		  behavior: 'smooth'
		});
}


function getTimeStamp(){
	return Date.now();
}


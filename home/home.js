var recentChannelList = ['1' ,  '1' , '1' , '1' , '1' , '1'];
var allChannelList = ['1' ,  '1' , '1' , '1' , '1' , '1' , '1' ,  '1' , '1' , '1' , '1' , '1'];
var selectedRecentPos = 0;
var selectedAllPos = 0;

var init = function () {
    
	recentChannels();
	allChannels();
	
	initTizenKeys();
   
};


window.onload = init;
//var span = document.getElementById('clock');
//
//function time() {
//  var d = new Date();
//  var s = d.getSeconds();
//  var m = d.getMinutes();
//  var h = d.getHours();
//	  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
//  console.log(d,m,h)
//}

//setInterval(time, 1000);

//window.onload = time();



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



function moveOk() {
	location.href="../avplay/video.html";
}


function moveUp() {
	
	if(document.getElementsByClassName("activeAll")[0] !== undefined){
		
		if(selectedAllPos>=0 && selectedAllPos<=5){
			selectedAllPos=0;
			scrollToTop();
		      
			
	        removeFocus("activeAll");
	        removeFocus("setBoxShadow");
	        selectedRecentPos = 0;
	        
	        setFocus("card-all " + selectedRecentPos, 'activeRecent');
	    	 setFocus('recent_img_' +  selectedRecentPos, 'setBoxShadow');

		}
		else{
			
			if(selectedAllPos-6 >= 0){
				 scroll('-=250px');
				  
				 selectedAllPos = selectedAllPos-6;
				   removeFocus("activeAll");
			        removeFocus("setBoxShadow");
			        
			        setFocus("card " + selectedAllPos, "activeAll");
			        setFocus("all_img_" + selectedAllPos, "setBoxShadow");
				 
			}
			
		}

	      
	}
	else if(document.getElementsByClassName("activeRecent")[0] !== undefined){
		
		if(selectedRecentPos>=0 && selectedRecentPos<=5){}
		else{
			if(selectedRecentPos-6 >= 0){
				 scroll('-=200px');
				  
				 selectedRecentPos = selectedRecentPos-6;
				    removeFocus("activeRecent");
			        removeFocus("setBoxShadow");

			        setFocus("card-all " + selectedRecentPos, "activeRecent");
			        setFocus("recent_img_" + selectedRecentPos, "setBoxShadow");
				 
			}
		}

	      
	}
	
	
	
	
}



function moveDown() {
	
	if(document.getElementsByClassName("activeRecent")[0] !== undefined){
		
		if(selectedRecentPos>=recentChannelList.length-6 && selectedRecentPos<=recentChannelList.length-1){
		
		    scroll('+=200px');
		      
			
	        removeFocus("activeRecent");
	        removeFocus("setBoxShadow");
	        selectedRecentPos = 0;
	        
	        setFocus("card " + selectedAllPos, "activeAll");
	        setFocus("all_img_" + selectedAllPos, "setBoxShadow");

		}
		else{
			if(selectedRecentPos+6 <= recentChannelList.length-1){
				 scroll('+=200px');
				  
				 selectedRecentPos = selectedRecentPos+6;
				    removeFocus("activeRecent");
			        removeFocus("setBoxShadow");

			        setFocus("card-all " + selectedRecentPos, "activeRecent");
			        setFocus("recent_img_" + selectedRecentPos, "setBoxShadow");
				 
			}
		}
	
	}
	
	
	
	else if(document.getElementsByClassName("activeAll")[0] !== undefined){
		
		if(selectedAllPos>=allChannelList.length-6 && selectedAllPos<=allChannelList.length-1){}
		else{
			
			if(selectedAllPos+6 <= allChannelList.length-1){

			    scroll('+=200px');
			    
			    selectedAllPos = selectedAllPos+6;
			      
				
		        removeFocus("activeAll");
		        removeFocus("setBoxShadow");
		        
		        setFocus("card " + selectedAllPos, "activeAll");
		        setFocus("all_img_" + selectedAllPos, "setBoxShadow");
			}
			
		}
			
			
			

		}
	}
	
	
	
function moveLeft() {
	
	if(document.getElementsByClassName("activeRecent")[0] !== undefined){
		if (selectedRecentPos !== 0) {
			
			 if (selectedRecentPos % 6 == 0) {
		        	
		            scroll('-=250px');
		        	
		        }
			selectedRecentPos--;
	        removeFocus("activeRecent");
	        removeFocus("setBoxShadow");

	        setFocus("card-all " + selectedRecentPos, "activeRecent");
	        setFocus("recent_img_" + selectedRecentPos, "setBoxShadow");

	       
	    } 

	}
	else if(document.getElementsByClassName("activeAll")[0] !== undefined){
		if (selectedAllPos !== 0) {
			
			 if (selectedAllPos % 6 == 0) {
		        	
		            scroll('-=250px');
		        	
		        }
			 selectedAllPos--;
	        removeFocus("activeAll");
	        removeFocus("setBoxShadow");

	        setFocus("card " + selectedAllPos, "activeAll");
	        setFocus("all_img_" + selectedAllPos, "setBoxShadow");

	       
	    } 
	}
	
}


function moveRight() {
	
	
	if(document.getElementsByClassName("activeRecent")[0] !== undefined){
		if (selectedRecentPos !== (recentChannelList.length - 1)) {
			selectedRecentPos++;
	        removeFocus("activeRecent");
	        removeFocus("setBoxShadow");

	        setFocus("card-all " + selectedRecentPos, "activeRecent");
	        setFocus("recent_img_" + selectedRecentPos, "setBoxShadow");

	        if (selectedRecentPos % 6 == 0) {
	        	
	            scroll('+=250px');
	        	
	        }
	    }

	}
    else if(document.getElementsByClassName("activeAll")[0] !== undefined){
	
    	if (selectedAllPos !== (allChannelList.length - 1)) {
    		selectedAllPos++;
	        removeFocus("activeAll");
	        removeFocus("setBoxShadow");

	        setFocus("card " + selectedAllPos, "activeAll");
	        setFocus("all_img_" + selectedAllPos, "setBoxShadow");

	        if (selectedAllPos % 6 == 0) {
	        	
	            scroll('+=250px');
	        	
	        }
	    }
   
  }
	
}


function recentChannels(){
	
	
	var rowId = "-1";
	
	 document.getElementById("container-fluid_id_all").innerHTML = ``;
	    
	 recentChannelList.forEach((result, index) => {
			
		
	   if (index % 6 == 0) {
	          
       	if(index === 0 ){
       		
       		
       		var showcase = document.getElementById("container-fluid_id_all");
               rowId = index;

              
              
               showcase.innerHTML += `<div id="row-channel-all ${rowId.toString()}" class="row pl-2 pr-2"></div>`;
              
       	}
       	else {
       		
       		var showcase = document.getElementById("container-fluid_id_all");
               rowId = index;

               showcase.innerHTML += `<div id="row-channel-all ${rowId.toString()}" class="row pl-2 pr-2 mt-5"></div>`;

				
			}
	   }
               
        

  
	   
	   console.log(rowId);
	   var row = document.getElementById("row-channel-all " + rowId);
       var temp = `
     
       <div id="card-all ${index}" class="col-2">
       <img id="recent_img_${index}" src="../images/channel (${index+1}).png" class="appImg">
       </div>
       
       `;

       row.innerHTML += temp;
	 })
	 
	 
	 setFocus("card-all " + selectedRecentPos, 'activeRecent');
	 setFocus('recent_img_' +  selectedRecentPos, 'setBoxShadow');

	
}





function allChannels(){
	
	
	var rowId = "-1";
	
	 document.getElementById("container-fluid_id").innerHTML = ``;
	    
	 
	 allChannelList.forEach((result, index) => {
			
		
	   if (index % 6 == 0) {
	          
       	if(index === 0 ){
       		
       		
       		var showcase = document.getElementById("container-fluid_id");
               rowId = index;

              
              
               showcase.innerHTML += `<div id="row-channel ${rowId.toString()}" class="row pl-2 pr-2"></div>`;
              
       	}
       	else {
       		
       		var showcase = document.getElementById("container-fluid_id");
               rowId = index;

               showcase.innerHTML += `<div id="row-channel ${rowId.toString()}" class="row pl-2 pr-2 mt-5"></div>`;

				
			}
	   }
               
        

  
	   
	   console.log(rowId);
	   var row = document.getElementById("row-channel " + rowId);
       var temp = `
     
       <div id="card ${index}" class="col-2">
       <img id="all_img_${index}" src="../images/channel (${index+1}).png" class="appImg">
       </div>
       
       `;

       row.innerHTML += temp;
	 })

	
}




function setFocus(id, clas) {

    document.getElementById(id).classList.add(clas);

}

function removeFocus(clas) {

    var el = document.getElementsByClassName(clas)[0].id;
    document.getElementById(el.toString()).classList.remove(clas);
}


function scrollToTop(){
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scroll(by) {
	    $('html, body').animate({
	        scrollTop: by
	    }, 300);
}

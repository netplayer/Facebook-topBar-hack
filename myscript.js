$(document).ready(function(){  
    
	   
    //sometimes cookies notification close link resets bar position
   $('#u_0_2').click(function(){ 	   
	  topbar(); 
   });
    
    //actual hack function
	function topbar(){
    $('#pagelet_bluebar').css({'z-index':'9999999','position':'fixed'});
  
    }
    
    //run script on page scroll just in case
    window.onscroll = function() {
    topbar();
    }

    topbar();
    
});



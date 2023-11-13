// General Scripts Across Site

////////// Fancy Box Functions	 ///////////////////////////////////////////////////////////////////	
				
				$(document).ready(function() {
					try {
					$(".fancybox").fancybox({
						openEffect	: 'none',
						closeEffect	: 'none'
					});
					} catch { };
				});
				
				
////////// Image Swap Function	 ///////////////////////////////////////////////////////////////////	

jQuery(document).ready(function($) {

//rollover swap images with rel 
  var img_src = "";
  var new_src = "";
 
    $(".rollover").hover(function(){
      //mouseover
 
      img_src = $(this).attr('src'); //grab original image
      new_src = $(this).attr('rel'); //grab rollover image
      $(this).attr('src', new_src); //swap images
      $(this).attr('rel', img_src); //swap images
 
    },
    function(){
      //mouse out
 
      $(this).attr('src', img_src); //swap images
      $(this).attr('rel', new_src); //swap images
    });
 
  //preload images
    var cache = new Array();
    //cycle through all rollover elements and add rollover img src to cache array
    $(".rollover").each(function(){
      var cacheImage = document.createElement('img');
      cacheImage.src = $(this).attr('rel');
      cache.push(cacheImage);
    }); 
});




// Begin Send To A Friend Menu Drop Down /////////////////////////////////////////////////////////////	
				
function sendToFriendForm()
	{
	var send_to_friend_form=document.getElementById('send_to_friend_form');
	var send_to_friend_title=document.getElementById('send_to_friend_title');
	var send_to_friend_container_img=document.getElementById('send_to_friend_container img');
	
	if (send_to_friend_form.style.display == "block") 
		{
		  send_to_friend_form.style.display = "none";
		  //$("#send_to_friend_title").slideDown();
		  send_to_friend_title.innerHTML = "Send To A Friend";
		  
		  //send_to_friend_form.style.display = "none"
		  //send_to_friend_container_close_bt.style.display = "none"
		  return false;
		}
	else {
			//send_to_friend_title.style.display = "none";
			send_to_friend_title.innerHTML = "Email: ";
		 	$("#send_to_friend_form").slideDown();
		 
		//send_to_friend_form.style.display = "block"
		//send_to_friend_container_close_bt.style.display = "block"
		}
}
				
				
				
// Begin Video View Caousel //////////////////////////////////////////////////////////////////////

$(function() {
				////////// Carousel Functions								
				
				//$('#carousel span').append('<img src="img/gui/carousel_glare.png" class="glare" />');
				//$('#thumbs a').append('<img src="img/gui/carousel_glare_small.png" class="glare" />');
	try { 
				$('#carousel').carouFredSel({
					responsive: true,
					circular: false,
					auto: 4000,
					items: {
						visible: 1,
						width: 200,
						height: 400
					},
					scroll: {
						fx: 'fade',
						duration: 1500,
						onBefore: function( data ) {
							$(".zoom_link").slideUp();
						},
						onAfter : function( data ) {
							setTimeout(function() {
								$(".zoom_link").slideDown();
							}, 500);
							//$("#bitch").hide();
							//alert($(".zoom_link").slideDown());
						}
					}
				});
	} catch { };

				//Slide in zoom tab link on page load after 3 seconds
				setTimeout(function() {
								$(".zoom_link").slideDown();
							}, 3000);

				$('#thumbs').carouFredSel({
					direction: "up",
					responsive: true,
					circular: false,
					infinite: true,
					auto: false,
					prev : {
						button      : "#prev",
						key         : "left",
						items       : 2,
						//easing      : "easeInOutCubic",
						//duration    : 750
					},
					next : {
						button      : "#next",
						key         : "right",
						items       : 4,
						//easing      : "easeInQuart",
						//duration    : 1500
					},
					items: {
						visible: {
							min: 1,
							max: 3
						},
						
					}
				});
				
				$('#thumbs a').click(function() {
					$('#carousel').trigger('slideTo', '#' + this.href.split('#').pop() );
					$('#thumbs a').removeClass('selected');
					$(this).addClass('selected');
					return false;
				});
				
				
				//Removes height CSS attribute that carousel defines
				//$("#thumbs a").css("height","105");
				$("#thumbs a").removeAttr('style');
					

});
// End Video View Caousel
//////////////////////////////////////////////////////////////////////////////////////////////////





				
// Begin Homepage Splash Carousel//////////////////////////////////////////////////////////////////////

$(function() {
				
	try {
				$('#carousel_homepage_splash').carouFredSel({
					responsive: true,
					circular: true,
					infinite: true,
					auto: 4000,
					prev : {
						button      : "#prev-home-splash",
						key         : "left",
						fx			: 'fade',
						duration	: 1200
						
					},
					next : {
						button      : "#next-home-splash",
						key         : "right",
						fx			: 'fade',
						duration	: 1200
					},
					items: {
						visible: 1,
						width: 675,
						height: 340
					},
					scroll: {
						fx: 'fade',
						easing: 'linear',
						duration: 2000,
						onBefore: function( data ) {
							$("#vid_lg_overlay_wide").slideUp();
						},
						onAfter : function( data ) {
							setTimeout(function() {
								$("#vid_lg_overlay_wide").slideDown();
							}, 800);
						}
					}
				});
				
				//Slide in next and previous overlay 
				setTimeout(function() {
								$("#vid_lg_overlay_wide").slideDown();
							}, 2000);
	} catch { };
});
// End Homepage Splash Carousel
//////////////////////////////////////////////////////////////////////////////////////////////////












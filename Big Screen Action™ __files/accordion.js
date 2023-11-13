$(document).ready(function(){

	
		$(".acc").click(function(){
			//slide up all the link lists
				$(".controllink").slideUp(5);
			//slide down the link list below the h3 clicked - only if its closed
				if(!$(this).next().is(":visible"))
			{
				$(this).next().slideDown(5);
			}
		})
	})

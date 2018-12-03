$(document).ready(function(){
	$(document).on("click",".menuIcon", function(){
		$(this).toggleClass("change");
		//$(".sub_menu").slideToggle();

	});

	$(document).on("click","#sidebarCollapse", function(){
		$("#sidebar").toggleClass("active");
		$(".wrapper").toggleClass("its-open");
		$("body").toggleClass("hide-scroll");
	});

	$(document).on("click",".inner-close p i",function(){
	
	if($(".menuIcon ").hasClass("change")){ $(".menuIcon ").removeClass("change");}	
	});

	$(document).on('click', '.tab_menu a[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 80
	    }, 500);

	    var get_id = "#" + $(this).attr("data-tabs");
	    

	    $(this).parents(".tabs_container").find(".tab_item").slideUp();
	    $(this).parents(".tab_menu").find("a").removeClass("active");
	    $(this).addClass("active");
	    $(get_id).slideDown();
	});

	$(document).on('click', '.list_services li', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( "#" + $.attr(this, 'data-id')).offset().top - 80
	    }, 500);

	    var get_id = "#" + $(this).attr("data-link");
	    

	    $("#application_tabs").find(".tab_item").slideUp();
	    $(this).parents(".list_services").find("li").removeClass("active");
	    $(this).addClass("active");
	    $(get_id).slideDown();
	});

	$(window).on("scroll",function(){

		var scrollTop = $(this).scrollTop();

		if($(".detect_menu").length > 0){
			var detect_menu = $(".detect_menu").offset().top - 170;
		
			/*console.log(scrollTop)
			console.log(detect_menu)*/

			if(scrollTop > detect_menu){
					$("header").addClass("fixed_header");
			}
			
			else{
				$("header").removeClass("fixed_header");
			}

			if(scrollTop > 200){
				/*if(!$(".owl-stage .owl-item:last-child").hasClass("active")){
					$('html, body').animate({
				        scrollTop: $(".scroll_slider").offset().top
				    }, 500);	

				}
				else{
					console.log("else")
				}*/
				
			}
		}
		else{
			if(scrollTop > 175){
					$("header").addClass("fixed_header");
			}
			
			else{
				$("header").removeClass("fixed_header");
			}
		}
		
		
	});




	  if($(window).width() <= 980){
	$(document).ready(function(){
		$(".parent li a").click(function(){
			
			//if($(this).hasClass("rotate")){ $(this).removeClass("rotate");} else { $(this).addClass("rotate");}
			$(".parent li a").not($(this)).removeClass("rotate");
			$(this).toggleClass("rotate");

			$(".parent li ul").not($(this).next("ul")).slideUp();
			$(this).next("ul").slideToggle();
		});
	});}


 $(document).ready(function() {  
  		 /*$(".carousel-inner").swiperight(function() {  
    		  $(this).carousel('prev');  
	    		});  
		   $(".carousel-inner").swipeleft(function() {  
		      $(this).carousel('next');  
	   });  */
	});  

});





/////   GNB 2단 
$(document).ready(function(){

// GNB 메뉴
	$(".gnbsub1").hide();  // 서브메뉴 1단 숨기기
	$(".gnbsub2").hide();   // 서브메뉴 2단 숨기기
	$(".snsToggle>a").next("ul").hide();   // sns toggle 숨기기
		
	 $(".snsToggle>a").click(function(){
			$(this).next("ul").slideToggle("fast");
			return false;
	});

	$(".gnb>li").bind("mouseenter focusin",function(){   // 첫번째 메뉴 mouseenter, focusin  할때
			$(this).children(".gnbsub1").stop().show(); 
		
			$(this).children("a").css('color','#0f94e1');
	
			}).bind("mouseleave focusout",function(){   // 첫번째 메뉴 mouseleave, focusout
			$(this).children(".gnbsub1").stop().hide();
		
			$(this ).children("a").css('color', '#666');

		
	});

	$(".gnbsub1>li").bind("mouseenter focusin",function(){   // sub1  메뉴 mouseenter, focusin
		$(this).children(".gnbsub2").stop().show(); 
		$(this).children("a").animate({'backgroundColor': '#0f94e1','color':'white'},"fast");

	
		}).bind("mouseleave focusout",function(){   // sub1  메뉴 mouseleave, focusout
		$(this).children(".gnbsub2").stop().hide();	
		$(this ).children("a").animate({'backgroundColor': '#fff','color': '#666'},"fast");

	
	});

	$(".gnbsub2>li").bind("mouseenter focusin",function(){   // sub2  메뉴 mouseenter, focusin
	
		$(this).children("a").animate({'backgroundColor': '#0f94e1','color':'white'},"fast");

	
		}).bind("mouseleave focusout",function(){   // sub2  메뉴 mouseleave, focusout
	
		$(this ).children("a").animate({'backgroundColor': '#fff','color': '#666'},"fast");

	
	});


// 모바일메뉴
	

	$(".sitemapMenu").hide(); 

	$(".menubtn1").bind("click", function(){

				if($(".sitemapMenu").css("display")=="none"){
						$(".sitemapMenu").slideDown(); 	
						$(this).children("img").attr("src","image/menu_close.png");
							
					}else{

						$(".sitemapMenu").slideUp(); 
						$(this).children("img").attr("src","image/btn_gnb.png");
						
					}

					return false;
		
	});

	

//  모바일 gnb
$(".grayLayer2").hide();
$(".gnb2").css({"left":"-300px","z-index":"20"});
	$(".menubtn2").bind("click focusin", function(){

				if($(".gnb2").css("left")=="-300px"){
						$(".grayLayer2").fadeIn();
					
						$(".gnb2").animate({"left":"-20px"});	
						

							
						
							
					}else{
						$(".grayLayer2").fadeOut();
						$(".gnb2").animate({"left":"-300px"});	
						
						
						
					}

					return false;
		
	});

$(".grayLayer2,  .gnb2Close a").click(function(){
		
				
		

		$(".gnb2").animate({"left":"-300px"}, function(){
			$(".grayLayer2").fadeOut();
		});	
	
		
	});


// .gnb2menu li .gnb2sub1
// .gnb2menu li .gnb2sub2


$(".gnb2menu>li>a").bind("click focusin", function(){



		if($(this).next("ul").css("display")=="none"){ //display:none;
				
				$(" .gnb2sub1").slideUp(); // 초기화 (설명 다 안보이게 가리기)
				$(".gnb2menu>li>a").css("borderBottom","1px solid #ddd");
				
				$(this).next("ul").slideDown(); 	//display:block;
				$(this).css("borderBottom","2px solid #0F94E1");
				

		}

		
		return false;
});

$(".gnb2sub1>li>a").bind("click focusin", function(){

		if($(this).next("ul").css("display")=="none"){ //display:none;

				$(" .gnb2sub2").slideUp(); // 초기화 (설명 다 안보이게 가리기)

				$(this).next("ul").slideDown(); 	//display:block;
			
				

		}

		
		return false;
});

		






// 서치
	$(".searchSlide").hide();
	$(".grayLayer").hide();

	$(".search>a").bind("click focusin", function(){
		
		if($(".searchSlide").css("display")=="none"){
			$(".searchSlide").slideDown(); 	
		
				$(".grayLayer").fadeIn();
				

		}
		
			return false;
	});




	$(".grayLayer, .searchClose").click(function(){
		$(" .searchSlide").slideUp( function(){
				$(".grayLayer").fadeOut();
		});

		$(".gnb2").animate({"left":"-300px"}, function(){
			
		});	
	
		
	});

// resizing

	var pcWidth=$("body").width();
	$(window).resize(function(){
		
		pcWidth=$("body").width();
	
		if(pcWidth<1023){
			$(".sitemapMenu").hide(); 
			$(".menubtn1").children("img").attr("src","image/btn_gnb.png");
		}

		else if(pcWidth>1022){
			$(".grayLayer2").fadeOut();
			$(".gnb2").animate({"left":"-300px"});	
		}
	
	});









});
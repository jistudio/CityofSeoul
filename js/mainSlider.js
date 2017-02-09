
/********************* prev 와 next    **************************/
$(function(){


	$(".prev").hide();
	$(".next").hide();

	// mouseover하면 보이게
	$(".train, .prev, .next").mouseover(function(){
		$(".prev").stop().fadeIn();
		$(".next").stop().fadeIn();

	});

	// mouseout하면 보이게
	$(".train").mouseout(function(){
		$(".prev").stop().fadeOut();
		$(".next").stop().fadeOut();
 
	});


});

/********************* 슬라이더   **************************/
$(function(){

	

	//// 초기값 1) 첫 메인 화면으로 화면 고정
	var train=$(".tunnel").html();   // tunnel안에 들어있는 내용을 train에 담음
	//  console.log(train);   //  train안에 뭐들어있니?

	$(window).resize( function(){   //  resizing 할때마다
		var width=$(".sliding").width();  // 
		$(".tunnel").html( train );   //  train으로 덮어씌움, 계속 1번 그림나오는 기차로 reset 됨


		$(".prev").hide();
		$(".next").hide();

		// mouseover하면 보이게
		$(".train, .prev, .next").mouseover(function(){
			$(".prev").stop().fadeIn();
			$(".next").stop().fadeIn();

		});

		// mouseout하면 보이게
		$(".train, .prev, .next").mouseout(function(){
			$(".prev").stop().fadeOut();
			$(".next").stop().fadeOut();

		});

	});

	//// 초기값 2) 
	var width = $(".sliding").width();
	$(".train").prepend( $(".train  li:last")  );    	
	$(".train").css({"marginLeft":"-"+ width +"px"});

	$(".button li:eq(0) a").addClass("selected");

	////  다음버튼
	$(".next").click(function(){

		$(".sm_mv_text>strong").css({"opacity":"0","marginLeft":"30px"});
		$(".visualTitle").css({"opacity":"0","marginLeft":"30px"});
		$(".visualDesc").css({"opacity":"0","marginLeft":"60px"});
		$(".sm_mv_text").children("a").css({"opacity":"0","marginLeft":"80px"});
	

		 width = $(".sliding").width();  
		$(".train").animate({"marginLeft":"-="+ width +"px"} , "slow" , "easeOutCubic"  , function(){   // clearQueue빼기
				
				$(".train").append( $(".train  li:first")  );
				$(".train").css({"marginLeft":"-"+ width +"px"});
				process();   // button controler
				
				 // copy animation
				 $(".sm_mv_text>strong, .visualTitle, .visualDesc").animate({"opacity":"1","marginLeft":"0"},1500, "easeOutCubic"); 
			
				$(".sm_mv_text").children("a").animate({"opacity":"1","marginLeft":"0"},1500, "easeOutCubic"); 
		});
		
	});
	////  이전버튼
	$(".prev").click(function(){

		$(".sm_mv_text>strong").css({"opacity":"0","marginLeft":"30px"});
		$(".visualTitle").css({"opacity":"0","marginLeft":"30px"});
		$(".visualDesc").css({"opacity":"0","marginLeft":"60px"});
		$(".sm_mv_text").children("a").css({"opacity":"0","marginLeft":"80px"});

		
		width = $(".sliding").width();
		$(".train").animate({"marginLeft":"+="+ width +"px"} , "slow" , "easeOutCubic" , function(){   // clearQueue빼기
			
				$(".train").prepend( $(".train  li:last")  );
				$(".train").css({"marginLeft":"-"+ width +"px"});
				process();   // button controler

				// copy animation
				 $(".sm_mv_text>strong, .visualTitle, .visualDesc").animate({"opacity":"1","marginLeft":"0"},1500, "easeOutCubic"); 
			
				$(".sm_mv_text").children("a").animate({"opacity":"1","marginLeft":"0"},1500, "easeOutCubic"); 


		});

	});


	
	////////////////////////////// TIMER  ( 웹 접근성 안맞음 )
		// 	window.setInterval(  뭐해주세요    ,  몇초간격으로 );

		var timer;
		function myAnim(){   // timer function에 담기
			timer = 	window.setInterval(  function(){   $(".next").click();  }    ,  7000 );
		}
		myAnim();
		$(".playStop a").attr("title","스탑 버튼");
	/////  TIMER 끝내기
		// 	window.clearInterval(     타이머 끝내주세요 );
		$(".next  a , .prev  a ").click(function(){
			window.clearInterval(   timer );	
			$(".playStop a").css("backgroundPosition","-17px 0px");
		});

	/// pause 버튼 클릭시
	$(".playStop a").click(function(){ 
		if( $(this).css("backgroundPosition")=="-1px 0px"){   // 0px 까지 꼭 붙여줌
			// console.log( $(this).css("backgroundPosition") );
			$(this).css("backgroundPosition","-17px 0px");   
			$(this).attr("title","플레이 버튼");  // 웹접근성
			window.clearInterval(   timer );	
		}else{
			$(this).css("backgroundPosition","-1px 0px");
			$(this).attr("title","스탑 버튼");  // 웹접근성
			myAnim();   // timer 다시 시작
		}
		return false;

	});

	/// 메뉴 클릭시

	$(".button li a").click(function(){

				now = Number( $(".train > li >  img").attr("src").substring(12,13) ) +1;  // a 빼기
				if(now == 5){   now = 1;}
				console.log("현재진행하는 번호 : " + now );

				target = $(this).text();
				console.log("내가 누른 번호 : "  + target );
			
			if(now   <  target){ for(var  index=now;    index<target ; index++){   $(".next").click();  }   }
			
			if( now > target ){ for(var  index=now;    index>target ; index--){   $(".prev").click();  }   }

			window.clearInterval( timer );	   // 버튼을 클릭했을때 animation 멈추게
		});
	});

	function process(){
					var btn = $(".train > li >  img").attr("src").substring(12,13);   // a 빼기
					$(".button li a").removeClass("selected");
					if(btn == 4){   btn = 0;}
					$(".button li:eq(" + btn + ") a").addClass("selected");
	}







/////////////  SWIPE  플러그인

// plugin 주의사항

// jquery 플러그인 버전 맞춘다
// 아이디, 클래스 이름 확인
// a 태그 빼준다 -> a 태그와 swipe동시에 작동 안함

$(function() {      

  $(".sliding").swipe( {
	
	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

	// console.log("You swiped " + direction );  
	 //   $(this).text("You swiped " + direction );  
	  
	  if(direction=="left"){ $(".next").trigger("click"); }   //  $(".next").click();  비교
	  else if(direction=="right"){ $(".prev").trigger("click"); }
	//  prev와 next 버튼 클릭하면 이벤트 핸들러 강제 실행   

	}

  });
});




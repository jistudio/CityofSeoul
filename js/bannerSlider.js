$(function(){

	//// 초기값 1) 첫 메인 화면으로 화면 고정
	var train2=$(".tunnel2").html();   // tunnel안에 들어있는 내용을 train에 담음
	//  console.log(train);   //  train안에 뭐들어있니?

	$(window).resize( function(){   //  resizing 할때마다
		var width2=$(".sliding2").width();  // 
		$(".tunnel2").html( train2 );   //  train으로 덮어씌움, 계속 1번 그림나오는 기차로 reset 됨
	});

	//// 초기값 2) 
	var width2 = $(".sliding2").width();
	$(".train2").prepend( $(".train2  li:last")  );    	
	$(".train2").css({"marginLeft":"-"+ width2 +"px"});
	$(".button2 li:eq(0) a").addClass("selected");




	////  다음버튼
	$(".next2").click(function(){
		 width2 = $(".sliding2").width();  
		$(".train2").clearQueue().animate({"marginLeft":"-="+ width2 +"px"} , "slow" , "linear"  , function(){
				$(".train2").append( $(".train2  li:first")  );
				$(".train2").css({"marginLeft":"-"+ width2 +"px"});
				process2();
		});
		return false;
	});
	////  이전버튼
	$(".prev2").click(function(){
		width2 = $(".sliding2").width();
		$(".train2").clearQueue().animate({"marginLeft":"+="+ width2 +"px"} , "slow" , "linear" , function(){
				$(".train2").prepend( $(".train2  li:last")  );
				$(".train2").css({"marginLeft":"-"+ width2 +"px"});
				process2();

		});
		return false;
	});

	////////////////////////////// TIMER  ( 웹 접근성 안맞음 )
		// 	window.setInterval(  뭐해주세요    ,  몇초간격으로 );
		var timer2 = window.setInterval(  function(){   $(".next2").click();  }    ,  6000 );

	/////  TIMER 끝내기
		// 	window.clearInterval(     타이머 끝내주세요 );
		$(".next2  a , .prev2  a").click(function(){
			window.clearInterval(  timer2 );	
		});

	//// 컨트롤러
	$(".button2 li a").click(function(){
		//  현재진행하는 번호
			now2 = Number( $(".train2 > li > a  img").attr("src").substring(12,13) ) + 1;  
			if(now2 == 5){   now2 = 1;}
			// console.log("현재진행하는 번호 : " + now );
		//  내가 누른것의 번호
		    target2 = $(this).text();
		//	console.log("내가 누른 번호 : "  + target );
		//  각각의 세부버튼누를때
		//  진행이1    =>  누른것 2,3,4      now     <   target
		//       1=>2   1=>3  1=> 4    	    $(".next").click();  
		if(now2   <  target2 ){ for(var  index=now2;    index<target2 ; index++){   $(".next2").click();  }   }
		//  진행이 4 => 누른것  1,2,3      now > target   	    $(".prev").click(); }
		if( now2 > target2 ){ for(var  index=now2;    index>target2 ; index--){   $(".prev2").click();  }   }

		window.clearInterval(  timer2 );	
		return false;
	});

});



	function process2(){
					var btn2 = $(".train2 > li > a  img").attr("src").substring(12,13);  
					$(".button2 li a").removeClass("selected");
					if(btn2 == 4){   btn2 = 0;}
					$(".button2 li:eq(" + btn2 + ") a").addClass("selected");
	}
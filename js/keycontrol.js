$(function(){

	//// 초기값 1) 첫 메인 화면으로 화면 고정
	var train3=$(".tunnel3").html();   // tunnel안에 들어있는 내용을 train에 담음
	//  console.log(train);   //  train안에 뭐들어있니?



	//// 초기값 2) 

	$(".train3").prepend( $(".train3  li:last")  );    	
	$(".train3").css({"marginLeft":"-260px"});





	////  다음버튼
	$(".keyright").click(function(){

		$(".train3").clearQueue().animate({"marginLeft":"-=260px"} , "fast" , "linear"  , function(){
				$(".train3").append( $(".train3  li:first")  );
				$(".train3").css({"marginLeft":"-260px"});
				
		});
		return false;
	});
	////  이전버튼
	$(".keyleft").click(function(){

		$(".train3").clearQueue().animate({"marginLeft":"+=260px"} , "fast" , "linear" , function(){
				$(".train3").prepend( $(".train3  li:last")  );
				$(".train3").css({"marginLeft":"-260px"});


			});
			return false;
		});
	
	});

	

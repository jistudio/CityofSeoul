$(function(){

	//// �ʱⰪ 1) ù ���� ȭ������ ȭ�� ����
	var train3=$(".tunnel3").html();   // tunnel�ȿ� ����ִ� ������ train�� ����
	//  console.log(train);   //  train�ȿ� ������ִ�?



	//// �ʱⰪ 2) 

	$(".train3").prepend( $(".train3  li:last")  );    	
	$(".train3").css({"marginLeft":"-260px"});





	////  ������ư
	$(".keyright").click(function(){

		$(".train3").clearQueue().animate({"marginLeft":"-=260px"} , "fast" , "linear"  , function(){
				$(".train3").append( $(".train3  li:first")  );
				$(".train3").css({"marginLeft":"-260px"});
				
		});
		return false;
	});
	////  ������ư
	$(".keyleft").click(function(){

		$(".train3").clearQueue().animate({"marginLeft":"+=260px"} , "fast" , "linear" , function(){
				$(".train3").prepend( $(".train3  li:last")  );
				$(".train3").css({"marginLeft":"-260px"});


			});
			return false;
		});
	
	});

	
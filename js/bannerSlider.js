$(function(){

	//// �ʱⰪ 1) ù ���� ȭ������ ȭ�� ����
	var train2=$(".tunnel2").html();   // tunnel�ȿ� ����ִ� ������ train�� ����
	//  console.log(train);   //  train�ȿ� ������ִ�?

	$(window).resize( function(){   //  resizing �Ҷ�����
		var width2=$(".sliding2").width();  // 
		$(".tunnel2").html( train2 );   //  train���� �����, ��� 1�� �׸������� ������ reset ��
	});

	//// �ʱⰪ 2) 
	var width2 = $(".sliding2").width();
	$(".train2").prepend( $(".train2  li:last")  );    	
	$(".train2").css({"marginLeft":"-"+ width2 +"px"});
	$(".button2 li:eq(0) a").addClass("selected");




	////  ������ư
	$(".next2").click(function(){
		 width2 = $(".sliding2").width();  
		$(".train2").clearQueue().animate({"marginLeft":"-="+ width2 +"px"} , "slow" , "linear"  , function(){
				$(".train2").append( $(".train2  li:first")  );
				$(".train2").css({"marginLeft":"-"+ width2 +"px"});
				process2();
		});
		return false;
	});
	////  ������ư
	$(".prev2").click(function(){
		width2 = $(".sliding2").width();
		$(".train2").clearQueue().animate({"marginLeft":"+="+ width2 +"px"} , "slow" , "linear" , function(){
				$(".train2").prepend( $(".train2  li:last")  );
				$(".train2").css({"marginLeft":"-"+ width2 +"px"});
				process2();

		});
		return false;
	});

	////////////////////////////// TIMER  ( �� ���ټ� �ȸ��� )
		// 	window.setInterval(  �����ּ���    ,  ���ʰ������� );
		var timer2 = window.setInterval(  function(){   $(".next2").click();  }    ,  6000 );

	/////  TIMER ������
		// 	window.clearInterval(     Ÿ�̸� �����ּ��� );
		$(".next2  a , .prev2  a").click(function(){
			window.clearInterval(  timer2 );	
		});

	//// ��Ʈ�ѷ�
	$(".button2 li a").click(function(){
		//  ���������ϴ� ��ȣ
			now2 = Number( $(".train2 > li > a  img").attr("src").substring(12,13) ) + 1;  
			if(now2 == 5){   now2 = 1;}
			// console.log("���������ϴ� ��ȣ : " + now );
		//  ���� �������� ��ȣ
		    target2 = $(this).text();
		//	console.log("���� ���� ��ȣ : "  + target );
		//  ������ ���ι�ư������
		//  ������1    =>  ������ 2,3,4      now     <   target
		//       1=>2   1=>3  1=> 4    	    $(".next").click();  
		if(now2   <  target2 ){ for(var  index=now2;    index<target2 ; index++){   $(".next2").click();  }   }
		//  ������ 4 => ������  1,2,3      now > target   	    $(".prev").click(); }
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
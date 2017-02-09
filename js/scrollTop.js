//     ------------------    위로가기 버튼    ---------------------------

$(function(){  //로딩이 끝나면 
		
		//  [1]  #top  화면상에 안보이게 숨기기   - 패턴: 대상.효과
	
		//  [2]  스크롤을 내리면 #top이 서서히 나타난다
			// 패턴: 이벤트대상(window)   / 이벤트 (srcoll)   / 이벤트 핸들러(서서히나타난다)
		//  [3]  #top을 클릭하면 서서히 위로 올라간다

		
	
		
		$("#top").hide();
		
		
		$(window).bind("scroll ", function(){  
			//  console.log( "스크롤의 위치:" +  $(this).scrollTop() );      scrollTop(); =>스크롤 위치 알아내기
			//  100 은 스크롤 한번이라도 내린거, 200은 스크롤 2번 내린거
			
		

				if( $(this).scrollTop() > 100 ){
				
					$("#top").fadeIn();
							
							
					}else{ 
				
						$("#top").fadeOut(); 
					}

		});



		$("#top").click(function(){
			// click(function(e){
			// e.preventDefault; (return false 대신 쓸수 있다. 기본속성 방지: a 클릭하면 페이지 넘어감, 깜박거릴 수 있음)

			$("body, html").animate({"scrollTop":"0"}, 500);
			
	
		
			return false;   //  **** return false 꼭 들어감
		
		});
});
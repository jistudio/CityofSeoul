// 1)  아이디와 비밀번호의 칸 찾아오기
// 2)  빈칸이라면  빈칸입니다.확인해주세요 알림창 / 커서가게 만들기

//   id이용 DOM level2 방식으로 form정보 전송


if( window.addEventListener ){     // 표준 브라우저니?


	window.addEventListener('load', function(){
		document.getElementById("joinform").onsubmit=check; }, false );    // 전송할때(onsubmit) 검사하세요(check)
													

}else if( window.attachEvent ){      // 하위 브라우저니?

	window.attachEvent('onload', function(){
		document.getElementById("joinform").onsubmit=check; });


}


function check(){

	var username = document.getElementById("username");   // $("#username")
	var userid = document.getElementById("userid");   // $("#userid")
	var userpass = document.getElementById("userpass");  
	var userpassre = document.getElementById("userpassre");  
	var useremail1 = document.getElementById("BoardEmail1"); 
	var useremail2= document.getElementById("BoardEmail2");  

	if( username.value==""){   // $("#userid").val()  제이쿼리 방식
		alert("[이름] 필수항목입니다"); 
		username.focus(); 

	
		return false;
	}
	if( userid.value==""){ 
		alert("[아이디] 필수항목입니다"); userid.focus(); return false;
	}

	if( userpass.value==""){ 
		alert("[비밀번호] 필수항목입니다"); userpass.focus(); return false;
	}
	if( userpassre.value==""){ 
		alert("[비밀번호 확인] 필수항목입니다"); userpassre.focus(); return false;
	}
	if( useremail1.value==""){  
		alert("[이메일] 필수항목입니다"); useremail1.focus(); return false;
	}
	if( useremail2.value==""){  
		alert("[이메일] 필수항목입니다"); useremail2.focus(); return false;
	}

}
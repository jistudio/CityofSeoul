<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" >
<title> 회원로그인 | 서울특별시 웹사이트</title>
<link rel="stylesheet" type="text/css" href="css/reset.css"/>
<link rel="stylesheet"  type="text/css" href="css/base.css"/>
<link rel="stylesheet"  type="text/css" href="css/layout.css"/>
<link rel="stylesheet"  type="text/css" href="css/header.css"/>
<link rel="stylesheet"  type="text/css" href="css/login.css"/>
<link rel="stylesheet"  type="text/css" href="css/footer.css"/>
<link rel="stylesheet"  type="text/css" href="css/mediaLogin.css"/>


<!--[if IE 7]>
		<link rel="stylesheet" type="text/css" href="css/ie7.css"/>
<![endif]-->

<!--[if IE 8]>
		<link rel="stylesheet" type="text/css" href="css/ie8.css"/>
<![endif]-->

<!--[if gt IE 7]>
		<link rel="stylesheet" type="text/css" href="css/ie89.css"/>
<![endif]-->

 <!-- html5shiv 플로그인 껴넣기-->
  <!--[if lt IE 9]>
     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js">
	 </script>
 <![endif]-->

<style>
/* ie 10 과 ie edge 크로스 브라우징 핵*/
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {  
		#header .headerBot nav .gnb LI.allMenu {

		padding-top: 20px;

		}

	#header .headerBot nav .gnb LI.search {
		
		padding-top: 20px;
		}
}  

/*firefox only hack*/
@-moz-document url-prefix() { 

 }

</style>

<script src="js/jquery-1.11.3.min.js"></script>
<script src="js/scrollTop.js"></script>
<script src="js/mainGnb.js"></script>
<script src="js/jquery.color.js"></script> 

<script>
//***************** 유효성 테스트 *******************

// 1)  아이디와 비밀번호의 칸 찾아오기
// 2)  빈칸이라면  빈칸입니다.확인해주세요 알림창 / 커서가게 만들기

//   id이용 DOM level2 방식으로 form정보 전송

if( window.addEventListener ){     // 표준 브라우저니?

	window.addEventListener('load', function(){
		document.getElementById("loginform").onsubmit=check; }, false );    
		// 전송할때(onsubmit) 검사하세요(check) 펑션

}else if( window.attachEvent ){      // 하위 브라우저니?

	window.attachEvent('onload', function(){
		document.getElementById("loginform").onsubmit=check; });
		// 전송할때(onsubmit) 검사하세요(check)
}


function check(){

	var userid = document.getElementById("userid");   // $("#userid")
	var userpass = document.getElementById("userpass");   // $("#userid")
	

	if( userid.value==""){   // $("#userid").val()  제이쿼리 방식
		alert("아이디가 빈칸입니다"); userid.focus(); return false;
	}
	if( userpass.value==""){   // $("#userid").val()
		alert("비밀번호가 빈칸입니다"); userpass.focus(); return false;
	}


}
</script>
 </head>
 <body>

<!--바로가기 메뉴 => skip navigation,  h태그 필요없음 , base.css에 있음-->
<ul id="skipnav">
	<li><a href="#gnba">주메뉴 바로가기</a></li><!--gnb의 첫 번째  a에 id gnba 넣어줌-->
	<li><a href="#maina">본문내용 바로가기</a></li>
</ul>
<!--  skip nav END  -->

 <div id="wrapper">
	<!--  ############## header.php    넣기-->
	<?php	include "common/header.php";  ?>

 <div id="content">
		<h2>주요 컨텐츠</h2>

		<div class="breadInner">
			<ul class="breadcrumb">
				<li class="gohome"><a href="#" title="홈 바로가기"><img src="image/icon_home.png" alt="홈 아이콘"/></a></li>
				<li><a href="#"  title="서울뉴스 바로가기" >서울 뉴스</a></li>
				<li id="bread3">
					<a href="#"  title="새소식 바로가기">
					새소식
					<span class="breadDown"><img src="image/icon_arrowDown.png" alt="down arrow"/></span>
					</a>
				</li>
			</ul>
		</div>
		
		<section class="loginInner">
			<h3>회원로그인</h3>
		
			<form  action="http://jistudio.dothome.co.kr/"  method="get" id="loginform" >
			<!--  id이용 DOM level2 방식으로 form정보 전송-->
				<fieldset>
				<legend>회원로그인</legend>
					<p> 
						<label  for="userid">아이디</label>
						<input type="text"   id="userid"   name="userid" placeholder="최소 5자 이상">
					</p>
					<p> 
						<label  for="userpass">비밀번호</label>
						<input type="password"   id="userpass"   name="userpass" placeholder="영문, 숫자중 2가지 이상 혼합 6자 이상">
					</p>
				
					<p class="resultbtn">
						<input type="submit"   value="로그인"  id="answer" >
						
					</p>
				</fieldset>
			</form>
			<ul>
				<li><a href="#" title="회원가입"><img src="image/checkbox6.png" alt="회원가입 아이콘" />회원가입</a></li>
				<li><a href="#" title="아이디 찾기"><img src="image/user7.png" alt="아이디 찾기 아이콘" />아이디 찾기</a></li>
				<li class="loginL"><a href="#" title="비밀번호 찾기"><img src="image/key162.png" alt="비밀번호 찾기" />비밀번호 찾기</a></li>
			</ul>
			

		</section>
	
		
	 </div><!--content END-->

<!--  ############## footer.php    넣기-->
<?php	include "common/footer.php";  ?>

 </div>  <!--wrapper END-->
 </body>
</html>

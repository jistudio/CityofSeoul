<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" >
<title> 회원가입 | 서울특별시 웹사이트</title>
<link rel="stylesheet" type="text/css" href="css/reset.css"/>
<link rel="stylesheet"  type="text/css" href="css/base.css"/>
<link rel="stylesheet"  type="text/css" href="css/layout.css"/>
<link rel="stylesheet"  type="text/css" href="css/header.css"/>
<link rel="stylesheet"  type="text/css" href="css/join.css"/>
<link rel="stylesheet"  type="text/css" href="css/footer.css"/>
<link rel="stylesheet"  type="text/css" href="css/mediaJoin.css"/>

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
<script src="js/join.js"></script>  <!--유효성 검사-->
<script src="js/jquery.color.js"></script> 

<!--  ::::::: 우편번호찾기 : http://postcode.map.daum.net/guide    -->
<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
	function  postcode()  //  우편번호 찾기 버튼 클릭하면 펑션 실행
	{
		new daum.Postcode({
			oncomplete: function(data) {   
				// 팝업이 닫히면서 oncomplete: (콜백 함수)가져오는 주소 데이터(data)
				// alert('haha');
				document.getElementById("post1").value = data.postcode1;  // post1에 받아온 데이터 넣기
				document.getElementById("post2").value = data.postcode2;
				document.getElementById("address2").value =	data.address;
				document.getElementById("address3").focus();   //커서가게
			}
		}).open();
	}
</script>

<!--   아이디 중복체크  -->
<script>
		function doublecheck()
		{
			var str = document.getElementById("userid").value;
			if( str.length == ""  ){  
				document.getElementById("using").innerHTML = "아이디를 입력해주세요"; 
				document.getElementById("userid").focus();  //커서가게
				return false;    
			}else{
				xmlhttp = new  XMLHttpRequest();
				xmlhttp.onreadystatechange = function(){  
					//alert('ok');  
					if( xmlhttp.readyState == 4  && xmlhttp.status == 200  ){
						document.getElementById("using").innerHTML = xmlhttp.responseText;
					}
				};
				xmlhttp.open("GET" , "a3_doublecheck.php?userid=" + str  , true);
				xmlhttp.send();
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
		
		<section class="joinInner">
			<h3>회원가입</h3>
			<p class="desc1">  
				<span>안전한 개인정보 보호를 위해 회원님의 동의없이 제 3자에게 정보를 제공하지 않습니다. </span>
				 <span><strong  class="starrequired"> * </strong> 표기가 된 항목은 필수 입력사항이므로 꼭 입력해주세요. </span>
				<form action="http://www.naver.com" method="get" id="joinform">
				<!--  id이용 DOM level2 방식으로 form정보 전송-->
					<fieldset>
					<legend> 회원가입 </legend>
						<!-- 아이디 : username-->
						<p> 
							<label for="username"> <strong  class="starrequired"> * </strong> 이름</label>
							<input id="username"    name="username"   type="text"  title="필수 이름"/>
						</p>
					
						<!-- 아이디 : userid -->
						<p> 
							<label for="userid"> <strong  class="starrequired"> * </strong> 아이디</label>
							<input id="userid"    name="userid"   type="text" placeholder="최소 5자 ~ 최대 15자"  title="필수 아이디" />
						

							<input type="button" value="중복체크" id="idCheck"  onclick="return doublecheck();"  />
							<span   id="using"  > </span>
						</p >
					
						<!-- 비밀번호 : userpass -->
						<p> 
							<label for="userpass"> <strong  class="starrequired"> * </strong> 비밀번호</label>
							<input id="userpass"    name="userpass"   type="password" placeholder="영문, 숫자중 2가지 이상 혼합 10~15자"  title="필수 비밀번호"/>
						</p>
					
						<!-- 비밀번호확인 : userpassre -->
						<p> 
							<label for="userpassre"> <strong  class="starrequired"> * </strong> 비밀번호확인</label>
							<input id="userpassre"    name="userpassre"   type="password"  title="필수 비밀번호 확인"/>
						</p>
					
						<!-- 이메일 : useremail -->
						<p> 
							<label for="BoardEmail1"> <strong  class="starrequired"> * </strong> 이메일</label>
						
							<input type="text" id="BoardEmail1" name="BoardEmail1" title="필수 이메일 아이디 입력"  /> @
							<select  id="BoardEmail2" name="BoardEmail2"  title="필수 이메일 서비스 입력" >
								<option value=" ">select</option>
								<option value="naver.com">naver.com</option>
								<option value="google.com">google.com</option>
								<option value="nate.com">nate.com</option>
								<option value="daum.net">daum.net</option>
							</select>
			
						</p>
				
						<!-- 연락처 : usermobile1   usermobile2  usermobile3  -->
						<p> 
							<label for="usermobile1">연락처</label>
							<input id="usermobile1"    name="usermobile1"   type="text" title="휴대폰사 번호"/> - 
							<input id="usermobile2"    name="usermobile2"   type="text" title="휴대폰 번호 국번"/> - 
							<input id="usermobile3"    name="usermobile3"   type="text" title="휴대폰 번호 뒷 네자리"/> 
						</p>
					
						<!-- 주소 : post1   post2    address1   address2 -->
						<div id="post"> 
							<p>
								<label for="post1">  주소 </label>
								<strong class="postNum"> 우편번호</strong>
								<input id="post1"    name="post1"   type="text" title="우편번호1" /> - 
								<input id="post2"    name="post2"   type="text" title="우편번호2" /> 
								<input type="button"  value="우편번호찾기" id="findPost"  onclick="postcode()" /> 
							</p>
						
							<p  class="myaddress">
								<strong class="addDetail"> 상세주소</strong>
								<input id="address2"    name="address2"   type="text" title="상세주소1"/> - 
								<input id="address3"    name="address3"   type="text" title="상세주소2"/> 
							</p>
						</div>

						<p id="interestPart">
							<span  class="addinfo">  관심분야</span>
							<input id="homepage"    name="homepage"   type="checkbox" />
							<label for="homepage"  class="smalllabel"> 홈페이지</label>
							<input id="response"    name="response"   type="checkbox" />
							<label for="response"   class="smalllabel" id="responseLabel"> 반응형웹</label>
							<input id="mobileapp"    name="mobileapp"   type="checkbox" />
							<label for="mobileapp"  class="smalllabel"> 모바일앱</label>
							<input id="interactive"    name="interactive"   type="checkbox" />
							<label for="interactive"  class="smalllabel"> 인터렉티브웹</label>
						</p>
						 <!--  checkbox : 다중선택  -->
						<!-- 관심분야 :  homepage  response  mobileapp   interactive -->
						<p>
							<label for="job"> 직업</label>
							<select  id="job"   name="job">
								<option value="회사원" > 회사원 </option>
								<option value="전문직" > 전문직 </option>
								<option value="자영업" > 자영업 </option>
								<option value="주부" > 주부 </option>
							</select>
						</p>
						<!-- 직업 : job -->
						<p  class="snsinfo">
							<span>  SNS 수신여부 </span>
							<input id="yes"    name="sns"   value="yes"    type="radio" />
							<label for="yes"> 수신</label>
							<input id="no"      name="sns"   value="no"  type="radio" />
							<label for="no"> 수신거부</label>
						</p>
						<!-- sns수신여부  : yes   no -->
						<p  class="joinResult">
							<input type="submit"  value="회원가입" id="answer"/>
							<input type="reset"     value="취소"  id="cancel"/>
						</p>
					</fieldset>
				</form>
			

		</section>
	
		
	 </div><!--content END-->

<!--  ############## footer.php    넣기-->
<?php	include "common/footer.php";  ?>


 </div>  <!--wrapper END-->
 </body>
</html>

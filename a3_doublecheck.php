<?php
	header("Content-type:text/html; charset=utf-8");
	// echo "OK";

	// 1. 사용자가 입력한데이터 받아오기
	// 2. mysql연결 / db선택 / utf8
	// 3. 1.에서 넘겨준 아이디가 db에 존재하는지 확인
	// 4. 사용가능 / 사용불가능 출력 
	

	header("Content-type:text/html; charset=utf-8");
	


	$conn = mysql_connect('localhost','jistudio','wi532022');
	mysql_select_db('jistudio' , $conn);       	
	mysql_query('set names utf8');

	$userid = $_REQUEST['userid'] ;  	// 1. 사용자가 입력한데이터 받아오기


	// 1.에서 넘겨준 아이디가 db에 존재하는지 확인
	$result = mysql_query("SELECT * FROM members  WHERE userid='$userid'")  or die(mysql_error());
	$row = mysql_fetch_array( $result);

	// 4. 사용가능 / 사용불가능 출력 
	if( $userid != $row['userid']){
		$result="<span style=\"color:red\"> 사용가능한 아이디 입니다. </span>";
	}else{
		$result="<span  style=\"color:red\"> 중복-사용불가능한 아이디 입니다. </span>";
	}
	echo $result;
?>


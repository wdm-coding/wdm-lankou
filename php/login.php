<?php
	header("Content-type:text/html;charset=utf-8");
	$tel=$_REQUEST["tel"];
	$pwd=$_REQUEST["pwd"];
	$conn=mysql_connect("localhost","root","root");
	mysql_select_db("lankou");
	$result=mysql_query("select * from user where userTel='$tel' and userPwd='$pwd'",$conn);
	$rows=mysql_num_rows($result);
	if($rows==1){
		echo 1;
	}else{
		echo 0;
	}
	
	mysql_close($conn);
?>
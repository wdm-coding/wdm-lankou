<?php
	header("Content-type:text/html;charset=utf-8");
	$rtel=$_REQUEST["rtel"];
	$rpwd=$_REQUEST["rpwd"];
	$id=$_REQUEST["rcoad"];
	$conn=mysql_connect("localhost","root","root");
	mysql_select_db("lankou");
	$result=mysql_query("select * from user where userTel='$rtel'",$conn);
	$rows=mysql_num_rows($result);
	if($rows==1){
		echo "用户名已存在";
	}else{
		mysql_query("insert into user values('$id','$rtel','$rpwd')",$conn);
		$result1=mysql_query("select * from user where userTel='$rtel'",$conn);
		$rows1=mysql_num_rows($result1);
		if($rows1==1){
			echo 1;
		}else{
			echo 0;
		}
		
	}
	
	mysql_close($conn);
	
?>
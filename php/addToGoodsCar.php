<?php
	header("Content-type:text/html;charset=utf-8");
	$ouid=$_REQUEST["userId"];
	$ogid=$_REQUEST["goodId"];
	$ogname=$_REQUEST["goodName"];
	$ogprice=$_REQUEST["goodPrice"];
	$ogsrc=$_REQUEST["goodSrc"];
	$ogml=$_REQUEST["goodMl"];
	$ognum=$_REQUEST["goodNum"];
	$conn=mysql_connect("localhost","root","root");
	mysql_select_db("lankou");
	$result=mysql_query("select * from orders where userId='$ouid'",$conn);
	$rows=mysql_num_rows($result);
	if($rows==1){
		mysql_query("delete from orders where userId='$ouid'",$conn);
		mysql_query("insert into orders values('$ouid',$ogid,'$ogname',$ogprice,'$ogsrc','$ogml',$ognum)",$conn);
		$result1=mysql_query("select * from orders where userId='$ouid'",$conn);
		$rows1=mysql_num_rows($result1);
		if($rows1==1){
			echo 1;
		}else{
			echo 0;
		}
	}else{
		mysql_query("insert into orders values('$ouid',$ogid,'$ogname',$ogprice,'$ogsrc','$ogml',$ognum)",$conn);
		$result1=mysql_query("select * from orders where userId='$ouid'",$conn);
		$rows1=mysql_num_rows($result1);
		if($rows1==1){
			echo 1;
		}else{
			echo 0;
		}
		
	}
	
	mysql_close($conn);
	
?>
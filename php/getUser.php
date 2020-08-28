<?php
	header("Content-type:text/html;charset=utf-8");
	$tel=$_REQUEST["tel"];
	$conn=mysql_connect("localhost","root","root");
	mysql_select_db("lankou");
	$result=mysql_query("select * from user where userTel='$tel'",$conn);
	$rows=mysql_num_rows($result);
	if($rows==1){
			//$arr=array();
			while($row=mysql_fetch_assoc($result)){
				echo $row["userId"];
			}
		}else{
			echo "不存在";
		}
	mysql_close($conn);
?>
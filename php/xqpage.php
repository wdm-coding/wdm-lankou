<?php
	header("Content-type:text/html;charset=utf-8");
	$myId=$_REQUEST["myId"];
	$conn=mysql_connect("localhost","root","root");
	mysql_select_db("lankou");
	$result=mysql_query("select * from goods where goodId=$myId",$conn);
	$rows=mysql_num_rows($result);
	if($rows==1){
			$arr=array();
			while($row=mysql_fetch_assoc($result)){
				$arr[]=$row;
			}
			echo json_encode($arr);
		}else{
			echo "不存在";
		}
	mysql_close($conn);
?>
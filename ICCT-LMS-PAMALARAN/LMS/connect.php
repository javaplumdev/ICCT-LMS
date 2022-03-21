<?php 
	
	$servername = "localhost";
	$username = "root";
	$password = "";
	$database = "mydatabase";

	$connect = mysqli_connect($servername, $username, $password, $database);

	if(!$connect){
		die("<script>alert('Connection Failed.')</script>");
	}
 ?>
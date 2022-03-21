<?php 
	
	include 'connect.php';

	error_reporting(0);

	session_start();

	if (isset($_SESSION['Username'])){
		header("Location: ");
	}

	if(isset($_POST['submit'])){
		$id = $_POST['id'];
		$Firstname = $_POST['fname'];
		$Lastname = $_POST['lname'];
		$Email = $_POST['email'];
		$Birthdate = date('Y-m-d', strtotime($_POST['bday']));
		$Username = $_POST['username'];
		$Password = $_POST['password'];
		$cpassword = $_POST['cpassword'];
		$image = $_FILES['image']['name'];
		$image_text = mysqli_real_escape_string($db, $_POST['image_text']);
		$target = "images/".basename($image);

	if($Password == $cpassword){
			$sql = "SELECT * FROM userinfo WHERE Email='$Email' OR Username='$Username'";
			$result = mysqli_query($connect, $sql);

		if (!$result -> num_rows > 0) {
			$Password = ($Password);
				$sql = "INSERT INTO userinfo (Firstname, Lastname, Email, Birthdate, Username, Password, image)
					VALUES ('$Firstname', '$Lastname', '$Email', '$Birthdate', '$Username', '$Password', '$image')";			
				$result = mysqli_query($connect, $sql);
				if (move_uploaded_file($_FILES['image']['tmp_name'], $target)) {
  		$msg = "Image uploaded successfully";
  	}else{
  		$msg = "Failed to upload image";
  	}
				
			
			if($result){
				echo"<script>alert('User Registration Completed.')</script>";
				$Firstname = "";
				$Lastname = "";
				$Email ="";
				$Password = "";
				$Birthdate = "";
				$Username = "";
				$Password = "";
				$cpassword = "";
				$image = "";

			}else{
				echo"<script>alert('Something Went Wrong.')</script>";
			}

		}else{
			echo"<script>alert('Email or Username Already Exists.')</script>";
		}


	}else{
			echo"<script>alert('Password not Matched.')</script>";
		}
}
$result = mysqli_query($db, "SELECT * FROM images");
	
 ?>


<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap"
			rel="stylesheet"
		/>
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
			crossorigin="anonymous"
		/>
		<link rel="stylesheet" href="./src/style.css" />
		<title>Registration form</title>
		
		
	</head>
	<body>
		<div class="registaration-form">
		<?php
    while ($row = mysqli_fetch_array($result)) {
      echo "<div id='img_div'>";
      	echo "<img src='images/".$row['image']."' >";
      	echo "<p>".$row['image_text']."</p>";
      echo "</div>";
    }
  ?>
			<div class="form container p-4 w-100">
			<br><br>
				<form class="shadow-lg p-5 mb-5 bg-white rounded"  method="POST" action="" enctype="multipart/form-data">
				<center><h3>Sign Up</h3>
				<h3>ICCT Learning Management System</h3></center>
					<div class="bg-form">
						<input type="hidden" name="id">
					<div class="input-fname">
						<input class="form-control" type="text" placeholder="First Name" name="fname" value="<?php echo $Firstname;?>" required>
					</div>
					<br>
					<div class="input-lname">
						<input class="form-control" type="text" placeholder="Last Name" name="lname" value="<?php echo $Lastname;?>" required>
					</div>
					<br>
					<div class="input-user">
						<input class="form-control" type="email" placeholder="Email" name="email" value="<?php echo $Email;?>" required>
					</div>
					<br>
					<div class="input-user">
					<label>Birthdate</label>
				
						<input class="form-control" type="date" name="bday"value="<?php echo $Birthdate;?>" required>
					</div>
					<br>
					<div class="input-user">
						<input class="form-control" type="text" placeholder="Username" name="username" value="<?php echo $Username;?>" required>
					</div>
					<br>
					<div class="input-pass">
						<input class="form-control" type="password" placeholder="Password" name="password" value="<?php echo $Password;?>" required>
					</div>
					<br>
					<div class="input-cpass">
						<input class="form-control" type="password" placeholder="Confirm Password" name="cpassword" value="<?php echo $cpassword;?>"required>
					</div>
					<br>
					<input type="hidden" name="size" value="1000000">
					<div>
					<label>Choose Your Profile Picture</label>
  	  <input type="file" name="image">
  	</div>
					
					<div>
					<br>
					<button type="button" align="center" class="btn btn-info" style="width:100%;"><a href="login.php" style="text-decoration: none;color:white;width:200%;">Log In</a></button>
					</div>
					<br>
					<div>
					<input type="submit" name="submit" value="Sign Up" class="btn btn-success" style="width:100%;">
					</div>
				</form>
			</div>
		</div>

		<script src="registration.js"></script>
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
			crossorigin="anonymous"
		></script>
	</body>
</html>

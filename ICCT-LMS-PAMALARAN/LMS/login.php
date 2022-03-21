<?php 
	
	include 'connect.php';

	session_start();
	error_reporting(0);

	if(isset($_SESSION['Username'])) {
		header("Location: ");
	}


	if(isset($_POST['submit'])){

		$Username = $_POST['Username'];
		$Password = $_POST['Password'];

		$sql = "SELECT * FROM userinfo WHERE Username='$Username' AND Password='$Password'";
		$result = mysqli_query($connect, $sql);

		if ($result-> num_rows > 0) {
			$row = mysqli_fetch_assoc($result);
			$_SESSION['Username'] = $row['Username'];
			$_SESSION['Firstname'] = $row['Firstname'];
			header("location: home.php");
			
		}else{
			echo"<script>alert('Username or Password is Wrong.')</script>";
		}
	}
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
		<title>Login form</title>
	</head>
	<body>
		<div class="log-in-form">
			<div class="form w-100 p-3">
				<h3 class="text-light text-center">ICCT Learning Management System</h3>
				<form class="container shadow-lg p-3 mb-5 bg-white rounded p-4" method="POST" action="">
					<center><h3>Log in</h3></center>
					<p>Enter your credentials to access your account</p>
					<div class="form-group">
						<div class="input-user">
						<input class="form-control" type="text" placeholder="Username" name="Username" value="<?php echo $Username;?>" required>
					</div>
					<br>
					<div class="input-user">
						<input class="form-control" type="password" placeholder="Password" name="Password" value="<?php echo $Password;?>" required>
					</div>
					<br>
					<div>
					<input type="submit" name="submit" value="Log ln" onclick="Login()" class="btn btn-success" style="width: 100%">
					</div>
					<br>
					<div>
					<button type="button" align="center" class="btn btn-info" style="width: 100%"> <a href="Register.php" style="text-decoration: none;"> Sign Up </a> </button>
				    </div>
					<div class="form-check mt-4">
						<input
							type="checkbox"
							class="form-check-input"
							id="checkbox-checked"
						/>
						<label class="form-check-label" for="exampleCheck1"
							>Remember password</label>
					</div>
						</div>
				</form>
			</div>
		</div>

		<script src="loginForm.js"></script>
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
			crossorigin="anonymous"
		></script>
	</body>
</html>

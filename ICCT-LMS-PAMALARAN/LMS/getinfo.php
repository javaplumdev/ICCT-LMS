<?php
	
	include('connect.php');

  $res = "SELECT * FROM userinfo";
  $result = $connect->query($res);

	if ($result->num_rows > 0) {
 		 // output data of each row

  		while($row = $result->fetch_assoc()) {


    		echo "<tr>" . 
    				"<td>".ucwords($row["id"])."</td>".
    				"<td>".ucwords($row["Firstname"])."</td>".
    				"<td>".ucwords($row["Lastname"])."</td>".
            "<td>".ucwords($row["Email"])."</td>".
    				"<td>".strtoupper($row["Birthdate"])."</td>".
    			"</tr>";
  		}

	} else {
  		echo "0 results";
	}  
?>

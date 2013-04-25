<?php
session_start();
if((isset($_SESSION['SIASstate'])) and ($_SESSION['SIASstate']==1)){
	require($_SESSION['SIASapproot'].'/cfg/db.php');
	
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
	
	$input = file_get_contents('php://input');
	$json = json_decode($input);
	
	if (is_array($json->data)) {
		foreach ($json->data as $data){
			$sql = "DELETE FROM tblstock WHERE id='".$data->id."'";
			$mysqli->query($sql);
		}
	} else {
		$sql = "DELETE FROM tblstock WHERE id='".$json->data->id."'";
		$mysqli->query($sql);
	}
	echo "{success: true}";
	
	echo $mysqli->error;
	$mysqli->close();
}
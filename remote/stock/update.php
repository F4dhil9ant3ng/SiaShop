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
			$sql = "UPDATE tblstock 
				SET 
					hrgBeli=".$data->hrgBeli.",
					hrgJual=".$data->hrgJual.",
					hrgJualEcer=".$data->hrgJualEcer."
				WHERE
					id=".$data->id."
			";
			$mysqli->query($sql);
		}
	} else {
		$sql = "UPDATE tblstock 
			SET 
				hrgBeli=".$json->data->hrgBeli.",
				hrgJual=".$json->data->hrgJual.",
				hrgJualEcer=".$json->data->hrgJualEcer."
			WHERE
				id=".$json->data->id."
		";
		$mysqli->query($sql);
	}
	echo "{success: true}";
	$mysqli->error;
	$mysqli->close();
}
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
			$sql = "INSERT INTO tblstock (
					nmBrg,
					hrgBeli,
					hrgJual,
					hrgJualEcer
				) VALUES (
					'".$data->nmBrg."',
					".$data->hrgBeli.",
					".$data->hrgJual.",
					".$data->hrgJualEcer."
				)
			";
			$mysqli->query($sql);
		}
	} else {
		$sql = "INSERT INTO tblstock (
				nmBrg,
				hrgBeli,
				hrgJual,
				hrgJualEcer
			) VALUES (
				'".$json->data->nmBrg."',
				".$json->data->hrgBeli.",
				".$json->data->hrgJual.",
				".$json->data->hrgJualEcer."
			)
		";
		$mysqli->query($sql);
	}
	
	echo "{success: true}";
	
	echo $mysqli->error;
	$mysqli->close();
}
<?php
session_start();
if((isset($_SESSION['SIASstate'])) and ($_SESSION['SIASstate']==1)){
	require($_SESSION['SIASapproot'].'/cfg/db.php');

	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
	
	if(isset($_POST['query'])){$query=$_POST['query'];}else{$query='';} 
	
	if(strlen($query)<3){
		echo "Masukkan nama barang minimal 3 karakter untuk mengecek apakah barang sudah ada atau belum";
		exit();
	}
	
	$sql = "SELECT 
			nmBrg
		FROM 
			tblstock
		WHERE
			nmBrg LIKE '%$query%'
		ORDER BY nmBrg ASC";
	
	if (!$rs = $mysqli->query($sql)) {
		echo "Error executing query";
	}else{
		$totalCount = $rs->num_rows;
		if($totalCount==0){
			echo "Tidak ada barang yang mirip";
		}else{
			$rs = $mysqli->query($sql);
			while($obj = $rs->fetch_object()){
				echo "- ".$obj->nmBrg."<br>";
			}
		}
	}
	
	$mysqli->close();
}
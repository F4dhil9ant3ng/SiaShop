<?php
session_start();
if((isset($_SESSION['SIASstate'])) and ($_SESSION['SIASstate']==1)){
	require($_SESSION['SIASapproot'].'/cfg/db.php');

	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
	
	if(isset($_GET['fValue'])){$fValue=$_GET['fValue'];}else{$fValue='';} 
	if(isset($_GET['query'])){$nmBrg=$_GET['query'];}else{$nmBrg=$fValue;} 
	if(isset($_GET['sort'])){$sort=$_GET['sort'];}else{$sort='id';} 
	if(isset($_GET['dir'])){$dir=$_GET['dir'];}else{$dir='ASC';} 
	
	$sql = "SELECT 
			id,
			nmBrg,
			jmlhBrg,
			hrgBeli,
			hrgJual,
			hrgJualEcer
		FROM 
			tblstock
		WHERE
			nmBrg LIKE '%$nmBrg%'
		ORDER BY $sort $dir";
	
	if (!$rs = $mysqli->query($sql)) {
		echo "{success:false}";
	}else{
		$totalCount = $rs->num_rows;
		if($totalCount==0){
			echo "{success:true, result:null}";
		}else{
			while($obj = $rs->fetch_object()){
				$arr[] = $obj;
			}
			echo "{success:true, totalCount:$totalCount, data:".json_encode($arr)."}";
		}
	}
	
	$mysqli->close();
}
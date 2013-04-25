<?php
// homepath is where index.php located after server path
// for example your index.php located in serverpath/extjs/skripsi/ then you should set $homepath='/extjs/skripsi'
$homepath='/SiaShop';
$localpath=getenv("SCRIPT_NAME");
$absolutepath=realpath(basename($localpath));
$absolutepath=str_replace("\\","/",$absolutepath);
//$_SESSION['SIASapproot']=substr($absolutepath,0,strpos($absolutepath,$localpath)).$homepath; // this is site root, I put it in $_SESSION for reference purpose
$_SESSION['SIASapproot']='http://localhost:8080/SiaShop';
require($_SESSION['SIASapproot'].'/cfg/db.php');

$_SESSION['SIASstate']=1;

$_SESSION['SIASdev1Name']='Eko Fahrudi Silviawan';
$_SESSION['SIASdev1Alamat']='Banyuwangi';
$_SESSION['SIASdev1Email']='nicklaros@gmail.com';
$_SESSION['SIASdev1Website']='http://www.facebook.com/nick.laros';

$appVersion='beta 0.01b';
$appYearCreated='2012';
?>
<script type="text/javascript">
var datetime = new Date();
var tahun = String(datetime.getFullYear());
var bulan = String(datetime.getMonth()+1);
if(bulan.length==1) bulan = '0'+bulan;
var tanggal = String(datetime.getDate());
if(tanggal.length==1) tanggal = '0'+tanggal;
var today = tahun+'-'+bulan+'-'+tanggal;
var cRight = 'Copyright &copy; <?php echo $appYearCreated;?> by <?php echo $_SESSION['SIASdev1Name'];?>';
var warningReplaceSame = '<div style="color:red;font-size:11px;font-weight:bold;border:1px solid red;margin:10px 0px;padding:5px;">note: data pada tabel akan direplace dengan data yang ada dalam file import jika memiliki key sama</div>';
var warningReplaceAll = '<div style="color:red;font-size:11px;font-weight:bold;border:1px solid red;margin:10px 0px;padding:5px;">note: semua data pada tabel akan direplace dengan data yang ada dalam file import</div>';
var warningDefaultPass = '<div style="color:red;font-size:11px;font-weight:bold;border:1px solid red;margin:10px 0px;padding:5px;">note: Password default sama dengan Username</div>';
var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
</script>

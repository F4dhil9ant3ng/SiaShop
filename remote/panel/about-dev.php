<?php session_start(); ?>
<div class="stBodyPanelContainer" style="clear:both;background:#FFF;margin:0px;width:450px;">
<div style="clear:both;font-family:arial;color:#333;font-size:12px;font-weight:bold;height:125px;padding:9px;margin-bottom:15px;">
<span style="font-size:14px;"><?php echo $_SESSION['dev1Name']; ?></span><br>
<div style="float:left;width:75px;height:100px;margin-top:5px;margin-left:7px;border:1px solid #82A9DF;"><img src="resources/images/dev1.jpg" width="73" height="98" alt=""></div>
<div style="float:left;width:75px;margin-top:5px;margin-left:7px;">  Alamat<br>
  Email<br>Website</div>
<div style="float:left;width:10px;margin-top:5px;">:<br>:<br>:</div>
<div style="float:left;width:250px;margin-top:5px;"><?php echo $_SESSION['dev1Alamat']; ?><br><?php echo $_SESSION['dev1Email']; ?><br><a target="_new" href="<?php echo $_SESSION['dev1Website'];?>"><?php echo $_SESSION['dev1Website']; ?></a></div>
</div>
</div>

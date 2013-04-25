<?php session_start();?>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Sistem Informasi Akuntansi Shop</title>
    <link rel="stylesheet" type="text/css" href="http://cdn.sencha.com/ext-4.1.0-gpl/resources/css/ext-all.css">
	<link rel="stylesheet" href="resources/css/app.css">
    <link rel="stylesheet" href="resources/icons/silk.css">
    <script type="text/javascript" src="http://cdn.sencha.com/ext-4.1.0-gpl/ext-all-debug.js"></script>
</head>
<body>
<?php include('cfg/var.php');?>
<div id="appHeader">
<div id="stAppLogo">Sistem Informasi Akuntansi Shop</div>
<div id="appLoading"><img src="resources/images/loader.gif" width="25" /></div>
<script type="text/javascript">
    Ext.Loader.setConfig({
        enabled: true
    });
    if(Ext.isIE) Ext.DomHelper.overwrite('warning','<div id="warning">' +'Warning: Internet Explorer mempunyai beberapa masalah dengan aplikasi ini. Disarankan memakai Firefox atau Chrome.</div>');</script>
</div>
<div id="appBody"></div>
<script type="text/javascript" src="app.js"></script>
</body>
</html>
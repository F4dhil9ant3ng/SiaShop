<?php 
session_start(); 

	require($_SESSION['SIASapproot'].'/cfg/db.php');?>
	
    <div class="stBodyPanelContainer" style="border-top:0px;border-right:0px;border-left:0px;clear:both;padding-bottom:20px;margin:0px;width:198px;">
    <div class="stBodyPanelBody">
    <a href="#" onClick="Ext.ComponentQuery.query('startPage')[0].setActiveTab(0);">Start Page</a> 
    </div>
    </div>
    
    <div class="stBodyPanelContainer" style="border-top:0px;border-right:0px;border-left:0px;clear:both;padding-bottom:20px;margin:0px;width:198px;">
    <div class="stBodyPanelHeader">Stock</div>
    <div class="stBodyPanelBody"> 
    <a href="#" onClick="SIAS.newTab('listStock');">Stock</a> 
    </div>
    </div>
    
    <div class="stBodyPanelContainer" style="border-top:0px;border-right:0px;border-left:0px;clear:both;padding-bottom:20px;margin:0px;width:198px;">
    <div class="stBodyPanelHeader">Support</div>
    <div class="stBodyPanelBody"> 
    <a href="#" onClick="SIAS.newTab('help');">Aku Butuh Bantuan</a> 
    <a href="#" onClick="SIAS.showLoader();Ext.widget('about');">About Developer</a> 
    </div>
    </div>

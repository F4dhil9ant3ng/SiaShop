Ext.define('SIAS.view.panel.MainNavigation' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.mainNav',
	
	title: 'Al-Rohman<br><br>Banyuwangi.',
	autoScroll: true,
	bodyStyle: 'background-color:#DFE8F6',
	width: 200,
	margins: '5 0 5 5',
	
    initComponent: function() {
		this.autoLoad= ({ url:'remote/panel/main-navigation.php', loadMask: true, scripts: true });
		
        this.callParent(arguments);
    }
});
Ext.define('SIAS.view.panel.Help' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.help',
	
	id: 'helpPanel',
	title: 'Help',
	layout: 'fit',
	closable: true,
	autoScroll: true,

    initComponent: function() {
		this.autoLoad= ({ url:'remote/test.php', text:'Loading Help...'});
		
        this.callParent(arguments);
    }
});
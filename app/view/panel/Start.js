Ext.define('SIAS.view.panel.Start' ,{
    extend: 'Ext.tab.Panel',
    alias : 'widget.startPage',
	
	margins: '5 0 5 5',
	activeTab: 0,
	minTabWidth:125,
	maxTabWidth:200,
	
    initComponent: function() {
		this.items= [{
			title:'Start Page',
			autoScroll: true,
			autoLoad: ({ url:'remote/panel/start.php', text: 'Loading Start Page...' })
		}];
		
        this.callParent(arguments);
    }
});
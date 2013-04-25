Ext.define('SIAS.view.panel.About' ,{
    extend: 'Ext.window.Window',
    alias : 'widget.about',
	
	id: 'about',
	title: 'About Developer',
	layout: 'fit',
    autoShow: true,
	width: 460,
	height: 185,
	constrainHeader: true,
	closable: true,
	resizable: false,
	plain: true,
	border: false,
	autoScroll: true,
	modal:true,

    initComponent: function() {
		this.autoLoad= ({ url:'remote/panel/about-dev.php', text:'Loading data...'});
		
        this.callParent(arguments);
    }
});
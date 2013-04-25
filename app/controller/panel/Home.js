Ext.define('SIAS.controller.panel.Home', {
    extend: 'Ext.app.Controller',
	
	views: [
		'panel.MainNavigation',
		'panel.Start',
		'panel.Help',
		'panel.About'
    ],
	
    init: function() {
        this.control({'help': {boxready: SIAS.hideLoader}});
        this.control({'about': {boxready: SIAS.hideLoader}});
    }
});
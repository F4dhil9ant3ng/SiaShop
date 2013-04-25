
var SIAS = Ext.create('Ext.app.Application', {
    name: 'SIAS',

    appFolder: 'app',
	
	controllers: [
		'panel.Home',
		'Stock'
	],

    launch: function() {
		Ext.require([
			'Ext.window.MessageBox',
			'Ext.ux.form.ComboGrid',
			'Ext.grid.RowEditor'
		]);
		
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			renderTo: Ext.get('appBody'),
			items: [{
				region: 'north',
				xtype: 'box',
				height: 30,
				applyTo: 'appHeader'
			},{
				region: 'west',
				xtype: 'mainNav'
			},{
				region: 'center',
				xtype: 'startPage'
			},{
				region: 'south',
				xtype: 'panel',
				height: 25,
				margins: '0 5 0 5',
				bodyStyle: 'padding:5px;font-family:arial;font-size:11px;font-weight:bold;background-color:#DFE8F6',
				html: cRight
			}]
		});
		SIAS.hideLoader();
		
		Ext.require('Ext.grid.feature.Summary', function() {
			Ext.override(Ext.grid.feature.Summary, {
				refresh: function() {
					if(this.view.rendered) {
						var tpl = Ext.create(
							'Ext.XTemplate',
							'{[this.printSummaryRow()]}',
							this.getFragmentTpl()
						);
						tpl.overwrite(this.getRowEl(), {});
					}
				},
		
				getRowEl: function() {
					return this.view.el.down('tr.x-grid-row-summary');
				}
			});
		});
    },
	
	showLoader: function(){
		Ext.DomHelper.overwrite('appLoading','<img src="resources/images/loader.gif" width="25" />');
	},
	
	hideLoader: function(){
		Ext.DomHelper.overwrite('appLoading','');
	},
	
	viewportReady: function(){
		SIAS.hideLoader();
	},
	
	newTab: function(alias){
		var tabPanel = Ext.ComponentQuery.query('startPage')[0],
			newPanel = Ext.ComponentQuery.query(alias)[0];
		if(!newPanel){
			SIAS.showLoader();
			tabPanel.add({xtype:alias}).show();
		}else{
			tabPanel.setActiveTab(newPanel);
		}
	}
});

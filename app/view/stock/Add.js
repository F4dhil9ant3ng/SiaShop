Ext.define('SIAS.view.stock.Add' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.addStock',
	
	title: 'Tambah Barang',
	closable: true,
	layout: 'absolute',
	autoScroll: true,
	
	initComponent: function(){
		this.items = [
			{
				xtype: 'form',
				monitorValid: true,
				border: false,
				buttonAlign: 'left',
				bodyPadding: 5,
				minWidth: 450,
				items: [{
					xtype: 'textfield',
					fieldLabel: 'Nama Barang',
					name: 'nmBrg',
					afterLabelTextTpl: required,
					allowBlank: false,
					maskRe: /[A-Z a-z 0-9]/,
					maxLength: '30',
					selectOnFocus: true,
					width:400
				},{
					xtype: 'numberfield',
					fieldLabel: 'Harga Beli',
					name: 'hrgBeli',
					afterLabelTextTpl: required,
					allowBlank: false,
					selectOnFocus: true,
					hideTrigger: true,
					fieldStyle: 'font-weight:bold;text-align:right;',
				  	value: 0,
					width:300
				},{
					xtype: 'numberfield',
					fieldLabel: 'Harga Jual Kulak',
					name: 'hrgJual',
					afterLabelTextTpl: required,
					allowBlank: false,
					selectOnFocus: true,
					hideTrigger: true,
					fieldStyle: 'font-weight:bold;text-align:right;',
					value: 0,
					width:300
				},{
					xtype: 'numberfield',
					fieldLabel: 'Harga Jual Ecer',
					name: 'hrgJualEcer',
					afterLabelTextTpl: required,
					allowBlank: false,
					selectOnFocus: true,
					hideTrigger: true,
					fieldStyle: 'font-weight:bold;text-align:right;',
					value: 0,
					width:300
				}],
				tbar:[
					{text:'Simpan',	action:'save',		formBind: true},
					{text:'Batal',	action:'cancel'}
				]
			}
		];
		
		this.callParent(arguments);
	}
});
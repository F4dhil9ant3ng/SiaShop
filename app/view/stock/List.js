Ext.define('SIAS.view.stock.List' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.listStock',
	
	title:'Stock',
	closable:true,
	layout:'fit',
	
	initComponent: function() {
		this.items = [
			{
				xtype:'grid',
				itemId:'gridStock',
				store:'Stock',
				stripeRows:true,
				border:false,
				loadMask:true,
				autoScroll:true,
				//multiSelect: true,
				tbar: [{
					xtype:'button',
					text:'Tambah Barang',
					action:'addStock',
					iconCls:'silk-add'
				},{
					xtype:'button',
					text:'Hapus Barang',
					action:'delStock',
					iconCls:'silk-reject'
				},'-','Cari Barang',{
					xtype: 'textfield',
					field: 'query',
					width:150
				},
					{xtype: 'button',	text: 'Cari',	action: 'search',		iconCls: 'silk-search'},
					{xtype: 'button',	text: 'Reset',	action: 'reset',		iconCls: 'silk-cross'}
				],
				plugins: [
					Ext.create('Ext.grid.plugin.RowEditing')
				],
				columns: [
					Ext.create('Ext.grid.RowNumberer'),
					{header:'id', dataIndex:'id', hidden:true},
					{header:'Nama Barang', dataIndex:'nmBrg', sortable:true, width:300},
					{header:'Harga Beli', dataIndex:'hrgBeli', sortable:true, align:'right', width:100,
						editor: {
							xtype: 'numberfield',
							field: 'hrgBeliEdit',
							selectOnFocus: true,
							hideTrigger: true,
							minValue: 0
						}
					},
					{header:'Harga Kulak', dataIndex:'hrgJual', sortable:true, align:'right', width:100,
						editor: {
							xtype: 'numberfield',
							field: 'hrgJualEdit',
							selectOnFocus: true,
							hideTrigger: true,
							minValue: 0
						}
					},
					{header:'Harga Ecer', dataIndex:'hrgJualEcer', sortable:true, align:'right', width:100,
						editor: {
							xtype: 'numberfield',
							field: 'hrgJualEcerEdit',
							selectOnFocus: true,
							hideTrigger: true,
							minValue: 0
						}
					}
				],
				dockedItems: [{
					xtype: 'pagingtoolbar',
					store: 'Stock',
					dock: 'bottom',
					displayInfo: true
				}]
			}
		];
		
		this.callParent(arguments);
	}
});
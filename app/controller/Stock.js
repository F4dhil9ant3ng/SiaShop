Ext.define('SIAS.controller.Stock', {
    extend: 'Ext.app.Controller',
	
	stores: ['Stock','AutoStock'],
    models: ['Stock'],
	views: ['stock.List','stock.Add'],
	
    init: function() {
		this.getStockStore().addListener('load', this.storeStockLoad);
        this.control({'listStock': {boxready: this.listStockReady}});
		this.control({'listStock button[action=addStock]': {click: this.addStock}});
		this.control({'listStock button[action=delStock]': {click: this.delStock}});
		this.control({'listStock textfield[field=query]': {specialkey: this.fieldQuerySpecialKey}});
		this.control({'listStock button[action=search]': {click: this.searchStock}});
		this.control({'listStock button[action=reset]': {click: this.resetStock}});
		this.control({'listStock grid[itemId=gridStock]': {edit: this.gridStockEdit}});
        this.control({'addStock': {
			boxready: this.addStockReady,
			beforeclose: this.addStockBeforeClose
		}});
		this.control({'addStock textfield[name=nmBrg]': {
			blur: this.fieldNmBrgBlur,
			specialkey: this.fieldNmBrgSpecialKey
		}});
		this.control({'addStock numberfield[name=hrgBeli]': {specialkey: this.fieldHrgBeliSpecialKey}});
		this.control({'addStock numberfield[name=hrgJual]': {
			blur: this.fieldHrgJualBlur,
			specialkey: this.fieldHrgJualSpecialKey
		}});
		this.control({'addStock numberfield[name=hrgJualEcer]': {
			specialkey: this.fieldHrgJualEcerSpecialKey
		}});
		this.control({'addStock button[action=save]': {click: this.addStockSave}});
		this.control({'addStock button[action=cancel]': {click: this.addStockCancel}});
    },
	
	storeStockLoad: function(){
		//Ext.getStore('AutoStock').load();
	},
	
	listStockReady: function(){
		Ext.ComponentQuery.query('listStock textfield[field=query]')[0].focus();
		SIAS.hideLoader();
	},
	
	addStock: function(){
		SIAS.newTab('addStock');
	},
	
	delStock: function(b){
		var grid = b.up('grid'),
			sel = grid.getView().getSelectionModel().getSelection()[0],
			store = grid.getStore(),
			storeauto = this.getAutoStockStore();
			
		if (sel) {
			Ext.Msg.show({
				title: 'Hapus Barang', 
				buttons: Ext.MessageBox.YESNO,
				msg: 'Apakah Anda yakin akan menghapus data barang "'+sel.get('nmBrg')+'"?',
				fn: function(btn){
					if (btn == 'yes'){
						store.remove(sel);
						store.sync({
							success : function() {
								storeauto.load();
							}
						});
					}
				}
			});
		}
	},
	
	fieldQuerySpecialKey: function(f, e){
		if(e.getKey() == e.ENTER){
			this.searchStock();
		}
	},
	
	searchStock: function(){
		var fieldQuery = Ext.ComponentQuery.query('listStock textfield[field=query]')[0],
			store = this.getStockStore();
		store.getProxy().extraParams.query = fieldQuery.getValue();
		store.loadPage(1);
		fieldQuery.focus(true);
	},
	
	resetStock: function(){
		var fieldQuery = Ext.ComponentQuery.query('listStock textfield[field=query]')[0],
			store = this.getStockStore();
		store.getProxy().extraParams.query = '';
		store.loadPage(1);
		fieldQuery.setValue('');
		fieldQuery.focus();
	},
	
	gridStockEdit: function(editor, e){
		if(e.record.get('hrgJualEcer')<e.record.get('hrgJual')){
			e.record.set('hrgJualEcer', e.record.get('hrgJual'));
		}
		e.store.sync({
			success : function() {
				Ext.getStore('AutoStock').load();
			}
		});
	},
	
	addStockReady: function(p){
		SIAS.hideLoader();
		p.down('textfield[name=nmBrg]').focus();
	},
	
	addStockBeforeClose: function(p){
		tip = Ext.getCmp('tipAddStockNmBrg');
		if(tip) tip.destroy();
	},
	
	fieldNmBrgBlur: function(f){
		f.setValue(Ext.util.Format.uppercase(f.getValue()));
		tip = Ext.getCmp('tipAddStockNmBrg');
		if(!tip){
			Ext.create('Ext.tip.ToolTip', {
				id: 'tipAddStockNmBrg',
				target: f.getEl(),
				autoShow: true,
				autoHide: false,
				anchor: 'left',
				closable: true,
				autoScroll: true,
				width: 350,
				maxHeight: 350,
				title: 'Barang yang hampir sama:',
				loader: {
					url: 'remote/tip/addStock-NmBrg.php',
					autoLoad: true,
					params: {
						query: f.getValue()
					}
				}
			});
		}else{
			tip.getLoader().load({
				url:'remote/tip/addStock-NmBrg.php',
				params: {
					query: f.getValue()
				}
			});
		}
	},
	
	fieldNmBrgSpecialKey: function(f, e){
		if(e.getKey() == e.ENTER){
			f.up('form').down('numberfield[name=hrgBeli]').focus(true);
		}
	},
	
	
	fieldHrgBeliSpecialKey: function(f, e){
		if(e.getKey() == e.ENTER){
			f.up('form').down('numberfield[name=hrgJual]').focus(true);
		}
	},
	
	fieldHrgJualBlur: function(f){
		var fieldHrgJualEcer = f.up('form').down('numberfield[name=hrgJualEcer]');
		if(fieldHrgJualEcer.getValue()<f.getValue()){
			fieldHrgJualEcer.setValue(f.getValue());
		}
	},
	
	fieldHrgJualSpecialKey: function(f, e){
		if(e.getKey() == e.ENTER){
			f.up('form').down('numberfield[name=hrgJualEcer]').focus(true);
		}
	},
	
	fieldHrgJualEcerSpecialKey: function(f, e){
		if(e.getKey() == e.ENTER){
			var b = Ext.ComponentQuery.query('addStock')[0].down('button[action=save]');
			this.addStockSave(b);
		}
	},
	
	addStockSave: function(b){
        var panel = b.up('addStock'),
            form = panel.down('form'),
            values = form.getValues(),
            store = this.getStockStore(),
			storeauto = this.getAutoStockStore();
		
		record = Ext.create('SIAS.model.Stock');
		record.set(values);
		if(Ext.String.trim(record.get('nmBrg'))==''){
			fieldNmBrg = Ext.ComponentQuery.query('addStock')[0].down('textfield[name=nmBrg]');
			fieldNmBrg.setValue('');
			Ext.Msg.alert('Error', 'Masukkan nama barang dulu!', function(btn){if(btn){fieldNmBrg.focus()}});
		}else{
			tip = Ext.getCmp('tipAddStockNmBrg');
			if(tip) tip.destroy();
			SIAS.showLoader();
			store.add(record);
			store.sync({
				success : function() {
					storeauto.load();
					store.load();
					panel.close();
					SIAS.hideLoader();
				}
			});
		}
	},
	
	addStockCancel: function(b){
		var panel = b.up('addStock'),
			tip = Ext.getCmp('tipAddStockNmBrg');
			
		if(tip) tip.destroy();
		panel.close();
	}
});
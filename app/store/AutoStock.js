Ext.define('SIAS.store.AutoStock', {
    extend: 'Ext.data.Store',
    model: 'SIAS.model.Stock',
	autoLoad: true,
	remoteSort: true,

    proxy: {
        type: 'ajax',
		api: {
			read: 'remote/stock/auto-complete/read.php'
		},
        reader: {
			type: 'json',
			root: 'data',
			totalProperty: 'totalCount'
		},
		simpleSortMode:true
    },
	
	sorters: [{
		property: 'nmBrg',
		direction: 'ASC'
	}]
})
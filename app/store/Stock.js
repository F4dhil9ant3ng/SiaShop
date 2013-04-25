Ext.define('SIAS.store.Stock', {
    extend: 'Ext.data.Store',
    model: 'SIAS.model.Stock',
	pageSize: 20,
	remoteSort: true,
	autoLoad: true,

    proxy: {
        type: 'ajax',
		api: {
			create: 'remote/stock/create.php',
			read: 'remote/stock/read.php',
			update: 'remote/stock/update.php',
			destroy: 'remote/stock/destroy.php'
		},
		extraParams:{
			query: ''
		},
        reader: {
			type: 'json',
			root: 'data',
			totalProperty: 'totalCount'
		},
		writer: {
			type: 'json',
			root: 'data'
		},
		simpleSortMode:true
    },
	
	sorters: [{
		property: 'nmBrg',
		direction: 'ASC'
	}]
})
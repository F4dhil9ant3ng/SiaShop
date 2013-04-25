Ext.define('SIAS.model.Stock', {
    extend: 'Ext.data.Model',
    fields: [
		{name: 'id', type: 'string'},
		{name: 'nmBrg', type: 'string'},
		{name: 'jmlhBrg', type: 'int'},
		{name: 'hrgBeli', type: 'int'},
		{name: 'hrgJual', type: 'int'},
		{name: 'hrgJualEcer', type: 'int'}
	]
});
export default [
	{
		'type':'bundle',
		'id': 'Meal1',
		'title': 'Burger Supreme Meal',
		'summary': 'A supreme burger with fries and drink',
		'description': 'Lorem ipsum dolor sit amet.',
		'cost': 5,
		'options': [
			{
			'id': 'Meal1Main',
			'label':'Burger',
			'options':[
				{
					'id':'Meal1Main1',
					'item':'Burger1'
				}]
			}, {
			'id': 'Meal1Side',
			'label':'Side',
			'options':[
				{
					'id':'Meal1Side1',
					'item':'Fries1'
			 	},{
			 		'id':'Meal1Side2',
					'item':'Fries2'
			 	}]
			 }, {
			  'id': 'Meal1Drink',
			  'label':'Drink',
			  'options':[
			  	{
			  		'id':'Meal1Drink1',
			  		'item':'Drink1'
			  	}, {
			  		'id':'Meal1Drink2',
			  		'item':'Drink2'
			  	}]
			}]
	}, {
		'type':'bundle',
		'id': 'Meal2',
		'title': 'Chicken Burger Meal',
		'summary': 'A chicke burger with fries and drink',
		'description': 'Lorem ipsum dolor sit amet.',
		'cost': 5,
		'options': [
			{
			'id': 'Meal2Main',
			'label':'Burger',
			'options':[
				{
					'id':'Meal2Main1',
					'item':'Burger4'
				}]
			}, {
			'id': 'Meal2Side',
			'label':'Side',
			'options':[
				{
					'id':'Meal2Side1',
					'item':'Fries1'
			 	},{
			 		'id':'Meal2Side2',
					'item':'Fries2'
			 	}]
			 }, {
			  'id': 'Meal2Drink',
			  'label':'Drinks',
			  'options':[
			  	{
			  		'id':'Meal2Drink1',
			  		'item':'Drink1'
			  	}, {
			  		'id':'Meal2Drink2',
			  		'item':'Drink2'
			  	}]
			}]
	}
];
export default [
	{
		'type':'bundle',
		'id': 'Meal1',
		'title': 'Supreme Meal',
		'imageUrl': '/images/food-10.jpg',
		'summary': 'A supreme burger with fries and drink',
		'description': 'Lorem ipsum dolor sit amet.',
		'cost': 5,
		'options': [
			{
			'id': 'Meal1Main',
			'label':'Select Burger:',
			'options':[
				{
					'id':'Meal1Main1',
					'item':'Burger1'
				}]
			}, {
			'id': 'Meal1Side',
			'label':'Select Side:',
			'options':[
				{
					'id':'Meal1Side1',
					'item':'Side1'
			 	},{
			 		'id':'Meal1Side2',
					'item':'Side2'
			 	}]
			 }, {
			  'id': 'Meal1Drink',
			  'label':'Select Drink:',
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
		'title': 'Chicken Meal',
		'imageUrl': '/images/food-13.jpg',
		'summary': 'A chicke burger with fries and drink',
		'description': 'Lorem ipsum dolor sit amet.',
		'cost': 5,
		'options': [
			{
			'id': 'Meal2Main',
			'label':'Select Burger:',
			'options':[
				{
					'id':'Meal2Main1',
					'item':'Burger4'
				}]
			}, {
			'id': 'Meal2Side',
			'label':'Select Side:',
			'options':[
				{
					'id':'Meal2Side1',
					'item':'Side1'
			 	},{
			 		'id':'Meal2Side2',
					'item':'Side2'
			 	}]
			 }, {
			  'id': 'Meal2Drink',
			  'label':'Select Drinks:',
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
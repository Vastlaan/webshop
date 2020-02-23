import User from '../models/user.js';


export const Users = [
	new User(
		"ml.antczak@gmail.com",
		"12345678",
		"Michal",
		"Antczak",
		{
			street:"Oostervenne",
			number:"397",
			toe:'',
			postcode:'1444XN',
			city:'Purmerend'
		},
		'0682307051',
		'male'
	),
	new User(
		"grazyna@gmail.com",
		"12345678",
		"Grażyna",
		"Antczak",
		{
			street:"Daal",
			number:"12",
			toe:'',
			postcode:'1432LP',
			city:'Amersfort'
		},
		'0652444059',
		'female'
	)
]
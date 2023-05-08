let arr = [
	{ name: 'Вася', age: 18 },
	{ name: 'Шерзод', age: 18 },
	{ name: 'Амир ', age: 17 },
];

let resultOne = arr.findIndex(item => item.age === 17);
console.log(resultOne)
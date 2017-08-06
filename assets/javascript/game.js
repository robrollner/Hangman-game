// function () {
// 	"Use Strict";
// 	var availableLetters, modernRockBands, classicRockBands, theme, guesses;

// 	function setup() {
// 		availableLetters = "abcdefghijklmnopqrstuvwxyz";
// 		guesses = for (var i = 0; i < Things.length; i++) {
// 			Things[i]
// 		}

// 	}
// }


		var modernRockBands = ['Radiohead', 'Modest Mouse', 'Arctic Monkeys', 
			'Foo Fighters', 'Nirvana', 'Weezer', 'Death Cab for Cutie',
			'Phish', 'Fray', 'Pearl Jam', 'My Morning Jacket'];

		var classicRockBands = ['Beatles', 'Kinks', 'Monkees', 
			'Rolling Stones', 'Who', 'Bob Dylan', 'Wings', 
			'Pink Floyd', 'Led Zeppelin', 'Cream', 'David Bowie'];
		var theme = ['classicRockBands', 'modernRockBands'];

		console.log(modernRockBands);
		console.log(classicRockBands);
		console.log(theme);

		function chooseTheme () {
			return theme[Math.floor(Math.random() * theme.length)];
			console.log(theme);
		};
		

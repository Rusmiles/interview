// Base
/* 
function capitals(word) {
	var bigLetters = word.toUpperCase().split('');
	var smallLetters = word.split('');
	var res = [];
	for(var i = 0; i < word.length; i++) {
		if (smallLetters[i] === bigLetters[i]) { res.push(i); }
	}
	return res;
};

// Проверка (для себя)

capitals('CodEWaRs'); // [0, 3, 4, 6]
capitals('justForTest'); // [4, 7]

console.log(capitals('CodEWaRs'));
console.log(capitals('justForTest'));
*/

// Advanced
function capitals(word) {
	var res = [];
	word.split('').forEach(function(letter, index) {
		if (letter === letter.toUpperCase()) { res.push(index); }
	});
	return res;
};

// // ES6
// const capitals = (word) =>
// 	word.split('').reduce((result, letter, index) => {
// 		if (letter === letter.toUpperCase()) { result.push(index); }
// 		return result;
// 	}, []);
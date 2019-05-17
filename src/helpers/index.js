/**
	*@method getLetterMatchCount
	@ param {string} guesseWord - Guessed Word
	@ param {string} secretWprd = Secret word
	@ returns {number} - Number of letters matchet between guesse word
*/

export function getLetterMatchCount(guessedWord,secretWord){
	const secretLetterSet = new Set(secretWord.split(''))
	const guessedLetterSet = new Set(guessedWord.split(''))
	return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length; 
}
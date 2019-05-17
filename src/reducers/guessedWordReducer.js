import { actionTypes } from '../actions'

/**
	* @function guessedWordReducer
	* @param {array} state - Array of guessed words.
	* @params {object} action - action to be reduced.
	* @returns {array} - new guessedWrods state
*/
export default (state=[], action) => {

	switch(action.type){
		case actionTypes.GUESS_WORD:
			return [...state, action.payload]
		default:
			return state 
	}

}
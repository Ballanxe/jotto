import { correctGuess, actionTypes } from './';


describe('correctGuess', () => {
	test('returns an action with type `CORRECT_GUESS`', () => {
		const action = correctGuess();

		// Is not good idea to use toBe() with mutable objects 
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS }); 
	})
})
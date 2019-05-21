import moxios from 'moxios';

import { correctGuess, actionTypes } from './';
import { storeFactory } from '../../test/testUtils';
import { getSecretWord } from './';


describe('correctGuess', () => {
	test('returns an action with type `CORRECT_GUESS`', () => {
		const action = correctGuess();

		// Is not good idea to use toBe() with mutable objects 
		expect(action).toEqual({ type: actionTypes.CORRECT_GUESS }); 
	})
})


describe('getSecretWord action creator', () => {
	beforeEach(() => {
		// If axios instance you have to pass it has install argument
		moxios.install();
	})

	afterEach(() => {
		moxios.uninstall();
	})

	test('add response word to state', () => {
		const secretWord = 'party'
		const store = storeFactory();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status:200,
				response: secretWord
			});
		});

		return store.dispatch(getSecretWord())
			.then(() => {
				const newState = store.getState();
				expect(newState.secretWord).toBe(secretWord);
			})
	})
})
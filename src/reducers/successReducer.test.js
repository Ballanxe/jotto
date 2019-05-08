import { actionTypes } from '../actions';
import successReducer from './successReducer';


test('returns default initial state of `false` when no action is passed', () =>{

	// Make sure the test pass object to the action 
	const newState = successReducer(undefined, {});
	expect(newState).toBe(false);

})

test('return state of true upon upon receiven an action of type `CORRECT_GUESS`', () => {

	const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
	expect(newState).toBe(true)
})

// If no action and no state the reducer has to return false 
// The return must be updted with state 
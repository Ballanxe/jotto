import React from 'react';
import PropTypes from 'prop-types';

/**
* Functional react component for congratulatory message.
* @function
* @param {object} props - React props.
* @returns {JSX.Element} - Rendered component (or null if 'success' prop is )

**/
const Congrats = (props) => {

	if (props.success){
		return (
			<div data-test="compoent-congrats">
				<span data-test="congrats-message" className="alert alert-success">
					Congratulations! You guessed the word!
				</span>
			</div>
		)
	}else{
		return (
			<div data-test="component-congrats" />
		);
	}

};

Congrats.propTypes = {
	success: PropTypes.bool.isRequired,
};


export default Congrats; 
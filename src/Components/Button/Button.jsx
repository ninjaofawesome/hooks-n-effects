import React from 'react';
import PropTypes from 'prop-types';

import {
	StyledButton,
} from './Button.styles.js';

const Button = props => {
	return (
		<StyledButton
			textColor={props.textColor ? props.textColor : ''}
			buttonColor={props.buttonColor}
			onClick={props.onClick}
		>{props.text}</StyledButton>
	);
}

Button.propTypes ={
	onClick: PropTypes.func,
	text: PropTypes.string,
	textColor: PropTypes.string,
	buttonColor: PropTypes.string,
};

Button.defaultProps = {
	onClick: () => {},
	textColor: '#ffffff',
	buttonColor: '#141414',
	text: '',
};

export default Button;
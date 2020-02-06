import React from 'react';
import PropTypes from 'prop-types';

import {
	StyledButton,
} from './Button.styles.js';

const Button = props => {
	return (
		<StyledButton
			textColor={props.textColor ? props.textColor : ''}
			buttonColor={props.color}
			onclick={props.onClick}
		>{props.text}</StyledButton>
	);
};

Button.propTypes ={
	onClick: PropTypes.func,
	text: PropTypes.string,
};

Button.defaultProps = {
	onClick: () => {};
	text: '',
};

export default Button;
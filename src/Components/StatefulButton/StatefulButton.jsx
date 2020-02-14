import React, { Component } from 'react';
import { colors } from '../../utils/constants';
import Button from '../Button/Button';

class StatefulButton extends Component {
	constructor() {
		super();

		this.state = {
			copy: 'Click Here'
		}

		this.setCopy = this.setCopy.bind(this);
	}

	setCopy() {
		this.setState({ copy: 'Clicked!'})
	}

	render() {
		return(
			<Button 
				onClick={() => this.setCopy('Clicked!')}
				text={this.state.copy}
				buttonColor={colors.green}
			/>
		);
	}
};

export default StatefulButton;
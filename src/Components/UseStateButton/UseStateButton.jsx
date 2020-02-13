import React, { useState } from 'react';
import { colors } from '../../utils/constants';
import Button from '../Button/Button';

const UseStateButton = () => {
	const [copy, setCopy] = useState('Click Here');
	return (
		<Button 
			onClick={() => setCopy('Clicked!')}
			text={copy}
			buttonColor={colors.green}
		/>
	);
};

export default UseStateButton;
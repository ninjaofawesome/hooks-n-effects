import React, { useState, useEffect } from 'react';
import {
    Header3,
    Paragraph,  
} from '../UtilityComponents';
import { colors } from '../../utils/constants';

const UseEffect = () => {
	const [listData, setListData] = useState([]);

	useEffect(() => {
		fetch('https://api.adviceslip.com/advice')
			.then(response => response.json())
			.then(data => setListData(data));

	}, []);

	const data = [listData];
	return (
		<div>
			<Header3 paraColor={colors.black}>Example of local state</Header3>
			<Paragraph>{data[0].slip !== undefined ? data[0].slip.advice : ''}</Paragraph>
		</div>
	);
};

export default UseEffect;

import React, { useState, useEffect } from 'react';

const UseEffect = () => {
	const [listData, setListData] = useState([]);

	useEffect(() => {
		fetch('https://api.adviceslip.com/advice')
			.then(response => response.json())
			.then(data => setListData(data));

	}, []);

	const data = [listData];
	return (
		<div>{data[0].slip !== undefined ? data[0].slip.advice : ''}</div>
	);
};

export default UseEffect;

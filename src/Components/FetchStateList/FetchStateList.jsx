import React, { Component } from 'react';
import {
    Header3,
    Paragraph,  
} from '../UtilityComponents';
import { colors } from '../../utils/constants';

class FetchStateList extends Component {
	constructor() {
		super();
		this.state={
			listData: {}
		};

		this.renderData = this.renderData.bind(this);
	}

	componentDidMount() {
		fetch('https://api.adviceslip.com/advice')
			.then(response => response.json())
			.then(data => this.setState({listData: data}));
	}

	renderData() {
		const dataObj = this.state.listData;
		return Object.keys(dataObj).length === 0 && dataObj.constructor === Object ? 'loading' : dataObj.slip.advice;
	}

	render() {		
		return (
			<div>
				<Header3 paraColor={colors.black}>Example of fetched state</Header3>
				<Paragraph>{this.renderData()}</Paragraph>
			</div>
		);
	}
};

export default FetchStateList;

import React, { Component } from 'react';

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
			<div>{this.renderData()}</div>
		);
	}
};

export default FetchStateList;

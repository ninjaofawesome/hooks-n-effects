import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './index.styles.js';
import App from './Pages/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.Fragment>
		<GlobalStyle />
		<App />
	</React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

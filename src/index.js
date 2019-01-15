import '@babel/polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// A modern alternative to CSS resets
import 'normalize.css';
// Global css setting
import './global.css';

import configureStore from './store';
import Routes from './routes';

const store = configureStore({});
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<AppContainer>
		<Routes store={store} history={history} />
	</AppContainer>,
	document.getElementById('content'),
);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const NewRoutes = require('./routes').default; // eslint-disable-line global-require
		ReactDOM.render(
			<AppContainer>
				<NewRoutes store={store} history={history} />
			</AppContainer>,
			document.getElementById('content'),
		);
	});
}

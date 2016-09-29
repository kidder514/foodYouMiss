import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require("./asset/style.css");

// the structure follow the redux official github -> example -> real-world
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
	<MuiThemeProvider>
  		<Root store={store} history={history} />
  	</MuiThemeProvider>,
  	document.getElementById('root')
)

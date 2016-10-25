import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

require("./asset/style.css");
require("./asset/responsive.css");
require("./asset/googlefont/roboto.css");

// the structure follow the redux official github -> example -> real-world
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

//this line stablise the Material UI
injectTapEventPlugin();

render(
	<MuiThemeProvider>
  		<Root store={store} history={history} />
  	</MuiThemeProvider>,
  	document.getElementById('root')
)

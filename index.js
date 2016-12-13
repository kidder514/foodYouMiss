import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import injectTapEventPlugin from 'react-tap-event-plugin';
import rootReducer from './app/reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from "./app/routes";
import muiTheme from "./app/asset/muiTheme.js"

require("./app/asset/style.css");
require("./app/asset/responsive.css");
require("./app/asset/googlefont/roboto.css");

//this line stablise the Material UI
injectTapEventPlugin();

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const history = syncHistoryWithStore(browserHistory, store);

render(
	<MuiThemeProvider muiTheme={muiTheme}>
		    <Provider store={store}>
            	<div>
            		<Router history={history} routes={routes} />
            	</div>
        	</Provider>
  	</MuiThemeProvider>,
  	document.getElementById('root')
)





import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import {Router, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './app/reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from "./app/routes"
import injectTapEventPlugin from 'react-tap-event-plugin';

require("./app/asset/style.css");
require("./app/asset/responsive.css");
require("./app/asset/googlefont/roboto.css");

//this line stablise the Material UI
injectTapEventPlugin();

let store = createStore(rootReducer, applyMiddleware(thunk));
const history = syncHistoryWithStore(browserHistory, store);

render(
	  <MuiThemeProvider>
		    <Provider store={store}>
            	<div>
            		<Router history={history} routes={routes} />
            	</div>
        	</Provider>
  	</MuiThemeProvider>,
  	document.getElementById('root')
)





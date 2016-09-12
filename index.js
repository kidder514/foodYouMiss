import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import mainReducer from './reducers/mainReducer'
import App from './components/App'

const store = createStore(mainReducer)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
  	{ }
    <Router history={history}>
    	<Route component={Nav}>
    	<Route path="/" component={App}>
    	</Route>
    <Router>
  </Provider>,
  document.getElementById('root')
)
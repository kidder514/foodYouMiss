import React from "react"
import {Route, IndexRoute} from "react-router"
import OutterWrapper from "./components/OutterWrapper"
import Wrapper from "./components/Wrapper"
import SlidingPage from "./components/common/SlidingPage"
import Front from "./containers/static/Front"
import HomeFood from "./containers/HomeFood"
import Login from "./containers/user/Login"
import Signup from "./containers/user/Signup"
import Signout from "./containers/user/Signout"
import MyPage from "./containers/MyPage"
import Message from "./containers/Message"
import Dashboard from "./containers/dashboard/Dashboard"
import Overview from "./containers/dashboard/Overview"
import OrderHistory from "./containers/dashboard/OrderHistory"
import Notification from "./containers/dashboard/Notification"
import Setting from "./containers/dashboard/Setting"
import Help from "./containers/dashboard/Help"
import Cook from "./containers/Cook"
import Checkout from "./containers/Checkout"
import SingleDish from "./containers/SingleDish"

export default (
	<Route component={OutterWrapper}>
		<Route path="/" component={Wrapper}>
	  		<IndexRoute component={Front} />
	  		<Route path="homefood" component={HomeFood} />
	  		<Route path="login" component={Login} />
	  		<Route path="signup" component={Signup} />
		  	<Route path="signout" component={Signout} />
		  	<Route path="mypage" component={MyPage} />
		  	<Route path="message" component={Message} />
		  	<Route path="dish/:dishid" component={SingleDish} />
		  	<Route path="cook/:cookid" component={Cook} />
		  	<Route path="checkout" component={Checkout} />
		  	<Route path="dashboard" component={Dashboard} >
		  		<IndexRoute component={Overview}/>
		  		<Route path="order-history" component={OrderHistory} />
		  		<Route path="notification" component={Notification} />
		  		<Route path="settings" component={Setting} />
		  		<Route path="help" component={Help} />
		  	</Route>
		</Route>
	</Route>
)

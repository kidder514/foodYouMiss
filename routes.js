import React from "react"
import OutterWrapper from "./containers/OutterWrapper"
import MainWrapper from "./containers/MainWrapper"
import { Route } from "react-router"

export default (
	<Route path="/" component={OutterWrapper}>

		<Route component={MainWrapper}>	{/*
		  	<Route compnent={MenuLayer}>
		  	</Route>
		  	<Route component={ContentLayer}>
		  		<Route path="/" component={Home}></Route>
			  	<Route path="/map" component={Map}></Route>
			  	<Route path="/subscriptions" component={Subscriptions}></Route>
			  	<Route path="mypage" component={MyPage}></Route>
			  	<Route path="Account" component={Account}></Route>
		  	</Route>
		</Route>
	  		<Route component={SlidingPage}>*/}
		</Route>

	</Route>


)

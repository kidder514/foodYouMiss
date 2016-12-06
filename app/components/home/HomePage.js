import React, {Component} from 'react';

class HomePage extends Component{

  	render(){

  		if(this.props.userStatus.isLoggedIn){
  			console.log("user is logged in");
  		}else{
  			console.log("user is NOT logged in");
  		}

  		return(
  			// post list 
  			<div className="full-width-wrapper">
            	Home page
        	</div>
  			);

    }
}

export default HomePage;

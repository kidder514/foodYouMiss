import React, {Component} from 'react';

class Dashboard extends Component {

  	render(){
	    return (
	        <div className="wrapper">
	            Dashboard
	            {this.props.children}
	        </div>
	    )
  	}
}

export default Dashboard;
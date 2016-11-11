import React, {Component} from 'react';
import MenuLayer from "./menu/MenuLayer";

class Wrapper extends Component {

  	render(){
	    return (
	        <div className="wrapper">
	            <MenuLayer />
	            {this.props.children}
	        </div>
	    )
  	}
}

export default Wrapper;
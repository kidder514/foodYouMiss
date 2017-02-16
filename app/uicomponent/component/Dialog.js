import React, {Component} from 'react';

class Dialog extends Component {

	render() {

	    return (
	    	<div className="dialog-wrapper" style={this.props.open ? {display:"none"} : {display:"block"}}>
		    	<div className="dialog">
		    		<span className="close-dialog" onClick={this.props.onRequestClose} >x</span>
		    		<h3>{this.props.title}</h3>
		    		<p>{this.props.msg}</p>
		    		<button>{this.props.buttonMsg ? this.props.buttonMsg : "OK"}</button>
		    	</div>
	    	</div>
	    )
	}
}

export default Dialog;

import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ErrorPage extends Component {

	constructor(props){
		super(props)
		
        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
	}

	handleOpen(msg) {
		this.props.errorPopup(this.props.error)
	}

	handleClose(){
		this.props.errorPopup("")
	}

	render() {
	  	const button = [
	  		<FlatButton
	  		   label="Ok"
	  		   primary={true}
	  		   onTouchTap={this.handleClose}
	  		/>,
	  	]

	    return (
	        <Dialog
	        	actions={button}
	          	title="Ooooops."
	          	modal={true}
	          	open={this.props.error != ""}
	          	onRequestClose={this.handleClose}
	        >
	        {this.props.error}
	        </Dialog>
	    )
	}
}


export default ErrorPage;

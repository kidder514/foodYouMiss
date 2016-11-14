import React, {Component} from 'react';
import {connect} from "react-redux";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {errorPopup} from "../actions/errorActions"

class ErrorPopup extends Component {

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

	somethingelse(){

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
	          	title="Ooooops"
	          	modal={true}
	          	open={this.props.error != ""}
	          	onRequestClose={this.handleClose}
	        >
	        {this.props.error}
	        </Dialog>
	    )
	}
}

const mapStateToProps = (state) => {
	return {
		error:state.ui.errorMessage
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    errorPopup: (msg) => {
      dispatch(errorPopup(msg))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopup)

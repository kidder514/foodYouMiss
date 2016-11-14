import React, {Component} from 'react';
import {connect} from "react-redux";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {errorPopup} from "../actions/errorActions"
import ErrorPage from "../components/common/ErrorPage"

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

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPage)

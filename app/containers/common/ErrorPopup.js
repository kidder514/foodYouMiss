import React, {Component} from 'react';
import {connect} from "react-redux";
import {errorPopup} from "../../Action/errorAction"
import ErrorPage from "../../components/common/ErrorPage"

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

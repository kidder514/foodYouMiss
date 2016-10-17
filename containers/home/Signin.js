import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux"
import { signinCall } from "../../actions/signinActions"
import validator from "Validator"

class Signin extends Component {
	constructor(props){
		super(props)
		this.state={
			email:"",
			password:"",
			isValid:false,
			error:{
				email:"",
				password:""
			}
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value})
	}

	onSubmit(e){
		e.preventDefault()

		if(this.state.email == ""){
			this.state.error.email = "Email address is required."
			this.state.isValid = false
			console.log("1");
		}else{

			if(!validator.isEmail(this.state.email)){
				this.state.error.email = "Email format is incorrect."
				this.state.isValid = false;
			console.log("2");

			}else{
				this.state.error.email = ""
				this.state.isValid = true;
			console.log("3");

			}

		}

		if(this.state.password == ""){
			this.state.error.password = "Password is required."
			this.state.isValid = false
			console.log("4");

		}else{
			this.state.error.password = ""
			this.state.isValid = true;
			console.log("6");

		}

		if(this.state.isValid){
			console.log("7");

			this.props.signinDispatch({email: this.state.email, password: this.state.password})
		}
	}

	render() {

		let style={
			input:{
		        color: "#fff",
			},
			hint:{
				color: "rgba(255, 255, 255, 0.6)"
			},
			underlineFocus:{
		        borderColor: "#fff",
			},
			error:{
				color: "#fff",
			}
		}

	    return (
			<div className="single-page-wrapper signin">
	        	<div className="single-page-content signin-inner">
		    		<form onSubmit={this.onSubmit} >
		    			<h1>Sign in</h1>
						<TextField 
		    			value={this.state.email}
		    			onChange={this.onChange}
		    			type="text"
		    			name="email"
		    			defaultValue=""
		    			errorText={this.state.error.email}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelText="E-mail"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
		    			/><br />
						<TextField 
		    			value={this.state.password}
		    			onChange={this.onChange}
		    			type="password"
		    			name="password"
		    			defaultValue=""
		    			floatingLabelText="Password"
		    			errorText={this.state.error.password}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
		    			/><br />

		    			<RaisedButton 
		    			label="Sign In"
		    			secondary={true} 
		    			type="submit"
		    			onClick={this.onSubmit}
		    			disabled={this.state.isValid}
						/>
		    		</form>
	        	</div>
	    	</div>
	    )
	  }
	}

const mapDispatchToProps = (dispatch) => {
	return {
		signinDispatch: (userInfo) =>{
			dispatch(signinCall(userInfo))
		}
	}
}

export default connect(null,mapDispatchToProps)(Signin)


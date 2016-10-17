import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux"
import { signinCall } from "../../actions/signinActions"
import validator from "Validator"

class Signin extends Component {
	constructor(props){
		super(props)
		this.state = {
			email:"",
			password:"",
			isValid:true,
			errorEmail:"",
			errorPassword:""
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value})
	}

	onSubmit(e){

		e.preventDefault()
		let state_cache = {};

		if(this.state.email == ""){
			state_cache.errorEmail = "Email address is required.";
			state_cache.isValid = false;
			console.log("1");

		}else{

			if(!validator.isEmail(this.state.email)){
				state_cache.errorEmail = "Email format is invalid";
				state_cache.isValid = false;
				console.log("2");

			}else{
				state_cache.errorEmail = "";
				state_cache.isValid = true;
				console.log("3");
			}
		}

		if(this.state.password == ""){
			state_cache.errorPassword = "Password is required.";
			state_cache.isValid = false;
			console.log("4");

		}else{
			state_cache.errorPassword = "";
			console.log("6");

		}


		console.log(state_cache.isValid);
		if(state_cache.isValid){
			this.setState(state_cache,function(){
				this.props.signinDispatch({email: this.state.email, password: this.state.password})
			});
			
		}else{
			this.setState(state_cache);
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
		    			errorText={this.state.errorEmail}
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
		    			errorText={this.state.errorPassword}
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


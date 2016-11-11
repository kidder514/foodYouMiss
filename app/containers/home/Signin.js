import React, {Component} from 'react';
import {connect} from "react-redux";
import validator from "Validator";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {signinCall} from "../../actions/signinActions";


class Signin extends Component {
	constructor(props){
		super(props);

		this.state = {
			email:"",
			password:"",
			isValid:true,
			errorEmail:"",
			errorPassword:""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
		let state_cache = {};

		if(this.state.email == ""){
			state_cache.errorEmail = "Email address is required.";
			state_cache.isValid = false;
		}else{
			if(!validator.isEmail(this.state.email)){
				state_cache.errorEmail = "Email format is invalid";
				state_cache.isValid = false;
			}else{
				state_cache.errorEmail = "";
				state_cache.isValid = true;
			}
		}

		if(this.state.password == ""){
			state_cache.errorPassword = "Password is required.";
			state_cache.isValid = false;
		}else{
			state_cache.errorPassword = "";
		}

		if(state_cache.isValid){
			this.setState(state_cache,function(){
				this.props.signinDispatch({email: this.state.email, password: this.state.password});
			});
		}else{
			this.setState(state_cache);
		}
	}

	render(){
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
		};

	    return (
			<div className="full-width-wrapper signin">
	        	<div className="home-content-wrapper">
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
	    	);
	  	}
	}

const mapDispatchToProps = (dispatch) => {
	return {
		signinDispatch: (userInfo) =>{
			dispatch(signinCall(userInfo));
		}
	};
};

export default connect(null,mapDispatchToProps)(Signin);

import React, {Component} from 'react';
import validator from "Validator";
import TextField from '../../uicomponent/form/TextField';
import ReCAPTCHA from "react-google-recaptcha";
import MD5 from "../../helpers/MD5";

class SigninPage extends Component {

	constructor(props){
		super(props);

		this.recapResponse = "";

		this.state = {
			email: "",
			password:"",
			recapResponse:"",
			isValid:false,
			errorEmail:"",
			errorPassword:"",
			errorRecaptcha:""
		};
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.recaptchaCallback = this.recaptchaCallback.bind(this);
		this.recaptchaExpiredCallback = this.recaptchaExpiredCallback.bind(this);
	}

	recaptchaCallback(value){
		this.recapResponse = value;
	}

	recaptchaExpiredCallback(){
		this.recapResponse = "";
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();

		let state_cache = {};

		if(this.state.email == ""){
			state_cache.errorEmail = "Email address is required.";
		}else{
			if(!validator.isEmail(this.state.email)){
				state_cache.errorEmail = "Email format is invalid";
			}else{
				state_cache.errorEmail = "";
			}
		}

		if(this.state.password == ""){
			state_cache.errorPassword = "Password is required.";
		}else{
			state_cache.errorPassword = "";
		}

		if(this.recapResponse == ""){
			state_cache.errorRecaptcha = "Please check the Recaptcha, your Recaptcha is not valid or expired.";
		}else{
			state_cache.errorRecaptcha = "";
		}

		if((!this.state.email == "")
			&&(validator.isEmail(this.state.email))
			&&(!this.state.password == "")
			&&(!this.recapResponse == "")){

			state_cache.recapResponse = this.recapResponse;
			state_cache.isValid = true;
			this.setState(state_cache,function(){
				this.props.signin({"email": this.state.email, "password": "123456"});
				// this.props.signin({"email": this.state.email, "password": MD5(this.state.password), "recapResponse": this.state.recapResponse});
			});
		}else{
			state_cache.isValid = false;
			this.setState(state_cache);
		}

	}

  	render(){
		let style={
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
	        <div className="full-width-wrapper">
	            <div className="signin-content-wrapper">
	            	<h1 className="content-logo"></h1>
	            	<form onSubmit={this.onSubmit}>
	            		<h1>Sign in with existing account</h1>
						<TextField 
			    			value={this.state.email}
			    			onChange={this.onChange}
			    			type="text"
			    			name="email"
			    			errorText={this.state.errorEmail}
			    			errorStyle={style.error}
			    			placeholder="E-mail"
		    			/><br />
						<TextField 
			    			value={this.state.password}
			    			onChange={this.onChange}
			    			type="password"
			    			name="password"
			    			placeholder="Password"
			    			errorText={this.state.errorPassword}
			    			errorStyle={style.error}
		    			/><br />

					    <ReCAPTCHA
					    	className="recaptcha"
					      	ref="recaptcha"
					      	sitekey="6Lf5EwwUAAAAAEddev4kBP7COg1RHlQWsI81uWdt"
					      	onChange={this.recaptchaCallback}
					      	onExpired={this.recaptchaExpiredCallback}
					    />
		    			<p>{this.state.errorRecaptcha}</p>
		    			<button 
		    				class="btn default-btn"
			    			label="Sign In"
			    			type="submit"
			    			onClick={this.onSubmit}
						>Sign In</button>
	            	</form>
	            </div>
	        </div>
	    )
  	}
}

export default SigninPage;
import React, {Component} from 'react';
import validator from "Validator";
import { browserHistory } from "react-router"
import TextField from '../../uicomponent/form/TextField';
import ReCAPTCHA from "react-google-recaptcha";
import MD5 from "../../helpers/MD5";
import config from "../../config"
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class SigninPage extends Component {

	constructor(props){
		super(props);

		this.recapResponse = "";

		this.state = {
			email: "",
			password:"",
			recapResponse:"",
			errorEmail:"",
			errorPassword:"",
			errorRecaptcha:"",
			disableSubmit:false
		};
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.recaptchaCallback = this.recaptchaCallback.bind(this);
		this.recaptchaExpiredCallback = this.recaptchaExpiredCallback.bind(this);
	}

	componentWillMount(){
		if(this.props.userStatus.isLoggedIn){
			browserHistory.push('/');
		}
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
			console.log("recaptcha");
			console.log(this.recapResponse);
			this.setState(state_cache,
				this.props.signin({"email": this.state.email, "password": MD5(this.state.password), "recapResponse": this.recapResponse})
			);
			
		}else{
			this.setState(state_cache);
		}

	}

	googleLoginSuccess(){

	}

	googleLoginFail(){

	}

	responseFacebook(){

	}

	componentClicked(){
		
	}

  	render(){
	    return (
	        <div className="container">
		        <div className="row">
			        <div className="col-sm-8 col-sm-offset-2">
	            		<h1 className="content-logo"></h1>
		            	<form onSubmit={this.onSubmit}>
		            		<h1>Sign in with existing account</h1>
							<TextField 
				    			value={this.state.email}
				    			onChange={this.onChange}
				    			type="text"
				    			name="email"
				    			errorText={this.state.errorEmail}
				    			placeholder="E-mail"
			    			/><br />
							<TextField 
				    			value={this.state.password}
				    			onChange={this.onChange}
				    			type="password"
				    			name="password"
				    			placeholder="Password"
				    			errorText={this.state.errorPassword}
			    			/><br />
						    <ReCAPTCHA
						    	className="recaptcha"
						      	ref="recaptcha"
						      	sitekey={config.GrecaptchaSitekey}
						      	onChange={this.recaptchaCallback}
						      	onExpired={this.recaptchaExpiredCallback}
						    />
			    			<p>{this.state.errorRecaptcha}</p>
			    			<button 
			    				className={"btn btn-default " + (this.state.disableSubmit ? "disabled" : "")}
				    			label="Sign In" 
				    			type="submit"
				    			onClick={this.onSubmit}
							>Sign In</button>
		            	</form>
					  <GoogleLogin
					    clientId="215051426109-bnlsa6i3klfvsctep2qor59mp4rk31g3.apps.googleusercontent.com"
					    buttonText="Login with google"
					    onSuccess={this.googleLoginSuccess}
					    onFailure={this.googleLoginFail}
					  />

					  <FacebookLogin
					    appId="1088597931155576"
					    autoLoad={true}
					    fields="name,email,picture"
					    onClick={this.componentClicked}
					    callback={this.responseFacebook} />
	            	</div>
	            </div>
	        </div>
	    )
  	}
}

export default SigninPage;
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import validator from "Validator";
import TextField from 'material-ui/TextField';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ReCAPTCHA from "react-google-recaptcha";
import MD5 from "../../helpers/MD5";
import Gautocomplete from "../../helpers/GoogleAutocomplete"
import isPasswordValid from "../../helpers/passwordChecker"

class SignupPage extends Component {

	constructor(props){
		super(props);

		this.state = {
			isValid:false,
			email: "",
			errorEmail:"",
			password:"",
			errorPassword:"",
			confirmPassword:"",
			errorConfirmPassword:"",
			firstName:"",
			errorFirstName:"",
			lastName:"",
			errorLastName:"",
			location:"",
			errorLocation:"",
			coordinate:"",
			recapResponse:"",
			errorRecaptcha:"",
			disableSubmit:true
		};
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.autocompleteOnChange = this.autocompleteOnChange.bind(this);
		this.handleLocaltion = this.handleLocaltion.bind(this);
		this.recaptchaCallback = this.recaptchaCallback.bind(this);
		this.recaptchaExpiredCallback = this.recaptchaExpiredCallback.bind(this);
		this.validateData = this.validateData.bind(this);
	}

	handleLocaltion(locationObj){
		if(locationObj.formatted_address != null && locationObj.geometry != null){
			this.setState({location:locationObj.formatted_address,
				coordinate: String(locationObj.geometry.location.lat()) + "," + String(locationObj.geometry.location.lng())}
				,() => {this.validateSubmitButton()});
		}else{
			this.setState({location:"",coordinate:""},() => {this.validateSubmitButton()});
		}
	}

	recaptchaCallback(value){
		this.setState({recapResponse:value}, () => {this.validateSubmitButton()});
	}

	recaptchaExpiredCallback(){
		this.setState({recapResponse:""}, () => {this.validateSubmitButton()})
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value},() => {this.validateSubmitButton()});
		console.log(this.state.disableSubmit);
		console.log(this.state)
	}

	autocompleteOnChange(e){
		if(this.location != "" && e.target.value != "" ){
			this.setState({location:"",coordinate:""},() => {this.validateSubmitButton()});
		}
	}

	validateSubmitButton(){
		if(this.state.email != ""
		 &&this.state.password != ""
		 &&this.state.confirmPassword != ""
		 &&this.state.firstName != ""
		 &&this.state.lastName != ""
		 &&this.state.location != ""
		 &&this.state.coordinate != ""
		 &&this.state.recapResponse != ""){
			this.setState({disableSubmit: false});
		}else{
			this.setState({disableSubmit: true});
		}
	}

	onSubmit(e){
		e.preventDefault();
		return ;
	}

	validateData(){

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
			if(isPasswordValid(this.state.password)){
				state_cache.errorPassword = "";
			}else{
				state_cache.errorPassword = "Password must has at least 8 characters with only letters and numbers, and contain at least one capital letter and one number.";
			}
		}

		if(this.state.password !== this.state.confirmPassword){
			state_cache.errorConfirmPassword = "Two passwords do not match.";
		}else{
			state_cache.errorConfirmPassword = "";
		}

		if(this.state.firstName == ""){
			state_cache.errorFirstName = "First name is required.";
		}else{
			if(validator.isAlpha(this.state.firstName)){
				state_cache.errorFirstName= "";
			}else{
				state_cache.errorFirstName = "Invalid first name";
			}
		}

		if(this.state.lastName == ""){
			state_cache.errorLastName = "Last name is required.";
		}else{
			if(validator.isAlpha(this.state.lastName)){
				state_cache.errorLastName = "";
			}else{
				state_cache.errorLastName = "Invalid Last name";
			}
		}

		if(this.location_cache == ""){
			state_cache.errorLocation = "Please choose a location from prompted list";
		}else{
			state_cache.errorLocation = "";
		}

		if(this.recapResponse == ""){
			state_cache.errorRecaptcha = "Please check the Recaptcha, your Recaptcha is not valid or expired.";
		}else{
			state_cache.errorRecaptcha = "";
		}

		if(( state_cache.errorEmail == "")
			&&(state_cache.errorPassword == "")
			&&(state_cache.errorConfirmPassword == "")
			&&(state_cache.errorFirstName == "")
			&&(state_cache.errorLastName == "")
			&&(state_cache.errorLocation == "")
			&&(state_cache.errorRecaptcha == "")){
			
			state_cache.recapResponse = this.recapResponse;
			state_cache.isValid = true;
			this.setState(state_cache,function(){
				this.props.signin({"email": this.state.email, "password": MD5(this.state.password), "recapResponse": this.state.recapResponse});
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
		        <div className="signup-content-wrapper">
					<form onSubmit={this.onSubmit}>
	            		<h1>Register a new account</h1>
						<TextField 
			    			value={this.state.email}
			    			onChange={this.onChange}
			    			type="text"
			    			name="email"
			    			errorText={this.state.errorEmail}
			    			errorStyle={style.error}
			    			floatingLabelText="E-mail"
			    			floatingLabelStyle={style.hint} 
			    			underlineFocusStyle={style.underlineFocus}
		    			/><br />
						<TextField 
			    			value={this.state.password}
			    			onChange={this.onChange}
			    			type="password"
			    			name="password"
			    			floatingLabelText="Password"
			    			errorText={this.state.errorPassword}
			    			errorStyle={style.error}
			    			floatingLabelStyle={style.hint} 
			    			underlineFocusStyle={style.underlineFocus}
		    			/><br />
						<TextField 
			    			value={this.state.confirmPassword}
			    			onChange={this.onChange}
			    			type="password"
			    			name="confirmPassword"
			    			floatingLabelText="Confirm Password"
			    			errorText={this.state.errorConfirmPassword}
			    			errorStyle={style.error}
			    			floatingLabelStyle={style.hint} 
			    			underlineFocusStyle={style.underlineFocus}
		    			/><br />
						<TextField 
			    			value={this.state.firstName}
			    			onChange={this.onChange}
			    			type="text"
			    			name="firstName"
			    			floatingLabelText="First Name"
			    			errorText={this.state.errorFirstName}
			    			errorStyle={style.error}
			    			floatingLabelStyle={style.hint} 
			    			underlineFocusStyle={style.underlineFocus}
		    			/><br />
						<TextField 
			    			value={this.state.lastName}
			    			onChange={this.onChange}
			    			type="text"
			    			name="lastName"
			    			floatingLabelText="Last Name"
			    			errorText={this.state.errorLastName}
			    			errorStyle={style.error}
			    			floatingLabelStyle={style.hint} 
			    			underlineFocusStyle={style.underlineFocus}
		    			/><br />

		    			<Gautocomplete 
		    				handleLocaltion={this.handleLocaltion} 
		    				autocompleteOnChange={this.autocompleteOnChange}
		    			/><br />
		    			<p className="locationError">{this.state.errorLocation}</p>
					    <ReCAPTCHA
					    	className="recaptcha"
					      	ref="recaptcha"
					      	sitekey="6Lf5EwwUAAAAAEddev4kBP7COg1RHlQWsI81uWdt"
					      	onChange={this.recaptchaCallback}
					      	onExpired={this.recaptchaExpiredCallback}
					    />
		    			<p>{this.state.errorRecaptcha}</p>
		    			<RaisedButton 
			    			label="Sign Up" 
			    			primary={true} 
			    			type="submit"
			    			onClick={this.validateData}
			    			disabled={this.state.disableSubmit}
						/>

	            	</form>
		        </div>
	        </div>
	    )
  	}
}

export default SignupPage;
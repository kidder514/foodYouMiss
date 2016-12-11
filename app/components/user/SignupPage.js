import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import validator from "Validator";
import TextField from 'material-ui/TextField';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ReCAPTCHA from "react-google-recaptcha";
import MD5 from "../../helpers/MD5";

class SignupPage extends Component {

	constructor(props){
		super(props);

		this.recapResponse = "";

		this.state = {
			isValid:false,
			email: "",
			errorEmail:"",
			password:"",
			errorPassword:"",
			confirmPassword:"",
			errorConfirmPassword:"",
			firstName:"",
			errorFirstname:"",
			lastName:"",
			errorLastName:"",
			recapResponse:"",
			errorRecaptcha:""
		};
		
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.recaptchaCallback = this.recaptchaCallback.bind(this);
		this.recaptchaExpiredCallback = this.recaptchaExpiredCallback.bind(this);
	}

	componentDidMount(){
		this.locationBox = new google.maps.places.SearchBox(this.locationInput);
		this.locationBox.addListener("places_changed", this.onPlacesChanged);
	}

	componentWillUnmount(){
		this.locationBox.removeListener("places_changed", this.onPlacesChanged);
	}

	onPlacesChanged(){
		console.log("the place has changed");
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
				this.props.signin({"email": this.state.email, "password": MD5(this.state.password), "recapResponse": this.state.recapResponse});
			});
		}else{
			state_cache.isValid = false;
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
	        <div className="full-width-wrapper">
            	<form onSubmit={this.onSubmit}>
            		<h1>Register a new account</h1>
					<TextField 
		    			value={this.state.email}
		    			onChange={this.onChange}
		    			type="text"
		    			name="email"
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
		    			floatingLabelText="Password"
		    			errorText={this.state.errorPassword}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
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
		    			inputStyle={style.input}
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
		    			inputStyle={style.input}
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
		    			inputStyle={style.input}
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/><br />
					<TextField 
		    			value={this.state.location}
		    			onChange={this.onChange}
		    			id="location"
		    			ref={(locationInput) => { this.locationInput = locationInput;}}
		    			type="text"
		    			name="location"
		    			floatingLabelText="Your Location"
		    			errorText={this.state.errorLocation}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/><br />
				    <ReCAPTCHA
				      ref="recaptcha"
				      sitekey="6Lf5EwwUAAAAAEddev4kBP7COg1RHlQWsI81uWdt"
				      onChange={this.recaptchaCallback}
				      onExpired={this.recaptchaExpiredCallback}
				    />
				    <div ref="recaptcha"></div>
	    			<p>{this.state.errorRecaptcha}</p>
	    			<RaisedButton 
		    			label="Sign Up"
		    			secondary={true} 
		    			type="submit"
		    			onClick={this.onSubmit}
					/>

            	</form>
	        </div>
	    )
  	}
}

export default SignupPage;
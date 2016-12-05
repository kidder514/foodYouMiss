import React, {Component} from 'react';
import validator from "Validator";
import {Step, Stepper, StepLabel,} from "material-ui/Stepper";
import TextField from 'material-ui/TextField';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class SignupPage extends Component {

	constructor(props){
		super(props);
		this.recapResponse = "";
		this.error = "";
		this.isValid = false;
		this.state = {
			stepIndex:0,
			finished:false,
			username:"",
			userNameError:"",
			email:"",
			emailError:"",
			password:"",
			passwordError:"",
			confirmPassword:"",
			confirmPasswordError:"",
			profile_img:"",
			streetNo:"",
			streetName:"",
			suburb:"",
			postcode:"",
			state:"",
			country:"Australia",
		};

		this.style={
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

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleNext = this.handleNext.bind(this);
		this.handlePrev = this.handlePrev.bind(this);
		this.handleSkip = this.handleSkip.bind(this);
		this.recaptchaCallback = this.recaptchaCallback.bind(this);
		this.recaptchaExpiredCallback = this.recaptchaExpiredCallback.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
	}

	handleNext(){
		switch (this.state.stepIndex){
			case 0:
				this.validateFirst();
			case 1:
				// this.setState({stepIndex: this.state.stepIndex + 1 });
			case 2:
				// this.setState({stepIndex: this.state.stepIndex + 1 });
			case 3:
				// this.setState({stepIndex: this.state.stepIndex + 1 });
			default:
				return;	
			}
	}

	validateFirst(){
		let state = this.state;
		let state_cache = {};
		let isEmailValid = false;
		let isPasswordValid = false;
		let isConfirmPasswordValid = false;
		let isUsernameValid = false;

		if(state.username.length < 6){
			state_cache.userNameError = "Username must contain at leaset 6 characters.";
			isUsernameValid = false;
		}else{
			state_cache.userNameError = "";
			isUsernameValid = true;
		}

		if(state.email == ""){
			state_cache.emailError = "Email address is required.";
			isEmailValid = false;
		}else{
			if(!validator.isEmail(state.email)){
				state_cache.emailError = "Email format is invalid";
				isEmailValid = false;
			}else{
				state_cache.emailError = "";
				isEmailValid = true;
			}
		}

		if(state.password == ""){
			state_cache.passwordError = "Password is required.";
			isPasswordValid = false;
		}else{
			if(state.password.length > 8
				&& /\d/.test(state.password)
				&& /[a-z]/.test(state.password)
				&& /[A-Z]/.test(state.password)){
				state_cache.passwordError = "";
				isPasswordValid = true;
			}else{
				state_cache.passwordError = 
				"Password must contains at least a uppcase letter, lowercase letter and a number.";
				isPasswordValid = false;
			}
		}

		if(state.password === state.confirmPassword){
			state_cache.confirmPasswordError = "";
			isConfirmPasswordValid = true;
		}else{
			state_cache.confirmPasswordError = "Two passwords do not match.";
			isConfirmPasswordValid = false;
		}

		if(isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid){
			console.log(true);
			state_cache.isValid = true;
			this.setState(state_cache);
			this.setState({stepIndex: state.stepIndex + 1 });
		}else{
			console.log(false);

			state_cache.isValid = false;
			this.setState(state_cache);
		}
	}

	handlePrev(){
		let stepIndex = this.state.stepIndex;

		if(stepIndex > 0){
			this.setState({stepIndex: stepIndex - 1 });
		}
	}

	handleSkip(){
		let stepIndex = this.state.stepIndex;

		switch (stepIndex){
			case 1:
				this.setState({stepIndex: stepIndex + 1 });
			case 2:
				this.setState({stepIndex: stepIndex + 1 });
			case 3:
				this.setState({stepIndex: stepIndex + 1 });
			default:
				return;	
		}
	}

	recaptchaCallback(value){

	}

	recaptchaExpiredCallback(){

	}

	getStepContent(stepIndex){
		let style = this.style;
		let state = this.state;

		switch (stepIndex){
			case 0:
				return (<div>
					<h1>Login info</h1>
					<TextField 
		    			value={state.username}
		    			onChange={this.onChange}
		    			type="text"
		    			name="username"
		    			errorText={state.userNameError}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelText="User Name"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={state.email}
		    			onChange={this.onChange}
		    			type="text"
		    			name="email"
		    			errorText={state.emailError}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelText="email"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={state.password}
		    			onChange={this.onChange}
		    			type="password"
		    			name="password"
		    			errorText={state.passwordError}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelText="password"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={state.confirmPassword}
		    			onChange={this.onChange}
		    			type="password"
		    			name="confirmPassword"
		    			errorText={state.confirmPasswordError}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelText="confirm password"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
				</div>);
			case 1:
				return (<div>
					<h1>Delivery Location</h1>
					<TextField 
		    			value={state.streetNo}
		    			onChange={this.onChange}
		    			type="text"
		    			name="streetNo"
		    			inputStyle={style.input}
		    			floatingLabelText="street No."
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={state.streetName}
		    			onChange={this.onChange}
		    			type="text"
		    			name="streetName"
		    			inputStyle={style.input}
		    			floatingLabelText="street name"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={state.suburb}
		    			onChange={this.onChange}
		    			type="text"
		    			name="suburb"
		    			inputStyle={style.input}
		    			floatingLabelText="Suburb"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={state.postcode}
		    			onChange={this.onChange}
		    			type="text"
		    			name="postcode"
		    			inputStyle={style.input}
		    			floatingLabelText="postcode"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={state.state}
		    			onChange={this.onChange}
		    			type="text"
		    			name="state"
		    			inputStyle={style.input}
		    			floatingLabelText="state"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={state.country}
		    			onChange={this.onChange}
		    			type="text"
		    			name="country"
		    			inputStyle={style.input}
		    			floatingLabelText="country"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					
				</div>);
			case 2:
				return (<div>2</div>);
			case 3:
				return (<div>3</div>);
			case 4:
				return (<div>4</div>);
		}
	}

	renderContent(){
		const {finished, stepIndex} = this.state;

		if(finished) {
			return (
				<div>
					finished
				</div>
			)
		}

		return (
			<div className="signup-section">
				<div>{this.error}</div>
				<div>{this.getStepContent(stepIndex)}</div>
				<div>
					<FlatButton 
						label="Back"
						disabled={stepIndex === 0}
						onTouchTap={this.handlePrev}
					/>
					<FlatButton
			            label="Skip"
						disabled={stepIndex === 4 || stepIndex === 0}
			            primary={true}
			            onTouchTap={this.handleSkip}
			        />
		            <RaisedButton
			            label={stepIndex === 4 ? 'Confirm' : 'Next'}
			            primary={true}
			            onTouchTap={this.handleNext}
			        />
				</div> 
			</div>
			)
	}

  	render(){
  		const {stepIndex} = this.state;

	    return (
	        <div  className="full-width-wrapper">
	        	<div className="signup-content-wrapper">
		        	<Stepper activeStep={stepIndex}>
		        		<Step>
		        			<StepLabel></StepLabel>
		        		</Step>
		        		<Step>
		        			<StepLabel></StepLabel>
		        		</Step>
		        		<Step>
		        			<StepLabel></StepLabel>
		        		</Step>
						<Step>
		        			<StepLabel></StepLabel>
		        		</Step>
		        		<Step>
		        			<StepLabel></StepLabel>
		        		</Step>
		        	</Stepper>
				    {this.renderContent()}
		        </div>
	        </div>
	    );
  	}
}

export default SignupPage;
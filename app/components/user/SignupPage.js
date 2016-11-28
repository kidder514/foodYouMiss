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

		this.state = {
			stepIndex:0,
			finished:false,
			username:"",
			first_name:"",
			midddle_name:"",
			last_name:"",
			email:"",
			password:"",
			dob:"",
			profile_img:"",

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

	}

	handlePrev(){
		if(this.state.stepIndex > 0){
			this.setState({stepIndex: this.state.stepIndex - 1 });
		}
	}

	handleSkip(){
		switch (this.state.stepIndex){
			case 0:
				this.setState({stepIndex: this.state.stepIndex + 1 });
			case 1:
				this.setState({stepIndex: this.state.stepIndex + 1 });
			case 2:
				this.setState({stepIndex: this.state.stepIndex + 1 });
			case 3:
				this.setState({stepIndex: this.state.stepIndex + 1 });
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

		switch (stepIndex){
			case 0:
				return (<div>
					<TextField 
		    			value={this.state.username}
		    			onChange={this.onChange}
		    			type="text"
		    			name="username"
		    			errorText={this.state.errorUserName}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelText="User Name"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={this.state.email}
		    			onChange={this.onChange}
		    			type="text"
		    			name="email"
		    			errorText={this.state.errorEmail}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelText="email"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={this.state.password}
		    			onChange={this.onChange}
		    			type="password"
		    			name="password"
		    			errorText={this.state.passwordError}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelText="password"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
					<TextField 
		    			value={this.state.confirmPassword}
		    			onChange={this.onChange}
		    			type="password"
		    			name="confirmPassword"
		    			errorText={this.state.confirmPasswordError}
		    			errorStyle={style.error}
		    			inputStyle={style.input}
		    			floatingLabelText="confirm password"
		    			floatingLabelStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
	    			/>
				</div>);
			case 1:
				return (<div>1</div>);
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
				<div>{this.getStepContent(stepIndex)}</div>
				<div>
					<FlatButton 
						label="Back"
						disabled={stepIndex === 0}
						onTouchTap={this.handlePrev}
					/>
					<FlatButton
			            label="Skip"
						disabled={stepIndex === 4}
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
		let style = this.style;

	    return (
	        <div  className="full-width-wrapper">
	        	<div className="signup-content-wrapper">
		        	<Stepper activeStep={stepIndex}>
		        		<Step>
		        			<StepLabel>1</StepLabel>
		        		</Step>
		        		<Step>
		        			<StepLabel>2</StepLabel>
		        		</Step>
		        		<Step>
		        			<StepLabel>3</StepLabel>
		        		</Step>
						<Step>
		        			<StepLabel>4</StepLabel>
		        		</Step>
		        		<Step>
		        			<StepLabel>5</StepLabel>
		        		</Step>
		        	</Stepper>
				    {this.renderContent()}
		        </div>
	        </div>
	    );
  	}
}

export default SignupPage;
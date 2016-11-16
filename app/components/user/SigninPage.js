import React, {Component} from 'react';
import validator from "Validator";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class SigninPage extends Component {
	constructor(props){
		super(props);

		this.state = {
			email: "",
			password:"",
			isValid:false,
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
		    			<div className="g-recaptcha" data-sitekey="6Lf5EwwUAAAAAEddev4kBP7COg1RHlQWsI81uWdt"></div>
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

export default SigninPage;
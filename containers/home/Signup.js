import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Signup extends Component {

	constructor(props){
		super(props)
		this.state={
			username:"",
			email:"",
			password:"",
			comfirmPassword:""
		}
		this.isValid= false;
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({ [e.target.name]: e.target.value})

	}

	onSubmit(e){
		e.preventDefault();
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
			}
		}

	    return (
			<div className="single-page-wrapper singup">
	        	<div className="single-page-content singup-inner">
		    		<form>
		    			<h1>Join our community</h1>
		    			<TextField 
		    			hintText="User Name"
		    			value={this.state.username}
		    			onChange={this.onChange}
		    			type="text"
		    			name="username"
		    			inputStyle={style.input}
		    			hintStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
		    			/><br />
						<TextField 
		    			hintText="E-mail"
		    			value={this.state.email}
		    			onChange={this.onChange}
		    			type="text"
		    			name="email"
		    			inputStyle={style.input}
		    			hintStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
		    			/><br />
						<TextField 
		    			hintText="Password"
		    			value={this.state.password}
		    			onChange={this.onChange}
		    			type="password"
		    			name="password"
		    			inputStyle={style.input}
		    			hintStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
		    			/><br />
						<TextField 
		    			hintText="Confirm password"
		    			value={this.state.confirmPassword}
		    			onChange={this.onChange}
		    			type="password"
		    			name="confirmPassword"
		    			inputStyle={style.input}
		    			hintStyle={style.hint} 
		    			underlineFocusStyle={style.underlineFocus}
		    			/><br />

		    			<RaisedButton 
		    			onClick={this.onSubmit} 
		    			label="Sign Up"
		    			primary={true} />
		    		</form>
	        	</div>
	    	</div>
	    )
	  }
	}

export default Signup
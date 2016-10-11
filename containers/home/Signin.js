import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Signin extends Component {
	constructor(props){
		super(props)
		this.state={
			email:"",
			password:""
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e){
		this.setState({ [e.target.name]: e.target.value})
	}

	onSubmit(e){
		e.preventDefault();
		console.log(this.state)
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
			<div className="single-page-wrapper signin">
	        	<div className="single-page-content signin-inner">
		    		<form onSubmit={this.onSubmit} >
		    			<h1>Sign in</h1>
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

		    			<RaisedButton 
		    			onClick={this.onSubmit} 
		    			label="Sign In"
		    			secondary={true} />
		    		</form>
	        	</div>
	    	</div>
	    )
	  }
	}
export default Signin
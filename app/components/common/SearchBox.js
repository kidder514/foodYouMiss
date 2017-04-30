import React, {Component} from 'react';
import TextField from '../../uicomponent/form/TextField';
import SingleSelection from '../../uicomponent/form/SingleSelection';
import OptionItem from '../../uicomponent/form/OptionItem';
import IconButton from '../../uicomponent/button/IconButton'
import Gautocomplete from "../../helpers/GoogleAutocomplete"

class SearchBox extends Component {

	constructor(props){
		super(props);

		this.state = {
			isValid:false,
			keyword: "",
			errorKeyword:"",
			location:"",
			errorLocation:"",
			coordinate:"",
			tag:"",
			errorTag:"",
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.autocompleteOnChange = this.autocompleteOnChange.bind(this);
		this.handleLocaltion = this.handleLocaltion.bind(this);
		this.validateData = this.validateData.bind(this);
	}

	onChange(e){
		this.setState({[e.target.name]: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
	}

	autocompleteOnChange(e){
		if(this.location != "" && e.target.value != "" ){
			this.setState({location:"",coordinate:""},() => {this.validateSubmitButton()});
		}
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

	validateData(){
		let state_cache = {};
	}

 	render() {

		let style={
			hint:{
				color: "rgba(255, 255, 255, 0.6)"
			},
			underlineFocus:{
		        borderColor: "#fff",
			},
			error:{
				color: "#fff",
			},menuStyle:{
				color: "#000"
			},
		};

	    return (
	    	<div className="row"> 		
				<div className="search-box row" >
	    			<Gautocomplete
	    				className="col-xs-6"
	    				placeholder="Search for location..."
	    				handleLocaltion={this.handleLocaltion} 
	    				autocompleteOnChange={this.autocompleteOnChange}
	    			/>
		    		<TextField 
		    			id="id"
		    			className="col-xs-6"
		    			value={this.state.keyword}
		    			onChange={this.onChange}
		    			name="keyword"
		    			errorText={this.state.errorKeyword}
		    			placeholder="Search keyword"
			    	/>
			    </div>

			    <div className="row">
		    		<TextField 
		    			id="id"
		    			className="col-xs-6"
		    			value={this.state.tag}
		    			onChange={this.onChange}
		    			name="tag"
		    			errorText={this.state.errorTag}
		    			placeholder="Search Tag"
			    	/>
	                <div className="col-xs-2">
			            <IconButton
			            	style={style.button}
			            	iconStyle={style.icon} 
			            	onClick={this.validateData}
			            	icon="search"
			            />
		            </div>
    			</div>
	    	</div>
	    	
	    );
 	}
}


export default SearchBox;

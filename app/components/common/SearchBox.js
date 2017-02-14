import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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
			ratio:"",
			errorRatio:""
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

		console.log(this.state);
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
	    	<div className="search-box" >
    			<Gautocomplete 
    				handleLocaltion={this.handleLocaltion} 
    				autocompleteOnChange={this.autocompleteOnChange}
    			/>
	    		<TextField 
	    			value={this.state.keyword}
	    			onChange={this.onChange}
	    			type="text"
	    			name="keyword"
	    			errorText={this.state.errorKeyword}
	    			errorStyle={style.error}
	    			floatingLabelText="Search keyword"
	    			floatingLabelStyle={style.hint} 
	    			underlineFocusStyle={style.underlineFocus}
		    	/>
                <SelectField
                	value={this.state.ratio}
                	onChange={this.onChange}
                	name="ratio"
	    			floatingLabelText="Ratio"
	    			// floatingLableStyle={style.hint}
	    			// menuItemStyle={style.menuStyle}
                >
                	<MenuItem value={1} primaryText="1 KM"/>
                	<MenuItem value={2} primaryText="2 KM" />
                	<MenuItem value={5} primaryText="5 KM " />
                	<MenuItem value={10} primaryText="10 KM" />
                	<MenuItem value={15} primaryText="15 KM" />
                </SelectField>
	            <IconButton style={style.button} iconStyle={style.icon} onClick={this.validateData}>
                    <Search className="menu-icon" color={"#fff"}/>
                </IconButton>

	    	</div>
	    );
 	}
}


export default SearchBox;

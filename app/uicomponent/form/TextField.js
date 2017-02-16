import React, {Component} from 'react';

class TextField extends Component {

	constructor(props){
		super(props);
	}

 	render() {
 		var props = this.props;
	    return (
	    	<div className="textfield-wrapper" >
	    		<input
	    			id={props.id ? props.id : ""}
	    		    className={props.className ? props.className : "textfield-input form-control " + props.className}
	    		    ref={this.ref ? this.ref : ""}
	    		    style={props.style ? props.style : {}}
	    			type={props.type ? props.type : ""}
	    			name={props.name ? props.name : ""}
	    			width={props.width ? props.width : ""}
	    			onChange={props.onChange ? props.onChange : ""}
	    			onFocus={props.onFocus ? props.onFocus : ""}
	    			placeholder={props.placeHolder ? props.placeHolder : ""}
	    			value={props.value ? props.value : ""}
	    		/>
	    		<p className="textfield-error-text">{props.errorText ? props.errorText : ""}</p>
	    	</div>
	    );
 	}
}


export default TextField;

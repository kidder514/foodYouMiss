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
	    			id={props.id !== undefined ? props.id : ""}
	    		    className={props.className !== undefined ? "textfield-input form-control " + props.className : "textfield-input form-control"}
	    		    ref={this.ref !== undefined ? this.ref : ""}
	    			type={props.type !== undefined ? props.type : ""}
	    			name={props.name !== undefined ? props.name : ""}
	    			onChange={props.onChange !== undefined ? props.onChange : ""}
	    			onFocus={props.onFocus !== undefined ? props.onFocus : ""}
	    			placeholder={props.placeholder !== undefined ? props.placeholder : ""}
	    			value={props.value !== undefined ? props.value : ""}
	    		/>
				<p className="textfield-error-text">{this.props.errorText !== undefined ? this.props.errorText : ""}</p>
	    	</div>
	    );
 	}
}


export default TextField;

import React, {Component} from 'react';

class IconButton extends Component {

 	render() {
 		var props = this.props;
	    return (
    		<button type="button" className="btn btn-default icon-button" style={props.style} onClick={props.onClick}>
				<i className="material-icons" style={props.iconStyle}>{props.icon}</i>
			</button>
	    );
 	}
}


export default IconButton;

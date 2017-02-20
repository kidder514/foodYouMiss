import React, {Component} from 'react';

class IconButton extends Component {

 	render() {
 		var props = this.props;
	    return (
    		<button type="button" className="btn btn-default btn-block" onClick={props.onClick}>
				<i className="material-icons">{props.icon}</i>
			</button>
	    );
 	}
}

export default IconButton;

import React, {Component} from 'react';

class IconButton extends Component {

 	render() {
 		var props = this.props;
 		var text;
 		
		if(props.text != undefined)
		{
			text = <span>{props.text}</span>;
		}
		else
		{
			text = "";
		}

	    return (
    		<button type="button" className="btn btn-default btn-block" onClick={props.onClick}>
				<i className="material-icons">{props.icon}</i>
				{text}
			</button>
	    );
 	}
}

export default IconButton;

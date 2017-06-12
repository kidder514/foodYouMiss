import React, {Component} from 'react';

class Avatar extends Component {

 	render() {
 		var props = this.props;
	    return (
    		<img src={props.src} alt={props.alt} className="avatar" style={props.style} onClick={props.onClick} />
	    );
 	}
}

export default Avatar;

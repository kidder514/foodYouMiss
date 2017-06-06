import React, {Component} from 'react';

class AuthorPage extends Component {

  	render(){
	    return (
	        <div className="wrapper">
	            Author Page {this.props.params.authorid}
	        </div>
	    )
  	}
}

export default AuthorPage;
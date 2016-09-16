import React, { Component } from 'react'

class SinglePost extends Component {

  render() {
    return (
    	<div className="single-post">
            {this.props.userPhoto}

    	</div>
    )
  }
}

export default SinglePost
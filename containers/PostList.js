import React, { Component } from 'react'
import SinglePost from "./SinglePost"

class PostList extends Component {

  render() {
    return (
    	<div className="post-list">
    	postList
          {this.props.postList.map(post => <SinglePost post={post} />)
          }
    	</div>
    )
  }
}

export default PostList
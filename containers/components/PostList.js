import React, { Component } from 'react'
import SinglePost from "../singlepost/SinglePost"
import List from 'material-ui/List/List'

class PostList extends Component {

  render() {
    return (
    	<List className="post-list">
          {
          	this.props.postList.map(post => <SinglePost key={post.postId} post={post} />)
          }
    	</List>
    )
  }
}

export default PostList
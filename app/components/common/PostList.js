import React, {Component} from 'react';
import List from 'material-ui/List/List';
import SinglePost from "./SinglePost";

class PostList extends Component {

	render(){
	    return (
	    	<List className="post-list">
	          	{
	          	this.props.data.map(post => <SinglePost key={post.postId} post={post} />)
	          	}
	    	</List>
	    )
	};
}

export default PostList;

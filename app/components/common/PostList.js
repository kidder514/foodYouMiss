import React, {Component} from 'react';
import SinglePost from "../../containers/common/SinglePost";

class PostList extends Component {

	render(){
	    return (
	    	<div className="container-fluid">
	          	{
	          	this.props.data.map(post => <SinglePost key={post.postId} post={post} />)
	          	}
	    	</div>
	    )
	};
}

export default PostList;

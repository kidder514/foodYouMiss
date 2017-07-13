import React, {Component} from 'react';
import SinglePost from "../../containers/common/SinglePost";

class PostList extends Component {

	render(){
	    return (
	    	<div className="container-fluid">
	    		<div className="row">
		          	{
		          	this.props.data.map(post => <SinglePost key={"dish" + post.postId} post={post} />)
		          	}
	          	</div>
	    	</div>
	    )
	};
}

export default PostList;

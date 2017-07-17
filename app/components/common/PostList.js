import React, {Component} from 'react';
import SinglePostItem from "./SinglePostItem";

class PostList extends Component {

	render(){
	    return (
	    	<div className="container-fluid">
	    		<div className="row">
		          	{
		          	this.props.data.map(
		          		post => <SinglePostItem 
		          			key={"dish" + post.postId} 
		          			post={post} 
		          			onMouseEnter={this.props.onMouseEnter}
		          			onMouseLeave={this.props.onMouseLeave}
		          			/>
		          		)
		          	}
	          	</div>
	    	</div>
	    )
	};
}

export default PostList;

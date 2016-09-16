import React, { Component } from 'react'
import Link from "react-router"

class SinglePost extends Component {
	var postInfo = this.props.postInfo;
	render() {
	    return (
	    	<div className="single-post">
	            <div className="left-section">
	            	<Link to="/author/:{postInfo.authorId}"><img src={postInfo.authorImg} alt="{postInfo.authorName}"/></Link>
	            	<p>{postInfo.authorImg}</p>
	            </div>
	            <div className="right-section">
	            	<h3>{postInfo.title}</h3>
	            	<p>{postInfo.desc}</p>
	            	<p className="post-location">{postInfo.location}</p>
	            	<span>:expand</span>
	            	<div className="others-section">
	            		<a onClick={postInfo.onClick}>like:{postInfo.likes}</a>
	            		<a href="">comment:{postInfo.comments}</a>
	            		<a href="">Share</a>
	            		<a href=""></a>
	            		<a href=""></a>
	            		<a href=""></a>
	            	</div>
	            </div>

	    	</div>
	    )
	}
}

export default SinglePost
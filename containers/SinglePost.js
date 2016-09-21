import React, { Component } from 'react'
import { Link } from "react-router"

class SinglePost extends Component {


	generateGallery(imgs) {
		return (<div></div>)
	}

	toggleLike(){
		return ;
	}

	render() {

	const postInfo = this.props.postInfo;
	    return (
	    	<div className="single-post">
	            <div className="left-section">
	            	<Link to="/author/:{postInfo.authorId}"><img src={postInfo.authorImg} alt="{postInfo.authorName}"/></Link>
	            	<Link to="/author/:{postInfo.authorId}"><p>{postInfo.authorImg}</p></Link>
	            </div>
	            <div className="right-section">
	            	<Link to="/post/:{postInfo.postId}"><h3>{postInfo.title}</h3></Link>
	            	<Link to="/post/:{postInfo.postId}"><p>{postInfo.desc}</p></Link>
	            	<section className="image_gallery">
	            		{generateGallery(postInfo.imgUrls)}
	            	</section>
	            	<Link to="/map/:{postInfo.coordinate}" className="post-location" >{postInfo.location}</Link>
	            	<span>:expand</span>
	            	<div className="others-section">
	            		<a onClick={toggleLike()}>like:{postInfo.likes}</a>
	            		<Link to="/post/:{postInfo.postId}/comment">comment:{postInfo.comments}</Link>
	            		<Link to="/post/:{postInfo.postId}/share">Share</Link>
	            		<a href="">Serve:{postInfo.portions}</a>
	            		<Link to="/post/:{postInfo.postId}/buy">Buy</Link>
	            	</div>
	            </div>

	    	</div>
	    )
	}
}

export default SinglePost
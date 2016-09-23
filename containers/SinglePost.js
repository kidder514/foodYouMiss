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

	const post = this.props.post;
	    return (
	    	<div className="single-post">
	            <div className="left-section">
	            	<Link to="/author/:{post.authorId}"><img src={post.authorImg} alt="{post.authorName}"/></Link>
	            	<Link to="/author/:{post.authorId}"><p>{post.authorImg}</p></Link>
	            </div>
	            <div className="right-section">
	            	<Link to="/post/:{post.postId}"><h3>{post.title}</h3></Link>
	            	<Link to="/post/:{post.postId}"><p>{post.desc}</p></Link>
	            	<section className="image_gallery">
	            		{generateGallery(post.imgUrls)}
	            	</section>
	            	<Link to="/map/:{post.coordinate}" className="post-location" >{post.location}</Link>
	            	<span>:expand</span>
	            	<div className="others-section">
	            		<a onClick={toggleLike()}>like:{post.likes.length}</a>
	            		<Link to="/post/:{post.postId}/comment">comment:{post.comments.length}</Link>
	            		<Link to="/post/:{post.postId}/share">Share</Link>
	            		<a href="">Serve:{post.portions}</a>
	            		<Link to="/post/:{post.postId}/buy">Buy</Link>
	            	</div>
	            </div>

	    	</div>
	    )
	}
}

export default SinglePost
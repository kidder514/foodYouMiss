import React, { Component } from 'react'
import { Link } from "react-router"

class SinglePost extends Component {

	generateGallery(imgs) {
	const post = this.props.post;

		var imgNodes = [];
		if(imgs.length > 4){
			//only load the first nine even if the imgs.length exceed the maximal length
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i] != null)
					imgNodes.push(<div key={"post"+post.postId+"img"+ i} className="nine-layout"><img src={imgs[i]} /></div>);
			}
		}else if(imgs.length >= 2 && imgs.length <= 4){
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i] != null)
					imgNodes.push(<div key={"post"+post.postId+"img"+ i} className="four-layout"><img src={imgs[i]} /></div>);
			}
		}else{
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i] != null)
					imgNodes.push(<div key={"post"+post.postId+"img"+ i} className="one-layout"><img src={imgs[i]} /></div>);
			}
		}

		return (
			imgNodes
			);
	}

	toggleLike() {
		return ;
	}

	render() {
	const post = this.props.post;

	    return (
	    	<div className="single-post">
	            <div className="left-section">
	            	<Link to={"/author/:" + post.authorId} ><img src={post.authorImg} alt={post.authorName}/></Link>
	            	<Link to={"/author/:image_galleryimage_gallery" + post.authorId} ><p>{post.authorName}</p></Link>
	            </div>
	            <div className="right-section">
	            	<Link to={"/post/:" + post.postId}><h3>{post.title}</h3></Link>
	            	<p>{post.postDescription}</p>
	            	<section className="image_gallery">
	            		{ this.generateGallery(post.postImgUrls)}
	            	</section>
	            	<Link to={"/map/:" + post.postCoordinate.latitude + "+" + post.postCoordinate.longitude} className="post-location" >{post.postLocation}</Link>
	            	<span>:expand</span>
	            	<div className="others-section">
	            		<a onClick={this.toggleLike()}>like:{post.postLikes.length}</a>
	            		<Link to={"/post/:" + post.postId + "/comment"}>comment:{post.postComments.length}</Link>
	            		<Link to={"/post/:" + post.postId + "/share"}>Share</Link>
	            		<a href="">Serve:{post.postPortions}</a>
	            		<Link to={"/post/:" + post.postId + "/buy"}>Buy</Link>
	            	</div>
	            </div>

	    	</div>
	    )
	}
}

export default SinglePost
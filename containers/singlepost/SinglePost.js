import React, { Component } from 'react'
import { Link } from "react-router"
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'

class SinglePost extends Component {
	constructor(props){
		super(props);
		this.handleImageClick = this.handleImageClick.bind(this)
		this.handleImageResize = this.handleImageResize.bind(this)
	}

	handleImageClick(){
		window.alert("image clicked")
	}

	handleImageResize(){
		window.alert("image resized")
	}

	toggleLike() {
		return ;
	}

	generateGallery(imgs) {
	const post = this.props.post;


		var imgNodes = [];
		if(imgs.length > 4){
			//only load the first nine even if the imgs.length exceed the maximal length
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i] != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onTouchTap={this.handleImageClick} 
						onResize={this.handleImageResize} 
						className="nine-layout" 
						style={{backgroundImage:'url(' + imgs[i] + ')'}}></div>);
			}
		}else if(imgs.length >= 2 && imgs.length <= 4){
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i] != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onTouchTap={this.handleImageClick} 
						onResize={this.handleImageResize} 
						className="four-layout"
						style={{backgroundImage:'url(' + imgs[i] + ')'}}></div>);
			}
		}else{
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i] != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onTouchTap={this.handleImageClick} 
						onResize={this.handleImageResize} 
						className="one-layout"
						style={{backgroundImage:'url(' + imgs[i] + ')'}}></div>);
			}
		}

		return (
			imgNodes
			);
	}

	render() {
	const post = this.props.post;

	    return (
	    	<ListItem disabled={true} leftAvatar={
	            <div className="left-section">
	            	<Link to={"/author/:" + post.authorId} ><Avatar src={post.authorImg} alt={post.authorName}/></Link>
	            	<Link to={"/author/:" + post.authorId} className="author-name">{post.authorName}</Link>
	            </div>
	    	} className="single-post">
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

	    	</ListItem>
	    )
	}
}

export default SinglePost
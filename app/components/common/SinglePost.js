import React, { Component } from 'react';
import { Link } from "react-router";
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

class SinglePost extends Component {
	constructor(props){
		super(props);

		this.handleImageClick = this.handleImageClick.bind(this);
		this.handleImageResize = this.handleImageResize.bind(this);
	}

	handleImageClick(){
		window.alert("image clicked");
	}

	handleImageResize(){
		window.alert("image resized");
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
						className="nine-layout single-image" 
						style={{backgroundImage:'url(' + imgs[i] + ')'}}></div>);
			}
		}else if(imgs.length >= 2 && imgs.length <= 4){
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i] != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onTouchTap={this.handleImageClick}
						className="four-layout single-image"
						style={{backgroundImage:'url(' + imgs[i] + ')'}}></div>);
			}
		}else{
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i] != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onTouchTap={this.handleImageClick} 
						className="one-layout single-image"
						style={{backgroundImage:'url(' + imgs[i] + ')'}}></div>);
			}
		}

		return imgNodes;
	}

	render() {

		const post = this.props.post;

		let style={
			singlePost:{
				paddingTop:0,
				clear:"both",
			},
			leftSection:{
				top:0,
			}
		};

		if(post){
		    return (
		    	<ListItem disabled={true} leftAvatar={
		            <div className="left-section" style={style.leftSection}>
		            	<Link to={"/author/:" + post.authorId} ><Avatar src={post.authorImg} alt={post.authorName}/></Link>
		            </div>
		    	} className="single-post" style={style.singlePost}>
		            <div className="right-section">
		            	<Link to={"/post/:" + post.postId}><h3>{post.title}</h3></Link>
		            	<p>{post.postDescription}</p>
		            	<section className="image_gallery clearfix">
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
		    );
		}else{
			return ;
		}
	}
}

export default SinglePost;

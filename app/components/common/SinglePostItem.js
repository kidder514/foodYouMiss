import React, { Component } from 'react';
import { Link } from "react-router";
import IconButton from "../../uicomponent/button/IconButton"
import Avatar from "../../uicomponent/button/Avatar"

class SinglePostItem extends Component {
	constructor(props){
		super(props);
		this.handleImageClick = this.handleImageClick.bind(this);
		this.expandOthers = this.expandOthers.bind(this);
	}

	handleImageClick(imgs,imgIndex){
		this.props.openImgLayer(imgs,imgIndex);
	}

	expandOthers(othersSection){
		let display = othersSection.style.display;
		othersSection.style.display = (display == "block") ? "none" : "block";
	}

	toggleLike() {
		return ;
	}

	generateContent(){

		const post = this.props.post;
				
		return (
			<article 
				disabled={true} 
				className="col-sm-4 col-xs-6"  
				onMouseEnter={() => {this.props.onMouseEnter(post.authorId)}}
				onMouseLeave={() => {this.props.onMouseLeave(post.authorId)}}
				>

	            <section className="clearfix image-wrapper">
	            	<Link to={"/dish/" + post.postId}>
	            		<img src={this.props.post.postImgUrls[0].thumbnail} />
	            	</Link>
	            </section>
	            <div className="short-summary">
					<div className="container-fluid">
		            	<div className="row">
							<div className="col-xs-3 col-sm-3">
				            	<Link to={"/author/" + post.authorId} >
				            		<Avatar src={post.authorImg} alt={post.authorName}/>
				            	</Link>
				            </div>
				            <div className="col-xs-9 col-sm-9">
				            	<strong>
				            		{post.authorName}
				            	</strong>
				            </div>
		            	</div>
		            </div>
	            	<Link to={"/dish/" + post.postId}><h3>{post.postTitle}</h3></Link>
	            	<div>rating: {post.postRating}({post.ratingNumber})</div>
	            	<div className="clearfix">
	            		<p>From ${post.postPrice} | ({post.postPortions}) portions left</p>
	            	</div>
	            	<div className="container-fluid">
	            		<div className="row">
		            		<a className="col-sm-4" onClick={this.toggleLike()}> 
								<IconButton icon={"thumb_up"} /><span>{post.postLikes.length}</span>
		            		</a>
		            		<Link className="col-sm-4" to={"inbox/" + post.authorId}>
								<IconButton icon={"forum"} />
		            		</Link>
	            		</div>
	            	</div>

	            	<div>
	            		{/* TODO: add feature to the following buttons, after you have done*/ }
	            		<span>{post.category} | {post.region} | {post.allergen}</span>
	            	</div>
	            </div>
	    	</article>
    	);
	}

	render() {
		if(this.props.post){
		    return this.generateContent();
		}else{
			return (<div>unable to obtain current post data.</div>);
		}
	}
}

export default SinglePostItem;

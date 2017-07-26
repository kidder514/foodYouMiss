import React, { Component } from 'react';
import { Link } from "react-router";
import IconButton from "../../uicomponent/button/IconButton"
import Avatar from "../../uicomponent/button/Avatar"
import { drawStars } from "../../helpers/DrawStars"

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
		var stars = drawStars(post.postRating, post.ratingNumber);
		
		return (
			<article 
				className="col-xs-12 col-sm-6 col-lg-4 dish-list-item"  
				onMouseEnter={this.props.onMouseEnter ? () => {this.props.onMouseEnter(post.authorId)} : false}
				onMouseLeave={this.props.onMouseLeave ? () => {this.props.onMouseLeave(post.authorId)} : false}
				>
				<div className="dish-padding-layer">
		            <section className="clearfix image-wrapper">
		            	<Link to={"/dish/" + post.postId} >
		            		<div className="dish-img" style={
		            			{backgroundImage: 'url(' + this.props.post.postImgUrls[0].thumbnail + ')',}
		            		}>
		            		</div>
		            	</Link>
			            <div className="dish-like-icon">
		            		<a onClick={this.toggleLike()}> 
								<IconButton icon={"favorite_border"} />
		            		</a>
			            </div>
						<div className="dish-cook-info">
			            	<Link to={"/author/" + post.authorId} className="dish-cook-link img-circle">
			            		<Avatar src={post.authorImg} alt={post.authorName} />
			            	</Link>
				            <span className="dish-line dish-cook-name">
			            		{post.authorName}			            	
				            </span>
			            </div>
		            </section>
		            <div className="short-summary">
		            	<Link className="dish-title dish-line clearfix" to={"/dish/" + post.postId}>
							{post.postTitle}
		            	</Link>
		            	<div className="dish-price dish-line clearfix">
		            		From ${post.postPrice} | ({post.postPortions}) portions left
		            	</div>
		            	<div className="rating-section clearfix">
		            		{stars}
		            		<span className="dish-rating">{"  " + (post.ratingNumber? post.ratingNumber : " 0 " )+ " reviews"}</span>
		            	</div>
		            	<div className="dish-meta clearfix">
		            		<span>{post.category} | {post.region} | {post.allergen}</span>
		            	</div>
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

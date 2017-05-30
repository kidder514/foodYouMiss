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
			<article disabled={true} className="col-sm-4 col-xs-6" >
	            <section className="clearfix image-wrapper">
	            	<img src={this.props.post.postImgUrls[0].thumbnail} />
	            </section>
	            <div className="short-summary">
					<div className="container-fluid">
		            	<div className="row">
							<div className="col-xs-3 col-sm-3">
				            	<Link to={"/author/:" + post.authorId} >
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
	            	<Link to={"/post/:" + post.postId}><h3>{post.title}</h3></Link>
	            	<div className="clearfix">
		            	<div className="more-section">
			            	<div className="others-section" id="others-section" ref={(div) => { this.othersSection = div; }}>
			            		<a className="more-icon" onClick={this.toggleLike()}> 
									<IconButton icon={"thumb_up"} text={post.postLikes.length}/>
			            		</a>
			            		<Link className="more-icon" to={"/post/:" + post.postId + "/comment"}>
									<IconButton icon={"comment"} text={post.postComments.length}/>
			            		</Link>
			            		<Link className="more-icon" to={"/post/:" + post.postId + "/share"}>
									<IconButton icon={"share"} />
			            		</Link>
			            		<Link className="more-icon" to={"chat/:" + post.authorId}>
									<IconButton icon={"forum"} />
			            		</Link>
				            	<Link className="more-icon" to={"/map/:" + post.postCoordinate.latitude + "+" + post.postCoordinate.longitude}>
									<IconButton icon={"location_on"} />
				            	</Link>
			            	</div>
			            	<div className="expand-button">
								<IconButton onClick={() => this.expandOthers(this.othersSection)} icon={"morevert"} />
			            	</div>
		            	</div>
	            		<p>${post.postPrice}/ per serve | ({post.postPortions}) portions left</p>
	            	</div>


	            	<div className="purchase-buttons">
	            		<button label="add to list" className="primary btn btn-default" >add to list</button>
	            		<button label="Order" className="primary btn btn-default" >Order</button>
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

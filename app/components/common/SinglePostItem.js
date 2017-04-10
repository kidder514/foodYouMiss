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

	generateGallery(imgs) {
		const post = this.props.post;
		var imgNodes = [];

		if(imgs.length > 4){
			//only load the first nine even if the imgs.length exceed the maximal length
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i].thumbnail != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onClick={() => this.handleImageClick(imgs,i)}
						className="nine-layout single-image col-xs-4" 
						style={{backgroundImage:'url(' + imgs[i].thumbnail + ')'}}></div>);
			}
		}else if(imgs.length >= 2 && imgs.length <= 4){
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i].thumbnail != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onClick={() => this.handleImageClick(imgs,i)}
						className="four-layout single-image col-xs-6"
						style={{backgroundImage:'url(' + imgs[i].thumbnail + ')'}}></div>);
			}
		}else{
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i].thumbnail != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onClick={() => this.handleImageClick(imgs,i)}
						className="one-layout single-image col-xs-12"
						style={{backgroundImage:'url(' + imgs[i].thumbnail + ')'}}></div>);
			}
		}
		return imgNodes;
	}

	generateContent(){

		const post = this.props.post;
				
		return (
			<article disabled={true} className="single-post row" >
				<div className="col-xs-1 avatar-wrapper">
	            	<Link to={"/author/:" + post.authorId} >
	            		<Avatar src={post.authorImg} alt={post.authorName}/>
	            	</Link>
	            </div>
	            <div className="clearfix col-xs-11">
	            	<Link to={"/post/:" + post.postId}><h3>{post.title}</h3></Link>
	            	<p>{post.postDescription}</p>
	            	<section className="image-gallery clearfix container-fluid">
	            		{ this.generateGallery(post.postImgUrls) }
	            	</section>
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
			            	</div>
			            	<div className="expand-button">
								<IconButton onClick={() => this.expandOthers(this.othersSection)} icon={"morevert"} />
			            	</div>
		            	</div>
	            		<p>${post.postPrice}/ per serve | ({post.postPortions}) portions left</p>
	            	</div>
	            	<Link to={"/map/:" + post.postCoordinate.latitude + "+" + post.postCoordinate.longitude} className="clearfix" >
	            		<div className="post-location">
							<IconButton icon={"location_on"} />
	            		</div>
	            		<p>{post.postLocation}</p>
	            	</Link>
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

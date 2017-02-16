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
						className="nine-layout single-image" 
						style={{backgroundImage:'url(' + imgs[i].thumbnail + ')'}}></div>);
			}
		}else if(imgs.length >= 2 && imgs.length <= 4){
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i].thumbnail != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onClick={() => this.handleImageClick(imgs,i)}
						className="four-layout single-image"
						style={{backgroundImage:'url(' + imgs[i].thumbnail + ')'}}></div>);
			}
		}else{
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i].thumbnail != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onClick={() => this.handleImageClick(imgs,i)}
						className="one-layout single-image"
						style={{backgroundImage:'url(' + imgs[i].thumbnail + ')'}}></div>);
			}
		}

		return imgNodes;
	}

	generateContent(){

		const post = this.props.post;

		let style={
			singlePost:{
				paddingTop:0,
				clear:"both"
			},
			leftSection:{
				top:26,
			},
			icon : {
                height: 20,
                width: 20,
            },
            iconwrapper : {
                height: 40,
                width: 40,
            },
            button : {
            	margin: 6
            },
            button:{
            	minWidth:"auto",
            	height:40,
            	width:40
            }
		};
				
		return (
			<article disabled={true} className="single-post" style={style.singlePost}>
				<div className="left-section" style={style.leftSection}>
	            	<Link to={"/author/:" + post.authorId} ><Avatar src={post.authorImg} alt={post.authorName}/></Link>
	            </div>
	            <div className="right-section clearfix">
	            	<Link to={"/post/:" + post.postId}><h3>{post.title}</h3></Link>
	            	<p>{post.postDescription}</p>
	            	<section className="image-gallery clearfix">
	            		{ this.generateGallery(post.postImgUrls) }
	            	</section>
	            	<div>
		            	<div className="more-section">
			            	<div className="others-section" id="others-section" ref={(div) => { this.othersSection = div; }}>
			            		<a className="more-icon" onClick={this.toggleLike()}> 
									<IconButton  style={style.Button} icon={"thumbup"} iconStyle={style.icon} />
			            			{post.postLikes.length}
			            		</a>
			            		<Link className="more-icon" to={"/post/:" + post.postId + "/comment"}>
									<IconButton style={style.Button} icon={"comment"} iconStyle={style.icon} />
			            			{post.postComments.length}
			            		</Link>
			            		<Link className="more-icon" to={"/post/:" + post.postId + "/share"}>
									<IconButton style={style.Button} icon={"share"} iconStyle={style.icon} />
			            		</Link>
			            		<Link className="more-icon" to={"chat/:" + post.authorId}>
									<IconButton style={style.Button} icon={"forum"} iconStyle={style.icon} />
			            		</Link>
			            	</div>
			            	<div className="expand-button">
								<IconButton style={style.Button} onClick={() => this.expandOthers(this.othersSection)} icon={"morevert"} iconStyle={style.icon}/>
			            	</div>
		            	</div>
	            		<p>${post.postPrice}/ per serve | ({post.postPortions}) portions left</p>
	            	</div>
	            	<Link to={"/map/:" + post.postCoordinate.latitude + "+" + post.postCoordinate.longitude} className="post-location clearfix" >
						<IconButton style={style.Button} icon={"communicationLocationOn"} iconStyle={style.icon} />
	            		{post.postLocation}
	            	</Link>
	            	<div className="purchase-buttons">
	            		<button label="add to list" className="primary btn btn-default" style={style.button}>add to list<button/>
	            		<button label="Order" className="primary btn btn-default" style={style.button}/>Order</button>
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

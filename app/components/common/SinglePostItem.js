import React, { Component } from 'react';
import { Link } from "react-router";
import RaisedButton from 'material-ui/RaisedButton';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import CommunicationLocationOn from 'material-ui/svg-icons/communication/location-on';
import Forum from 'material-ui/svg-icons/communication/forum';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import Comment from 'material-ui/svg-icons/Communication/comment';
import Share from 'material-ui/svg-icons/Social/share';



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
						onTouchTap={() => this.handleImageClick(imgs,i)}
						className="nine-layout single-image" 
						style={{backgroundImage:'url(' + imgs[i].thumbnail + ')'}}></div>);
			}
		}else if(imgs.length >= 2 && imgs.length <= 4){
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i].thumbnail != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onTouchTap={() => this.handleImageClick(imgs,i)}
						className="four-layout single-image"
						style={{backgroundImage:'url(' + imgs[i].thumbnail + ')'}}></div>);
			}
		}else{
			for(let i = 0; i < imgs.length; i++){
				if( imgs[i].thumbnail != null)
					imgNodes.push(<div 
						key={"post"+post.postId+"img"+ i} 
						onTouchTap={() => this.handleImageClick(imgs,i)}
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
            flatButton:{
            	minWidth:"auto",
            	height:40,
            	width:40
            }
		};
				
		return (
			<ListItem disabled={true} leftAvatar={
	            <div className="left-section" style={style.leftSection}>
	            	<Link to={"/author/:" + post.authorId} ><Avatar src={post.authorImg} alt={post.authorName}/></Link>
	            </div>
	    	} className="single-post" style={style.singlePost}>
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
									<FlatButton  style={style.flatButton} icon={<ThumbUp style={style.icon} color={style.icon}/>} />
			            			{post.postLikes.length}
			            		</a>
			            		<Link className="more-icon" to={"/post/:" + post.postId + "/comment"}>
									<FlatButton style={style.flatButton} icon={<Comment style={style.icon} color={style.icon}/>} />
			            			{post.postComments.length}
			            		</Link>
			            		<Link className="more-icon" to={"/post/:" + post.postId + "/share"}>
									<FlatButton style={style.flatButton} icon={<Share style={style.icon} color={style.icon}/>} />
			            		</Link>
			            		<Link className="more-icon" to={"chat/:" + post.authorId}>
									<FlatButton style={style.flatButton} icon={<Forum style={style.icon} color={style.icon}/>} />
			            		</Link>
			            	</div>
			            	<div className="expand-button">
								<FlatButton style={style.flatButton} icon={<MoreVert color={style.icon}/>} onTouchTap={ () => this.expandOthers(this.othersSection)}/>
			            	</div>
		            	</div>
	            		<p>${post.postPrice}/ per serve | ({post.postPortions}) portions left</p>
	            	</div>
	            	<Link to={"/map/:" + post.postCoordinate.latitude + "+" + post.postCoordinate.longitude} className="post-location clearfix" >
						<FlatButton style={style.flatButton}  icon={<CommunicationLocationOn style={style.icon} color={style.icon}/>} />
	            		{post.postLocation}
	            	</Link>
	            	<div className="purchase-buttons">
	            		<RaisedButton label="add to list" primary="true" style={style.button}/>
	            		<RaisedButton label="Order" primary="true" style={style.button}/>
	            	</div>


	            </div>
	    	</ListItem>
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

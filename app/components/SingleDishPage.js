import React, {Component} from 'react';
import SideBar from "../containers/common/SideBar"
import DeliveryFee from "../containers/DeliveryFee"
import {drawStars} from "../helpers/drawStars"

class SingleDishPage extends Component {
	constructor(props){
		super(props);
		this.expandDescription = this.expandDescription.bind(this);
		this.toggleDish = this.toggleDish.bind(this);

	}

	componentWillMount() {
		let query = "";
		let userState = this.props.userState;

  	    this.props.loadSingleDish(query);
  	}

  	expandDescription(){
  		this.expandButton.style.display = "none";
  		this.descriptionText.style.overflow = "unset";
  		this.descriptionText.style.height = "auto";
  	}

  	toggleDish(showDish){
  		this.tabDish.style.display = showDish ? "block" : "none";
  		this.tabReview.style.display = showDish ? "none" : "block";
  	}

  	render(){
	    return (
			<div className="container">
				<div className="row">
					<div className="col-sm-8">
						<div className="clearfix text-center">
							<div className="single-dish-meta-wrapper">
								<img className="img-circled" src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-128.png" alt="profile-avatar" />
								<div className="single-dish-meta clearfix">
									<h2>James' indian food</h2>		
									23 Viking Street, Campsie NSW
								</div>	
							</div>
							<hr />
							<div className="clearfix">
								<div className="single-dish-meta-icon">
									<i className="material-icons">mail_outline</i>Inbox
								</div>
								<div className="single-dish-meta-icon">
									<i className="material-icons">today</i>Available date
								</div>
								<div className="single-dish-stars">
									{drawStars(4.5, 30)}							
								</div>
								</div>
							<hr />
							<div className="single-dish-description-wrapper">
								<p ref={(el) => { this.descriptionText = el; }}  className="single-dish-description">unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
								<div ref={(el) => { this.expandButton = el; }} className="single-dish-description-expand" onClick={() => this.expandDescription()}>expand</div>
							</div>
						</div>
  						<div className="single-dish-content">
  							<div className="tab">
								<button type="button" onClick={() => this.toggleDish(true)}>Dish</button>
								<button type="button" onClick={() => this.toggleDish(false)}>Review</button>
  							</div>
  							<div className="tab-content">
  								<div className="tab-dish" ref={(el) => { this.tabDish = el; }}>
	  								<div className="row">
	  									<div className="col-sm-6">
	  										<img className="img-responsive" src="https://img1-au.foodbyus.com/rendered-assets/makers/184/product-hero-12976-184.4c01aa522189-400x400.jpeg" />
	  										<div className="row">
	  											<div className="col-sm-4">
	  												<img className="img-responsive" src="https://img1-au.foodbyus.com/rendered-assets/makers/184/product-hero-12976-184.4c01aa522189-400x400.jpeg" />
	  											</div>
												<div className="col-sm-4">
	  												<img className="img-responsive" src="https://img1-au.foodbyus.com/rendered-assets/makers/184/product-hero-12976-184.4c01aa522189-400x400.jpeg" />
	  											</div>
												<div className="col-sm-4">
	  												<img className="img-responsive" src="https://img1-au.foodbyus.com/rendered-assets/makers/184/product-hero-12976-184.4c01aa522189-400x400.jpeg" />
	  											</div>
	  										</div>
	  									</div>
	  									<div className="col-sm-6">
	  										<h1>big bowl of fried rice</h1>
	  										<hr />
	  											<div className="row clearfix">
	  												<div className="col-sm-6">
	  												1 serve( for 1 people)
	  												</div>
	  												<div className="col-sm-6">
	  												$10.6
														<button type="button">Order</button>
	  												</div>
	  											</div>
	  											<div className="row clearfix">
	  												<div className="col-sm-6">
	  												family pack (for 10 people)
	  												</div>
	  												<div className="col-sm-6">
	  												$56  
														<button type="button">Order</button>
	  												</div>
	  											</div>
	  										<hr />
	  										<p>order for now/ tomorrow/26th of Jun</p>
	  										<h4>Description</h4>
	  										<p>voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
	  										<p>Tags: BBQ, meal, delicous</p>
	  										<p>category: meal</p>
	  										<p>Allergens: Nuts free, Diary Free, Wheat Free</p>
	  										<p>Delivery Ratio: 5km</p>
	  										<p>Delivery Suburbs: Sydney, Hurstville, Auburn</p>
	  									</div>
	  								</div>
		  							<div className="row">
		  								<hr />
		  								<h1>Other food form James</h1>
		  								<p>the format and data of this section should be same as newby Page, here it is simplified</p>
		  								<div className="col-sm-4">
		  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
		  								</div>
		  								<div className="col-sm-4">
		  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
		  								</div>
		  								<div className="col-sm-4">
		  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
		  								</div>
		  							</div>
  								</div>
  								<div className="tab-review" ref={(el) => { this.tabReview = el; }}>
  									no review at the moment
  								</div>

  							</div>

  						</div>
					</div>
					<div className="col-sm-4">
						<DeliveryFee />
						<hr />
						<h1>Your order</h1>
						<h3>Anny's Kitchen</h3>
							<p>2 BBQ chicken $ 86</p>
							<p>family pack</p>
						<h3>James' Indian Food</h3>
							<p>1 fried rice $ 10.5</p>
							<p>single serve</p>
						<strong>Delivery: $39</strong><br />
						<strong>Total: $135.5</strong><br />
						<button>Order Now</button>
	                </div>
				</div>				
			</div>
	    )
  	}
}

export default SingleDishPage;

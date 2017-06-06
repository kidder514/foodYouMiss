import React, {Component} from 'react';
import SideBar from "../containers/common/SideBar"

class SingleDishPage extends Component {

	componentWillMount() {
		let query = "";
		let userStatus = this.props.userStatus;

  	    this.props.loadSingleDish(query);
  	}

  	render(){
	    return (
			<div className="container">
				<div className="row">
					<div className="col-sm-8">
						<div className="clearfix text-center">
							<img className="img-rounded" src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-128.png" alt="profile-avatar" />
							<h2>James' indian food</h2>
							<hr />
							<button type="button">Subscribe</button>
							<button type="button">Inbox</button>
							<button type="button">Location/delievery ratio</button>
							<button type="button">Available date</button>
							<span>average rating: 3.5</span>
							<p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
						</div>
  						<div className="single-dish-content">
  							<div ClassName="tab">
								<button type="button">Dish</button>
								<button type="button">Review</button>
								<button type="button">Location in Map</button>
  							</div>
  							<div ClassName="tab-content">
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
					</div>
					<div className="col-sm-4">
						<h1>Delievery Estimate</h1>
						<p>Enter your address to estimate your delivery fee</p>
						<label>unit</label><input type="text" /><br />
						<label>Address</label><input type="text" /><br />
						<button type="button">estimate</button>
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
import React, {Component} from 'react';

class CookPage extends Component {

  	render(){
	    return (
		<div className="container">
				<div className="row">
					<div className="col-sm-8">
						<div className="clearfix text-center">
							<img className="img-rounded" src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-circle-128.png" alt="profile-avatar" />
							<h2>James' indian food</h2>
							<hr />
							<button type="button">Inbox</button>
							<button type="button">Location/delievery ratio</button>
							<button type="button">Available date</button>
							<span>average rating: 3.5</span>
							<p>unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</p>
						</div>
  						<div className="single-dish-content">
  							<div className="row">
  								<hr />
  								<h1>All food form James</h1>
  								<p>the format and data of this section should be same as newby Page, here it is simplified</p>
  								<div className="col-sm-4">
  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
  									<h6>seafood fried rice</h6>
  								</div>
  								<div className="col-sm-4">
  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
  									<h6>seafood fried rice</h6>
  								</div>
  								<div className="col-sm-4">
  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
  									<h6>seafood fried rice</h6>
  								</div>
  								<div className="col-sm-4">
  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
  									<h6>seafood fried rice</h6>
  								</div>
  								<div className="col-sm-4">
  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
  									<h6>seafood fried rice</h6>
  								</div>
  								<div className="col-sm-4">
  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
  									<h6>seafood fried rice</h6>
  								</div>
  								<div className="col-sm-4">
  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
  									<h6>seafood fried rice</h6>
  								</div>
  								<div className="col-sm-4">
  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
  									<h6>seafood fried rice</h6>
  								</div>
  								<div className="col-sm-4">
  									<img className="img-responsive" src="https://www.takethemameal.com/files_images/store/items/meatloaf-and-mac-and-jack.jpg" />
  									<h6>seafood fried rice</h6>
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

export default CookPage;
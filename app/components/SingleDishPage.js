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
  						<div className="">
  							single page item {this.props.params.dishid}
  						</div>
					</div>
					<div className="col-sm-4">
						single page sidebar
	                </div>
				</div>				
			</div>
	    )
  	}
}

export default SingleDishPage;
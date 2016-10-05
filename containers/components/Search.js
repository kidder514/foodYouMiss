import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';

class Search extends Component {

  render() {
    return (
    	<div className="search">
        	<input type="text" />
        	<IconButton>
                <ActionSearch className="menu-icon" color={"#fff"}/>
            </IconButton>
    	</div>
    )
  }
}

export default Search
import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

class Search extends Component {

  render() {

    let style = {
        wrapper : {
            bottom : 9,
        },
        icon : {
            height: 30,
            width: 30,
        },
        button : {
            height: 60,
            width: 60,
        },
        input: {
            color: "#fff",
        },
        hint : {
            color: "#ef8667",
        },
        underline : {
            borderColor: "#ef8667",
        },
        underlineFocus : {
            borderColor: "#fff",
        }
    }

    return (
    	<div className="search">
            <IconButton iconStyle={style.icon} style={style.button} >
                <ActionSearch className="menu-icon" color={"#fff"}/>
            </IconButton>
            <TextField 
            style={style.wrapper}
            inputStyle={style.input}
            hintText="Search..." 
            hintStyle={style.hint} 
            underlineStyle={style.underline}
            underlineFocusStyle={style.underlineFocus}/>
    	</div>
    )
  }
}

export default Search
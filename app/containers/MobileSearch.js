import React, {Component} from 'react';
import {escape, trim} from "Validator";
import {connect} from "react-redux";
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

class MobileSearch extends Component {

    render() {

        let style = {
            wrapper : {
                bottom : 9,
                height: 60,
                width:"80%",
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
                marginTop:10,
                width:"100%",
            },
            hint : {
                color: "#ef8667",
                top: 31,
            },
            underline : {
                borderColor: "#ef8667",
            },
            underlineFocus : {
                borderColor: "#fff",
            }
        };

        return (
        	<div className="search">
                <form autoComplete="off" > 
                    <TextField 
                    style={style.wrapper}
                    inputStyle={style.input}
                    name="searchKeywords"
                    floatingLabelText="Search..."
                    floatingLabelStyle={style.hint}
                    underlineStyle={style.underline}
                    underlineFocusStyle={style.underlineFocus}/>
                    <div className="mobile-search-button">
                        <IconButton iconStyle={style.icon} style={style.button} type="submit" >
                            <ActionSearch className="menu-icon" color={"#fff"}/>
                        </IconButton>
                    </div>

                </form>
        	</div>
        )
    }
}


export default MobileSearch;
import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import ActionSearch from 'material-ui/svg-icons/action/search'
import TextField from 'material-ui/TextField'
import { escape, trim } from "Validator"
import { connect } from "react-redux"
import {searchPostsCall} from "../../actions/searchActions"

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            searchKeywords:""
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()
        console.log(trim(escape(this.state.searchKeywords)));
        if(this.state.searchKeywords != null){
            let sanitizedKeywords = escape(trim(this.state.searchKeywords));
            this.props.searchPostDispatch(sanitizedKeywords)
        }
    }

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
            <form onSubmit={this.onSubmit}>
                <IconButton iconStyle={style.icon} style={style.button} type="submit" >
                    <ActionSearch className="menu-icon" color={"#fff"}/>
                </IconButton>
                <TextField 
                style={style.wrapper}
                inputStyle={style.input}
                onChange={this.onChange}
                value={this.state.searchKeywords}
                name="searchKeywords"
                hintText="Search..." 
                hintStyle={style.hint} 
                underlineStyle={style.underline}
                underlineFocusStyle={style.underlineFocus}/>
            </form>
    	</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchPostDispatch: (request) => {
      dispatch(searchPostsCall(request));
    }
  }
}

export default connect(null,mapDispatchToProps)(Search)
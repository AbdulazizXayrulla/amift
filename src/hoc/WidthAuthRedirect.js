import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToPropsForRedirect=(state)=>{
    
    return({
        isAuth:state.auth.isAuth
    })
}
export const widthAuthRedirect=(Component)=>{
    class RedirectComponent extends React.Component{

        render() {
            if(!this.props.isAuth) return <Redirect to={'/SignIn'}/>
            return  <Component {...this.props}/>

        }
    }

    return compose(
        connect(mapStateToPropsForRedirect)
    )(RedirectComponent)
}

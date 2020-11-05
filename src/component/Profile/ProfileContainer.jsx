import React from 'react';

import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";

import {getProfie, getStatus, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {widthAuthRedirect} from "../../hoc/WidthAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

componentDidMount() {

var userId=this.props.match.params.userId;
if(!userId){
    userId=2;
}

this.props.getProfie(userId)
    this.props.getStatus(userId)
}

    render() {

        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>


    }
}
let mapStateToProps=(state)=>{
    return ({
        profile:state.profilePage.profile,
        status:state.profilePage.status

    })
}




export default compose(
    connect(mapStateToProps,{setUserProfile,getProfie,getStatus,updateStatus}),
    withRouter,
    //widthAuthRedirect
)(ProfileContainer)
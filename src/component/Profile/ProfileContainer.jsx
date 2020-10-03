import React from 'react';

import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";

import {getProfie, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

componentDidMount() {

var userId=this.props.match.params.userId;
if(!userId){
    userId=2;
}

this.props.getProfie(userId)
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
    //
    //     this.props.setUserProfile(response.data);
    //
    // })
}

    render() {
    if(!this.props.isAuth) return <Redirect to={'/SignIn'}/>
        return <Profile {...this.props} profile={this.props.profile} />


    }
}
let mapStateToProps=(state)=>{
return ({
    profile:state.profilePage.profile,
    isAuth:state.auth.isAuth
})
}


let withUrlDateContainerComponent=withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile,getProfie})(withUrlDateContainerComponent);
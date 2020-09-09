import React from 'react';

import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";

import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component{

componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0`+this.props.location.pathname).then(response => {

        this.props.setUserProfile(response.data);

    })
}

    render() {
        console.log(this.props)
        return <Profile {...this.props} profile={this.props.profile} />


    }
}
let mapStateToProps=(state)=>{
return ({
    profile:state.profilePage.profile
})
}


let withUrlDateContainerComponent=withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(withUrlDateContainerComponent);
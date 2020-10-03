import React from "react";

import SignIn from "./SignIn";
import {connect} from "react-redux";
import * as axios from "axios";
import {setMe, setUserData} from "../../redux/auth-reducer";


class SignInContainer extends React.Component {
    componentDidMount() {
      this.props.setMe()
    }

    render() {
        return (
            <SignIn {...this.props}/>
        );
    }


}
const mapStateToProps=(state)=>{

return({
login:state.auth.login,
    isAuth:state.auth.isAuth

})
}

export default connect(mapStateToProps,{setUserData,setMe})(SignInContainer)
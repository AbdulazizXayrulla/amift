import React from "react";

import SignIn from "./SignIn";
import {connect} from "react-redux";
import * as axios from "axios";
import {setUserData} from "../../redux/auth-reducer";


class SignInContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials:true
        }).then(response => {
console.log(response)
            let {id,login,email}=response.data.data
            this.props.setUserData(id,email,login);

        })
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

export default connect(mapStateToProps,{setUserData})(SignInContainer)
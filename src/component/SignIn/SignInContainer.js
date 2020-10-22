import React from "react";
import SignIn from "./SignIn";
import {connect} from "react-redux";
import {setMe} from "../../redux/auth-reducer";
import {compose} from "redux";


class SignInContainer extends React.Component {
    componentDidMount() {
      this.props.setMe()
    }

    render() {
        return (
            <SignIn {...this.props} />
        );
    }


}
const mapStateToProps=(state)=>{

return({
login:state.auth.login,
    isAuth:state.auth.isAuth

})
}
export default  compose(
    connect(mapStateToProps,{setMe})
)(SignInContainer)

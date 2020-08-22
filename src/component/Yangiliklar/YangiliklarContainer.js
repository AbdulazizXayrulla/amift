import React from "react";
import Yangiliklar from "./Yangiliklar";

import {connect} from "react-redux";
import {FollowActionCreater, setUserActionCreater, UnFollowActionCreater} from "../../redux/yangiliklar-reducer";



let mapStateToProps=(state)=>{

    return{
        yangiliklar:state.yangiliklar
    }
}
let mapDispatchToProps=(dispatch)=>{

    return{
        follow:(id)=>dispatch(FollowActionCreater(id)),
        Unfollow:(id)=>dispatch(UnFollowActionCreater(id)),
        setUser:(user)=>dispatch(setUserActionCreater(user))

    }

}
const YangiliklarContainer=connect(mapStateToProps,mapDispatchToProps)(Yangiliklar)
export default YangiliklarContainer
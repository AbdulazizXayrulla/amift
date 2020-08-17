import React from "react";
import Yangiliklar from "./Yangiliklar";

import {connect} from "react-redux";
import {FollowActionCreater, UnFollowActionCreater} from "../../redux/yangiliklar-reducer";



let mapStateToProps=(state)=>{
    debugger
    return{
        yangiliklar:state.yangiliklar
    }
}
let mapDispatchToProps=(dispatch)=>{

    return{
        follow:(id)=>dispatch(FollowActionCreater(id)),
        Unfollow:(id)=>dispatch(UnFollowActionCreater(id))

    }

}
const YangiliklarContainer=connect(mapStateToProps,mapDispatchToProps)(Yangiliklar)
export default YangiliklarContainer
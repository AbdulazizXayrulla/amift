import React from "react";


import {connect} from "react-redux";
import {
    FollowActionCreater, setCurrentPage, setPageSize,
    setUserActionCreater,
    setUserTotalCount,
    UnFollowActionCreater
} from "../../redux/yangiliklar-reducer";
import Yangiliklar from "./Yangiliklar";



let mapStateToProps=(state)=>{
console.log(state)
    return{
        yangiliklar:state.yangiliklar,
        totalCount:state.yangiliklar.totalCount,
        PageSize:state.yangiliklar.PageSize,
        currentPage:state.yangiliklar.currentPage

    }
}
let mapDispatchToProps=(dispatch)=>{

    return{
        follow:(id)=>dispatch(FollowActionCreater(id)),
        Unfollow:(id)=>dispatch(UnFollowActionCreater(id)),
        setUser:(user)=>dispatch(setUserActionCreater(user)),
        setUserTotalCount:(totalCount)=>dispatch(setUserTotalCount(totalCount)),
        setCurrentPage:(page)=>dispatch(setCurrentPage(page))


    }

}
const YangiliklarContainer=connect(mapStateToProps,mapDispatchToProps)(Yangiliklar)
export default YangiliklarContainer
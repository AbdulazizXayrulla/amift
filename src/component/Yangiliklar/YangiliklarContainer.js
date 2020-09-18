import React from "react";
import {connect} from "react-redux";
import {
    follow, IsFetching, setCurrentPage,
    setUser,
    setUserTotalCount,
    Unfollow

} from "../../redux/yangiliklar-reducer";
import Yangiliklar from "./Yangiliklar";
import * as axios from "axios";
import {UserApi} from "../../api/api";


class Yangiliklarq extends React.Component {
    componentDidMount() {
this.props.IsFetching(false)
       UserApi.getUser(this.props.currentPage,this.props.PageSize).then(data => {
            this.props.IsFetching(true)
            this.props.setUser(data.items);
            this.props.setUserTotalCount(data.totalCount)
        })
    }

    onChangePage = (q) => {
        this.props.setCurrentPage(q)
        this.props.IsFetching(false)
        UserApi.getUser(q,this.props.PageSize).then(data => {
            this.props.IsFetching(true)
            this.props.setUser(data.items);
        })
    }



    render() {
        return <Yangiliklar
            onChangePage={this.onChangePage}
            totalCount={this.props.totalCount}
            PageSize={this.props.PageSize}
            currentPage={this.props.currentPage}
            yangiliklar={this.props.yangiliklar}
            Unfollow={this.props.Unfollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching}
        />
    }
}
let mapStateToProps=(state)=>{
console.log(state)
    return{
        yangiliklar:state.yangiliklar,
        totalCount:state.yangiliklar.totalCount,
        PageSize:state.yangiliklar.PageSize,
        currentPage:state.yangiliklar.currentPage,
        isFetching:state.yangiliklar.isFetching
    }
}

const YangiliklarContainer=connect(mapStateToProps,{follow,Unfollow,setUser,setUserTotalCount,setCurrentPage,IsFetching})(Yangiliklarq)
export default YangiliklarContainer

// let mapDispatchToProps=(dispatch)=>{
//
//     return{
//         follow:(id)=>dispatch(FollowActionCreater(id)),
//         Unfollow:(id)=>dispatch(UnFollowActionCreater(id)),
//         setUser:(user)=>dispatch(setUserActionCreater(user)),
//         setUserTotalCount:(totalCount)=>dispatch(setUserTotalCount(totalCount)),
//         setCurrentPage:(page)=>dispatch(setCurrentPage(page)),
//         isFetchinga:(bool)=>dispatch(isFetching(bool))
//
//
//     }
//
// }
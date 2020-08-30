import React from "react";
import {connect} from "react-redux";
import {
    FollowActionCreater, isFetching, setCurrentPage,
    setUserActionCreater,
    setUserTotalCount,
    UnFollowActionCreater
} from "../../redux/yangiliklar-reducer";
import Yangiliklar from "./Yangiliklar";
import * as axios from "axios";

class Yangiliklarq extends React.Component {
    componentDidMount() {
this.props.isFetchinga(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.PageSize}`).then(response => {
            this.props.isFetchinga(true)
            this.props.setUser(response.data.items);
            this.props.setUserTotalCount(response.data.totalCount)
        })
    }

    onChangePage = (q) => {
        this.props.setCurrentPage(q)
        this.props.isFetchinga(false)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${q}&count=${this.props.PageSize}`).then(response => {
            this.props.isFetchinga(true)
            this.props.setUser(response.data.items);
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
let mapDispatchToProps=(dispatch)=>{

    return{
        follow:(id)=>dispatch(FollowActionCreater(id)),
        Unfollow:(id)=>dispatch(UnFollowActionCreater(id)),
        setUser:(user)=>dispatch(setUserActionCreater(user)),
        setUserTotalCount:(totalCount)=>dispatch(setUserTotalCount(totalCount)),
        setCurrentPage:(page)=>dispatch(setCurrentPage(page)),
        isFetchinga:(bool)=>dispatch(isFetching(bool))


    }

}
const YangiliklarContainer=connect(mapStateToProps,mapDispatchToProps)(Yangiliklarq)
export default YangiliklarContainer
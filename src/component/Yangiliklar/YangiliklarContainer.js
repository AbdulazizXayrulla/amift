import React from "react";
import {connect} from "react-redux";
import {
    follow, getUserThunk, IsFollowFetchingToggle, setCurrentPage, Unfollow

} from "../../redux/yangiliklar-reducer";
import Yangiliklar from "./Yangiliklar";
import {widthAuthRedirect} from "../../hoc/WidthAuthRedirect";
import {compose} from "redux";



class Yangiliklarq extends React.Component {
    componentDidMount() {
this.props.getUserThunk(this.props.currentPage,this.props.PageSize)
    }

    onChangePage = (q) => {

        this.props.setCurrentPage(q)
        this.props.getUserThunk(q,this.props.PageSize)
        // this.props.IsFetching(false)
        // UserApi.getUser(q,this.props.PageSize).then(data => {
        //     this.props.IsFetching(true)
        //     this.props.setUser(data.items);
        // })
    }



    render() {
        console.log(this.props)
        return <Yangiliklar
            onChangePage={this.onChangePage}
            totalCount={this.props.totalCount}
            PageSize={this.props.PageSize}
            currentPage={this.props.currentPage}
            yangiliklar={this.props.yangiliklar}
            Unfollow={this.props.Unfollow}
            follow={this.props.follow}
            isFetching={this.props.isFetching}
            IsFollowFetchingProgress={this.props.IsFollowFetchingProgress}
        />
    }
}
let mapStateToProps=(state)=>{
    return{
        yangiliklar:state.yangiliklar,
        totalCount:state.yangiliklar.totalCount,
        PageSize:state.yangiliklar.PageSize,
        currentPage:state.yangiliklar.currentPage,
        isFetching:state.yangiliklar.isFetching,
        IsFollowFetchingProgress:state.yangiliklar.isFollowFetchingProgress
    }
}

export default compose(
    connect(mapStateToProps,{follow,Unfollow,setCurrentPage,IsFollowFetchingToggle,getUserThunk}),
    widthAuthRedirect
)(Yangiliklarq)









































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
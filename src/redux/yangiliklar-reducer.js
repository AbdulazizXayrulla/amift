import {UserApi} from "../api/api";

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UN_FOLLOW'
let SET_USER = 'SET_USER'
let SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT'
let SET_CURRENT_PAGE='SET_CURRENT_PAGE'
let IS_FETCHING='IS_FETCHING'
let IS_FOLLOW_FETCHING='IS_FOLLOW_FETCHING'



let initialState = {
    mainContaint: [],
    totalCount:0,
    PageSize:10,
    currentPage:1,
    isFetching:false,
    isFollowFetchingProgress:[]

}

const yangiliklarReducer = (state = initialState, action = null) => {


    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                mainContaint: state.mainContaint.map(e => {
                    if (e.id == action.id) {
                        return {...e, followed: true}
                    }
                    return e
                })
            }
            return stateCopy
        }
        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                mainContaint: state.mainContaint.map(e => {
                    if (e.id == action.id) {
                        return {...e, followed: false}
                    }
                    return e
                })
            }
            return stateCopy

        }
        case SET_USER: {
           let stateCopy = {
                ...state,
                mainContaint: action.users
            }
            return stateCopy
        }
        case SET_USER_TOTAL_COUNT:{
        state.totalCount=action.totalCount
            return state
        }
        case SET_CURRENT_PAGE:{
            state.currentPage=action.page
            return state
        }
        case IS_FETCHING:{
            state.isFetching=action.bool
            return state
        }
        case IS_FOLLOW_FETCHING:{

            return {...state,

                isFollowFetchingProgress:action.FollowBool?[
                    ...state.isFollowFetchingProgress,action.userId
                ]:state.isFollowFetchingProgress.filter(id=>id!=action.userId)

            }
        }



        default :
            return state


    }

}
export const followSuccess = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}
export const UnfollowSuccess = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}
export const setUser = (users) => {
    return {
        type: SET_USER,
        users
    }

}
export const setUserTotalCount=(totalCount)=>{
   return { type:SET_USER_TOTAL_COUNT,
        totalCount:totalCount}
}
export const setCurrentPage=(page)=>{
    return{
        type:SET_CURRENT_PAGE,
        page:page
    }
}
export const IsFetching=(bool)=>{
    return{
        type:IS_FETCHING,
        bool:bool
    }
}
export const IsFollowFetchingToggle=(FollowBool,userId)=>{
    return{
        type:IS_FOLLOW_FETCHING,
       FollowBool,
        userId
    }
}
export const getUserThunk=(currentPage,PageSize)=>{
    return (dispatch)=>{

        dispatch(IsFetching(false))
        UserApi.getUser(currentPage,PageSize).then(data => {
            dispatch(IsFetching(true))
            dispatch(setUser(data.items));
            dispatch(setUserTotalCount(data.totalCount))
        })


    }


}
export const follow=(userId)=>{
    return (dispatch)=>{
        dispatch(IsFollowFetchingToggle(true,userId));
        UserApi.follow(userId).then(response => {

            if (response.resultCode == 0) {

                dispatch(followSuccess(userId))
            }
            dispatch(IsFollowFetchingToggle(false,userId));
        })

    }
}
export const Unfollow=(userId)=>{
    return (dispatch)=>{
        dispatch(IsFollowFetchingToggle(true,userId));
        UserApi.Unfollow(userId).then(response => {

            if (response.resultCode == 0) {

                dispatch(UnfollowSuccess(userId))
            }
            dispatch(IsFollowFetchingToggle(false,userId));
        })

    }
}


export default yangiliklarReducer
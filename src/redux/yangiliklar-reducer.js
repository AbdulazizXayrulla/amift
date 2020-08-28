let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UN_FOLLOW'
let SET_USER = 'SET_USER'
let SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT'
let SET_CURRENT_PAGE='SET_CURRENT_PAGE'



let initialState = {
    mainContaint: [],
    totalCount:0,
    PageSize:10,
    currentPage:1

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



        default :
            return state


    }

}
export const FollowActionCreater = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}
export const UnFollowActionCreater = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}
export const setUserActionCreater = (users) => {
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


export default yangiliklarReducer
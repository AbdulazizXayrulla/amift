let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UN_FOLLOW'
let SET_USER = 'SET_USER'
let SET_USER_TOTAL_COUNT = 'SET_USER_TOTAL_COUNT'
let SET_CURRENT_PAGE='SET_CURRENT_PAGE'
let IS_FETCHING='IS_FETCHING'



let initialState = {
    mainContaint: [],
    totalCount:0,
    PageSize:10,
    currentPage:1,
    isFetching:false

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



        default :
            return state


    }

}
export const follow = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}
export const Unfollow = (id) => {
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


export default yangiliklarReducer
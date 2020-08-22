let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UN_FOLLOW'
let SET_USER = 'SET_USER'


let initialState = {
    mainContaint: []
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

export default yangiliklarReducer
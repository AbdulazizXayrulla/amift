import {ProfileApi} from "../api/api";

const ADD_MESSAGE='ADD-MESSAGE'
const EDIT_TEXT='EDIT-TEXT'
const SET_USER_PROFILE='SET_USER_PROFILE'
let initialState={
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'Abdulaziz',
    profile:null
}
const profileReducer=(state=initialState,action)=>{
switch (action.type) {
    case ADD_MESSAGE:{
        let messege = {
            id: 5,
            message:state.newPostText,
            likesCount: 0
        };
        let stateCopy={...state}

        stateCopy.posts=[...state.posts]
        stateCopy.newPostText = ''
        stateCopy.posts.push(messege);
        return stateCopy
    }
    case EDIT_TEXT:{
        let stateCopy={...state}

        stateCopy.newPostText = action.newText;
        return stateCopy
    }
    case SET_USER_PROFILE:{
        return {...state,profile: action.profile}
    }
    default :return state

}





}
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,

})
export const editTextActionCreator = (text) => ({
    type: EDIT_TEXT,
    newText: text
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const getProfie=(userId)=>(dispatch)=>{
    ProfileApi.getProFile(userId).then(response=>{


        dispatch(setUserProfile(response.data));
    })
}

export default profileReducer


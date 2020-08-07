const ADD_MESSAGE='ADD-MESSAGE'
const EDIT_TEXT='EDIT-TEXT'

let initialState={
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
        , newPostText: 'Abdulaziz'
}
const profileReducer=(state=initialState,action)=>{


    if (action.type === ADD_MESSAGE) {
        let messege = {
            id: 5,
            message:state.newPostText,
            likesCount: 0
        };

        state.newPostText = ''
        state.posts.push(messege);

    }
    if (action.type === EDIT_TEXT) {
        state.newPostText = action.newText;


    }
    return state

}
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,

})
export const editTextActionCreator = (text) => ({
    type: EDIT_TEXT,
    newText: text
})
export default profileReducer


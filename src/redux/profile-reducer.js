const ADD_MESSAGE='ADD-MESSAGE'
const EDIT_TEXT='EDIT-TEXT'


const profileReducer=(state,action)=>{


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


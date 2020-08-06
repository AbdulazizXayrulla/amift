const EDIT_DIOLOGS='EDIT-DIOLOGS'
const ADD_DIOLOGS='ADD-DIOLOGS'


const diologsReducer=(state,action)=>{
    if(action.type===EDIT_DIOLOGS){
        state.newMessage=action.text

    }
    if(action.type===ADD_DIOLOGS){

        state.messages.push({
            id:6,
            message:state.newMessage

        })
        state.newMessage=''


    }

    return state
}
export const editDialogsActionCreator = (text) => ({
    type: EDIT_DIOLOGS,
    text: text

})
export const addDialogsActionCreator = (text) => ({
    type: ADD_DIOLOGS,


})
export default diologsReducer
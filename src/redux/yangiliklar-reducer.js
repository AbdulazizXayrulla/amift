const ADD_NEW='ADD-NEW'
const ON_CHANGE_INPUT_1='ON-CHANGE-INPUT-1'
const ON_CHANGE_INPUT_2='ON-CHANGE-INPUT-2'
const ON_CHANGE_INPUT_3='ON-CHANGE-INPUT-3'

let initialState= [{

id: 0, Head: 'Assalomu alaykum ', Body: 'This is body', Footer: 'This is footer'


}]

const yangiliklarReducer=(state=initialState,action)=>{
    if (action.type === ADD_NEW) {
        let New = {
            id: action.id,
            Head: action.Head,
            Body: action.Body,
            Footer: action.Footer

        }
        state.push(New)

    }
    if (action.type === ON_CHANGE_INPUT_1) {
        state[action.id].Head = action.text

    }
    if (action.type === ON_CHANGE_INPUT_2) {
       state[action.id].Body = action.text

    }
    if (action.type === ON_CHANGE_INPUT_3) {
        state[action.id].Footer = action.text

    }
    return state
}
export const addnewActionCreator = (length,cardHeader,cardBody,cardFooter) => ({
    type: ADD_NEW,
    id: length,
    Head: cardHeader,
    Body: cardBody,
    Footer: cardFooter


})
export const onChangeInput1ActionCreator = (lingth,cardHeader) => ({
    type:ON_CHANGE_INPUT_1,
    id:lingth,
    text:cardHeader


})
export const onChangeInput2ActionCreator = (lingth,cardBody) => ({
    type:ON_CHANGE_INPUT_2,
    id:lingth,
    text:cardBody


})
export const onChangeInput3ActionCreator = (lingth,cardFooter) => ({
    type:ON_CHANGE_INPUT_3,
    id:lingth,
    text:cardFooter


})
export default yangiliklarReducer
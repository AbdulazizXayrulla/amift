const ADD_MESSAGE='ADD-MESSAGE'
const EDIT_TEXT='EDIT-TEXT'
const ADD_NEW='ADD-NEW'
const ON_CHANGE_INPUT_1='ON-CHANGE-INPUT-1'
const ON_CHANGE_INPUT_2='ON-CHANGE-INPUT-2'
const ON_CHANGE_INPUT_3='ON-CHANGE-INPUT-3'


let store = {
    _state: {
        Kutubxona: [
            {id: 1, kitobNomi: 'ertak'},
            {id: 2, kitobNomi: 'lirika'},
            {id: 3, kitobNomi: 'Adabiyot'},
            {id: 4, kitobNomi: 'komediya'},
            {id: 5, kitobNomi: 'Sherlar'},


        ],
        yangiliklar: [
            {id: 0, Head: 'Assalomu alaykum ', Body: 'This is body', Footer: 'This is footer'},


        ],
        UstozlarJamoasi: [
            {id: 1, ismi: 'Farrux'},
            {id: 2, ismi: 'Sardor'},
            {id: 3, ismi: 'Bekzod'},
            {id: 4, ismi: 'Joxa'},
            {id: 5, ismi: 'Sancho'},


        ],
        OnlainDarslar: [
            {id: 1, fanNomi: 'matematika'},
            {id: 2, fanNomi: 'fizika'},
            {id: 3, fanNomi: 'inglistili'},
            {id: 4, fanNomi: 'informatika'},
            {id: 5, fanNomi: 'AxborotXavfsizligi'},


        ],
        IshJoylari: [
            {id: 1, turi: 'mardikor'},
            {id: 2, turi: 'programmist'},
            {id: 3, turi: 'sovdagar'},
            {id: 4, turi: 'dehqon'},
            {id: 5, turi: 'doktor'},


        ],
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ]
            , newPostText: 'Abdulaziz'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sardor'},
                {id: 2, name: 'Dilshod'},
                {id: 3, name: 'Sanjar'},
                {id: 4, name: 'Avaz'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },


    },
    _callSubScribe() {
    },
    subscribe(observer) {
        this._callSubScribe = observer;

    },
    getState() {
        return this._state

    },


    dispatch(action) {
        if (action.type === ADD_MESSAGE) {
            let messege = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            {
                debugger
            }
            this._state.profilePage.newPostText = ''
            this._state.profilePage.posts.push(messege);
            this._callSubScribe(this.getState())
        }
        if (action.type === ADD_NEW) {
            let New = {
                id: action.id,
                Head: action.Head,
                Body: action.Body,
                Footer: action.Footer

            }
            this._state.yangiliklar.push(New)
            this._callSubScribe(this.getState())
        }
        if (action.type === ON_CHANGE_INPUT_1) {
            this._state.yangiliklar[action.id].Head = action.text
            this._callSubScribe(this.getState())
        }
        if (action.type === ON_CHANGE_INPUT_2) {
            this._state.yangiliklar[action.id].Body = action.text
            this._callSubScribe(this.getState())
        }
        if (action.type === ON_CHANGE_INPUT_3) {
            this._state.yangiliklar[action.id].Footer = action.text
            this._callSubScribe(this.getState())
        }
        if (action.type === EDIT_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubScribe(this.getState())
        }
    },


}
export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,

})
export const editTextActionCreator = (text) => ({
    type: EDIT_TEXT,
    newText: text
})
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


export default store;
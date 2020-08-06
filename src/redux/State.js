import profileReducer from "./profile-reducer";
import yangiliklarReducer from "./yangiliklar-reducer";
import diologsReducer from "./diologs-reducer";


let store = {
    _state: {
        yangiliklar: [
            {id: 0, Head: 'Assalomu alaykum ', Body: 'This is body', Footer: 'This is footer'},


        ],
        Kutubxona: [
            {id: 1, kitobNomi: 'ertak'},
            {id: 2, kitobNomi: 'lirika'},
            {id: 3, kitobNomi: 'Adabiyot'},
            {id: 4, kitobNomi: 'komediya'},
            {id: 5, kitobNomi: 'Sherlar'},


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
            ],
            newMessage: '',
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = diologsReducer(this._state.dialogsPage, action)
        this._state.yangiliklar = yangiliklarReducer(this._state.yangiliklar, action)

        this._callSubScribe(this.getState())
    },


}





export default store;
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import diologsReducer from "./diologs-reducer";
import yangiliklarReducer from "./yangiliklar-reducer";
let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:diologsReducer,
    yangiliklar: yangiliklarReducer
})

let store=createStore(reducers)

export default store
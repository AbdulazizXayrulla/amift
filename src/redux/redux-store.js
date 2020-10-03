import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import diologsReducer from "./diologs-reducer";
import yangiliklarReducer from "./yangiliklar-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
let reducers=combineReducers({
    profilePage:profileReducer,
    dialogsPage:diologsReducer,
    yangiliklar: yangiliklarReducer,
    auth:authReducer
})

let store=createStore(reducers,applyMiddleware(thunk))
window.store=store
export default store
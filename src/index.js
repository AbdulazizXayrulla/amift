import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import store from "./redux/redux-store";
import {Provider} from "react-redux";





 let rerenderEntireTree=(props)=>{

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState());
console.log(store.subscribe)

 store.subscribe(()=>{
         rerenderEntireTree(store.getState())});




serviceWorker.unregister();

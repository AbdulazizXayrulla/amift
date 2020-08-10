import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import store from "./redux/redux-store";
import StoreContext from "./StoreContext";




 let rerenderEntireTree=(props)=>{
debugger
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
            <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState());
console.log(store.subscribe)

 store.subscribe(()=>{
         rerenderEntireTree(store.getState())});




serviceWorker.unregister();

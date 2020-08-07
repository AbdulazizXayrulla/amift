import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from "./component/Dialogs/Dialogs";

import store from "./redux/redux-store";



 let rerenderEntireTree=(props)=>{

    ReactDOM.render(
        <React.StrictMode>
            <App  state={props}
                  dispatch={store.dispatch.bind(store)}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState());
console.log(store.subscribe)

 store.subscribe(()=>{
         rerenderEntireTree(store.getState())});




serviceWorker.unregister();

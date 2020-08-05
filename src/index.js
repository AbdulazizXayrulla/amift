import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from "./component/Dialogs/Dialogs";

import store from "./redux/State";



 let rerenderEntireTree=(props)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App  state={props}
                  dispatch={store.dispatch.bind(store)}
                  // addMessage={store.addMessage.bind(store)}
                  // AddNew={store.AddNew.bind(store)}
                  // editText={store.editText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());
 store.subscribe(rerenderEntireTree);




serviceWorker.unregister();

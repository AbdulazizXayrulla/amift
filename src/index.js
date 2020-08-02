import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from "./component/Dialogs/Dialogs";
import state, {AddNew, editText, subscribe} from "./redux/State";
import {addMessage} from "./redux/State";



 let rerenderEntireTree=(props)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App  state={props}
                  addMessage={addMessage}
                  AddNew={AddNew}
                  editText={editText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state);
 subscribe(rerenderEntireTree);




serviceWorker.unregister();

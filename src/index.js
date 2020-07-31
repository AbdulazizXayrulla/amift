import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from "./component/Dialogs/Dialogs";
import state from "./redux/State";
import {addMessage} from "./redux/State";

//addMessage('salom');
ReactDOM.render(
    <React.StrictMode>
        <App  state={state}
              addMessage={addMessage}
        />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

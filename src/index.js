import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dialogs from "./component/Dialogs/Dialogs";
import state from "./redux/State";
import {addMessage} from "./redux/State";
import {rerenderEntireTree} from './render'



rerenderEntireTree(state);




serviceWorker.unregister();

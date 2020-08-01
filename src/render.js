import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {addMessage} from "./redux/State";



export let rerenderEntireTree=(props)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App  state={props}
                  addMessage={addMessage}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}






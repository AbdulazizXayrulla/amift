import React from 'react';
import s from './Dialogs.module.css';

import {addDialogsActionCreator, editDialogsActionCreator} from "../../redux/diologs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const addMessage = () => {
props.dispatch(addDialogsActionCreator())
    }
    const onChangeMessage=(e)=>{
        props.dispatch(editDialogsActionCreator(e))
    }
    return (
        <Dialogs addMessage={addMessage} onChangeMessage={onChangeMessage} state={props.state}/>
    )
}

export default DialogsContainer;
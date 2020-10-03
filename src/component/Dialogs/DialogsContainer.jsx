import React from 'react';
import {addDialogsActionCreator, editDialogsActionCreator} from "../../redux/diologs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {

    return {
        state: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {

    return{
        addMessage:() => dispatch(addDialogsActionCreator()),
        onChangeMessage:(e) => dispatch(editDialogsActionCreator(e))


    }

}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
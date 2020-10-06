import React from 'react';
import {addDialogsActionCreator, editDialogsActionCreator} from "../../redux/diologs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {widthAuthRedirect} from "../../hoc/WidthAuthRedirect";


let mapStateToProps = (state) => {

    return {
        state: state.dialogsPage,

    }
}

let mapDispatchToProps = (dispatch) => {

    return{
        addMessage:() => dispatch(addDialogsActionCreator()),
        onChangeMessage:(e) => dispatch(editDialogsActionCreator(e))


    }

}
let AuthRedirectComponent = widthAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;
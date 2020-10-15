import React from 'react';
import {addDialogsActionCreator, editDialogsActionCreator} from "../../redux/diologs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {widthAuthRedirect} from "../../hoc/WidthAuthRedirect";
import {compose} from "redux";


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
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    widthAuthRedirect
)(Dialogs)

import React from 'react';
import {addDialogsActionCreator, editDialogsActionCreator} from "../../redux/diologs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    const addMessage = () => {
                        store.dispatch(addDialogsActionCreator())
                    }
                    const onChangeMessage=(e)=>{
                        store.dispatch(editDialogsActionCreator(e))
                    }
              return      <Dialogs addMessage={addMessage} onChangeMessage={onChangeMessage} state={store.getState().dialogsPage}/>
                }
            }

        </StoreContext.Consumer>
    )

}

export default DialogsContainer;
import React from "react";
import s from './Yangiliklar.module.css'
import {
    addnewActionCreator,
    onChangeInput1ActionCreator,
    onChangeInput2ActionCreator,
    onChangeInput3ActionCreator
} from "../../redux/yangiliklar-reducer";
import Yangiliklar from "./Yangiliklar";


const YangiliklarContainer = (props) => {

    const addNew = (props1,props2,props3) => {
        props.dispatch(addnewActionCreator(props.yangiliklar.length,props1,props2,props3))
    }

    let onChangeInput1 = (props1) => {
        props.dispatch(onChangeInput1ActionCreator(props.yangiliklar.length - 1, props1))
    }
    let onChangeInput2 = (props1) => {
        props.dispatch(onChangeInput2ActionCreator(props.yangiliklar.length - 1, props1))
    }
    let onChangeInput3 = (props1) => {
        props.dispatch(onChangeInput3ActionCreator(props.yangiliklar.length-1,props1))
    }





    return (
        <Yangiliklar onChangeInput1={onChangeInput1} onChangeInput2={onChangeInput2} onChangeInput3={onChangeInput3} addNew={addNew}
                     yangiliklar={props.yangiliklar}
        />
    )
}
export default YangiliklarContainer
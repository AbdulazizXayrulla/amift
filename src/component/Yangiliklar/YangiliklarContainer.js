import React from "react";
import Yangiliklar from "./Yangiliklar";

import {connect} from "react-redux";



let mapStateToProps=(state)=>{
    return{
        yangiliklar:state.yangiliklar
    }
}
let mapDispatchToProps=(dispatch)=>{
    return null
}
const YangiliklarContainer=connect(mapStateToProps,mapDispatchToProps)(Yangiliklar)
export default YangiliklarContainer
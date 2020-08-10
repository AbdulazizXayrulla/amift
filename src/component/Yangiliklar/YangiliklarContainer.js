import React from "react";
import Yangiliklar from "./Yangiliklar";
import StoreContext from "../../StoreContext";

const YangiliklarContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store)=>{
                return       <Yangiliklar
                    yangiliklar={store.getState().yangiliklar}
                />
            }
        }

        </StoreContext.Consumer>
    )
}
export default YangiliklarContainer
import React from "react";
import s from './UstozlarJamoasi.module.css'
import Yangiliklar from "../Yangiliklar/Yangiliklar";
import StoreContext from "../../StoreContext";

const UstozlarJamoasi =(props)=>{
    return (
        <div className={s.UstozlarJamoasi}>

            <StoreContext.Consumer>{
                (store)=>{

                   let UstozlarJamoasi=store.getState().UstozlarJamoasi.map((u) =>   <div>

                               {u.id}  <span className='bg-primary'>{u.ismi}</span>
                           </div>
                       )

                    return UstozlarJamoasi
                }
            }

            </StoreContext.Consumer>




        </div>
    );
}
export default UstozlarJamoasi
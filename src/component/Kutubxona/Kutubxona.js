import React from "react";
import s from './Kutubxona.module.css'
import StoreContext from "../../StoreContext";

const Kutubxona =(props)=>{
    return (
        <div className={s.Kutubxona}>
            <StoreContext.Consumer>{
                (store)=>{

                    let Kutubxona=store.getState().Kutubxona.map(sa=>
                        <div>{sa.id}
                            <span className='bg-info'>{sa.kitobNomi}</span>

                        </div>

                    )

                    return Kutubxona
                }
            }

            </StoreContext.Consumer>




        </div>
    );
}
export default Kutubxona
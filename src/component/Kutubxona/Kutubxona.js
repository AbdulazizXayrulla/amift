import React from "react";
import s from './Kutubxona.module.css'

const Kutubxona =(props)=>{
    return (
        <div className={s.Kutubxona}>
            {props.Kutubxona.map(sa=>
                <div>{sa.id}
                  <span className='bg-info'>{sa.kitobNomi}</span>

                </div>

            )}


        </div>
    );
}
export default Kutubxona
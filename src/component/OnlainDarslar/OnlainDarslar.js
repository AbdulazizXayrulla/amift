import React from "react";
import s from './OnlainDarslar.module.css'

const OnlainDarslar =(props)=>{

    return (
        <div className={s.OnlainDarslar}>

            {props.OnlainDarslar.map(sa=>
                <div>{sa.id}
               <span className='ml-5'>{sa.fanNomi}</span>

                </div>

            )}

        </div>
    );
}
export default OnlainDarslar
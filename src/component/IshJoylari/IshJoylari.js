import React from "react";
import s from './IshJoylari.module.css'

const IshJoylari =(props)=>{
    return (
        <div className={s.IshJoylari}>

            {props.IshJoylari.map((u) =>   <div>

                    {u.id}  <span className='bg-primary'>{u.turi}</span>
                </div>
            )}


        </div>
    );
}
export default IshJoylari
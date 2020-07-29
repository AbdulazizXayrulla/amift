import React from "react";
import s from './Yangiliklar.module.css'

const Yangiliklar =(props)=>{

    return (
        <div className={s.Yangiliklar}>

            {props.yangiliklar.map(sa=>
            <div>{sa.id}
                <br/>
                {sa.matni}
            </div>

        )}

        </div>
    );
}
export default Yangiliklar
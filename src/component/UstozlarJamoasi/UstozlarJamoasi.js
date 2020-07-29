import React from "react";
import s from './UstozlarJamoasi.module.css'

const UstozlarJamoasi =(props)=>{
    return (
        <div className={s.UstozlarJamoasi}>

            {props.UstozlarJamoasi.map((u) =>   <div>

                    {u.id}  <span className='bg-primary'>{u.ismi}</span>
                </div>
            )}

        </div>
    );
}
export default UstozlarJamoasi
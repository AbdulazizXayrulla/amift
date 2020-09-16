import React from "react";
import s from './SignIn.module.css'
import {NavLink} from "react-router-dom";




const SignIn =(props)=>{

    return (
        <NavLink to="/SignIn" className='nav-link'>
            {
                props.isAuth?props.login:<button type={'button'} className='btn btn-danger'>Sign In</button>
            }


        </NavLink>
    );
}
export default SignIn
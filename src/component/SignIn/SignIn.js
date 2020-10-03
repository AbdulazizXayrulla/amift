import React from "react";
import s from './SignIn.module.css'
import {NavLink} from "react-router-dom";


const SignIn = (props) => {

    return (<span>

            {
                props.isAuth ? <span><img src="https://res.cloudinary.com/teepublic/image/private/s--6vDtUIZ---/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1570281377/production/designs/6215195_0.jpg" alt="Rasm Yuklab olishda Xatolik!!!"className={s.imgSize}/> <br/><span className={s.loginStyle}>{props.login}</span></span> : <NavLink to="/SignIn" className='nav-link'>
                        <button type={'button'} className='btn btn-danger'>Sign In</button>
                    </NavLink>
            }
</span>


    );
}
export default SignIn
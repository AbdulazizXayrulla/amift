import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className=''>
            <ul >
                <li>
                    <NavLink to="/#"><img src="http://xayrullayev.lark.ru/images/IMG_20200726_0932521.jpg?1595853808" className={s.image} alt="aa"/></NavLink>
                </li>

                <li><NavLink to="/yangiliklar">Yangiliklar</NavLink></li>
                <li><NavLink to="/UstozlarJamoasi">UstozlarJamoasi</NavLink></li>
                <li><NavLink to="/Kutubxona">Kutubxona</NavLink></li>
                <li><NavLink to="/OnlainDarslar">OnlainDarslar</NavLink></li>
                <li><NavLink to="/IshJoylari">IshJoylari</NavLink></li>
                <li><NavLink to="/dialogs">dialogs</NavLink></li>
                <li><NavLink to="/profile">profile</NavLink></li>


                <li className='ml-auto'><NavLink to="/SignUp" ><button type={'button'} className='btn btn-success'>Sign Up</button>
                    </NavLink></li>
                <li className=''><NavLink to="/SignIn" ><button type={'button'} className='btn btn-danger'>Sign In</button>
                </NavLink></li>
            </ul>
<hr width='98%' className='ml-4'/>
        </div>
    );
}
export default Navbar
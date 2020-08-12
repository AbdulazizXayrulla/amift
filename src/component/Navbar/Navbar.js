import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {

    let datchikComponent=React.createRef()
    let datchik=()=>{
        if(datchikComponent.current.className=='collapse navbar-collapse '){
            datchikComponent.current.className='collapse navbar-collapse show '
        }
        else{
            datchikComponent.current.className='collapse navbar-collapse '
        }
    }

    return (<div>
        <nav className="navbar navbar-expand-md">

                <NavLink to="/#" className='navbar-brand'><img src="http://xayrullayev.lark.ru/images/IMG_20200726_0932521.jpg?1595853808" className={s.image} alt="aa"/></NavLink>
            <button className="navbar-toggler " type="button" onClick={datchik}>
                <span className="">
                    <img src="https://marvel-live.freetls.fastly.net/canvas/2020/8/62b62409a3544aa88e478967592b8e44?quality=95&fake=.png&width=54" alt=""/>
                </span>
            </button>
            <div className="collapse navbar-collapse" ref={datchikComponent} id="collapsibleNavbar">
            <ul className="navbar-nav align-items-center w-100">
                <li className="nav-item" ><NavLink to="/yangiliklar" className="nav-link">Yangiliklar</NavLink></li>
                <li className="nav-item" ><NavLink to="/UstozlarJamoasi" className="nav-link">UstozlarJamoasi</NavLink></li>
                <li className="nav-item" ><NavLink to="/Kutubxona" className="nav-link">Kutubxona</NavLink></li>
                <li className="nav-item" ><NavLink to="/OnlainDarslar" className="nav-link">OnlainDarslar</NavLink></li>
                <li className="nav-item" ><NavLink to="/IshJoylari" className="nav-link">IshJoylari</NavLink></li>
                <li className="nav-item" ><NavLink to="/dialogs" className="nav-link">dialogs</NavLink></li>
                <li className="nav-item" ><NavLink to="/profile" className="nav-link">profile</NavLink></li>



    <li className='nav-item ml-0 ml-md-auto' ><NavLink to="/SignUp" className='nav-link'><button type={'button'} className='btn btn-success'>Sign Up</button>
    </NavLink></li>
    <li className='nav-item'><NavLink to="/SignIn" className='nav-link'><button type={'button'} className='btn btn-danger'>Sign In</button>
    </NavLink></li>


            </ul>
            </div>


        </nav>
        <hr width='100%' />
        </div>
    );
}
export default Navbar





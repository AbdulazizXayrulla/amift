import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Kutubxona from "../Kutubxona/Kutubxona";

const Navbar = () => {
    return (
        <div >
            <ul >
                <li>
                    <NavLink to="/#"><img src="http://xayrullayev.lark.ru/images/IMG_20200726_0932521.jpg?1595853808" className={s.image} alt="aa"/></NavLink>
                </li>

                <li><NavLink to="/yangiliklar">Yangiliklar</NavLink></li>
                <li><NavLink to="/UstozlarJamoasi">UstozlarJamoasi</NavLink></li>
                <li><NavLink to="/Kutubxona">Kutubxona</NavLink></li>
                <li><NavLink to="/OnlainDarslar">OnlainDarslar</NavLink></li>
                <li><NavLink to="/IshJoylari">IshJoylari</NavLink></li>
                <li className='ml-auto'><NavLink to="/Users" >Users
                    <img className={s.iconLogin}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX//
                    /8AAACfn59cXFz6+voQEBD8/Pz09PTz8/P39/dFRUXCwsLj4+N6enpqamrs7Ozc3NzOzs4iIiJnZ2enp6eHh4e3t7cbGxtAQECXl
                    5diYmLU1NRRUVG9vb3Q0NBycnIoKCgzMzM2NjZMTEyQkJB/f38NDQ3iWrGFAAAEyUlEQVR4nO3d6W7bMBAE4JUjy7FzKIfbHE3i3
                    O//iE0PtFU0QClqyZ01dn4aIJUPVGRZXFIiBjnfXTTls9wsVhY6kfVlBd7vHJkI7+oBbYg3NYFNU/9E7eoCm0V14VFl4aa6cFtZu
                    Nx7YVNdeL/3wnbvhfJl74Xd9b4LZXWw78KPq01No4mwcELoPyH0nxD6Twj9J4T+E0L/CaH/hNB/Qug/IfSfEPpPCP0nhP4TQv
                    8Jof+E0H9C6D8h9J8Q+k8I/SeENXK8OL18K1ZGTyA8+XXsp29lujcXdps/R/9a5ADmwpN/Dl+EaC08Gxz/vsARrIWvTWmitfB2+AcUW
                    JlkLXxpShOthaefhc258hGshYuRUJtoLezHQmWitRANYvOgeQBzoewAUfMGzl5YmkggLExkEIKvjKY50+qcQihoxboWkUM4unlTJJII4S
                    geq/TMIhS0gE2FSCMsRuQRIuJSgUgkbAHxvZ/dLZFQutGPxY9RnE1kEoLfwwpELmEL9nK5mEnkEsp6MyZeHc7qkkwoLViffzGLyCaExMc
                    5JyqdUA4RccYo8gnl8AkQ19ndEQqlfRwTn7JHkVEIR/E5dxMrSqH0iNjl9cUplEOwDd91m9UVqVBWV4CYdblhFUoPLjebnFGkFUoPRvE
                    lox9eofTvgDj9ckMslH45Jt5NPlGZhXKMiFM7oRbK8VjYHEzsg1sIpxcPpv0vkgvhKN5O6oFd+KngJoNIL4TEywnt+YXwRD1Nb+5AKN8AcZf
                    c2oNQzsDdTTIRCNuj7YIrWzQPnkocCyvvP52fkzwheurMmjTisA0uGqDNNkP4YPOn5iblAdywxaAm2UFSBnHYQmq8h0ExKV/8wxaCO6JNyi+
                    pYQsBz0aYk3ILPmwBy1qIk/Kqg2GL+rvAz0tKqcawhQiYg+XNWwJwJEQPYlmT9vR02Objgx4V0VHmJe0h/7DRz4/ObnYHXLlFN8upsxhAyJc
                    1mPi+Tn3i5kGIZhPT56EcCNfg4vecPunNL1yBEXyaMJNIL4TFJ1OmStmFKwCcVpfBLnweAyeW8nEL0dfExcSyE2rhGtSbTq5UZBaimuGryUV
                    8zEKdimFeIXpym1MSTSvstBYn0ArBCL5nrb5gFaK1F3nLSziFHfoZnrl+hlOouR6RUqi6GpFRqLuilFCIJnxnrCflE2qv7KYTqi9dZxPqr80
                    nE6IZ2pkbgXAJCwC5hCWAVMK3EkAmIXr5scKuUTzCQkAeYSkgjfAVAHW2pyMRIqDSLoocwoJADiEq+FTbB5NBiDY009vok0CIgEl1lWmxFxYG
                    2guPCgPNhS2o91QFmgu/joEp5XgTYi0c/6ZXBpoLRzNo2kBz4ef5iRv1I1gLv5QGmgsfSgPNhYPT9LXEAcyFfWGgvfBvWZfuF/2f2AtF7k83
                    z3ev83fXw2EQinR5G7MkhUNYMiH0nxD6Twj9J4T+E0L/CaH/hNB/Qug/IfSfEPpPCP0nhP4TQv8Jof+E0H9C6D8h9J8Q+k8I/SeE/kMgvEfv
                    yS0VA9+qps9C2IHdvPZLiBZW7pWwrQysL6y+M3N14TaEyllWF6KVayWzqS7sKgvV1xz9P5Xf+ZL/0t38VH3ri8oWBlOzrvjeFxPgR853Nd4bs
                    twsfpyi3wG2HELxuuHNnwAAAABJRU5ErkJggg=="
                    alt=""/></NavLink></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

        </div>
    );
}
export default Navbar
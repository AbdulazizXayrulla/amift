import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import photo from '../../assets/image/amiftIcon.jpg'
import {Carousel, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import SignInContainer from "../SignIn/SignInContainer";

const Navbarr = () => {



    return (
        <div className={s.backImage}>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand href="#"><img src={photo} className={s.image} alt="aa"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="text-center">
                        <NavLink to="/yangiliklar" style={{fontSize: '20px', color: '#9C9B9C'}}
                                 className={'text-decoration-none font-weight-bold nav-link ' + `${s.animationTarget}`}>yangiliklar</NavLink>
                        <NavLink to="/UstozlarJamoasi" style={{fontSize: '20px', color: '#9C9B9C'}}
                                 className={'text-decoration-none font-weight-bold nav-link ' + `${s.animationTarget1}`}>UstozlarJamoasi</NavLink>


                        <NavLink to="/Kutubxona" style={{fontSize: '20px', color: '#9C9B9C'}}
                                 className={'text-decoration-none font-weight-bold nav-link ' + `${s.animationTarget2}`}>Kutubxona</NavLink>


                        <NavLink to="/OnlainDarslar" style={{fontSize: '20px', color: '#9C9B9C'}}
                                 className={'text-decoration-none font-weight-bold nav-link ' + `${s.animationTarget3}`}>OnlainDarslar</NavLink>


                        <NavLink to="/IshJoylari" style={{fontSize: '20px', color: '#9C9B9C'}}
                                 className={'text-decoration-none font-weight-bold nav-link ' + `${s.animationTarget4}`}>IshJoylari</NavLink>


                        <NavLink to="/dialogs" style={{fontSize: '20px', color: '#9C9B9C'}}
                                 className={'text-decoration-none font-weight-bold nav-link ' + `${s.animationTarget5}`}>dialogs</NavLink>

                        <NavLink to="/profile" style={{fontSize: '20px', color: '#9C9B9C'}}
                                 className={'text-decoration-none font-weight-bold nav-link ' + `${s.animationTarget6}`}>profile</NavLink>
                    </Nav>
                    <Nav className="text-center ml-auto">
                        <NavLink to="/SignUp" className='nav-link'>
                            <button type={'button'} className='btn btn-success'>Sign Up</button>
                        </NavLink>



                        <SignInContainer/>







                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Carousel>
                <Carousel.Item>

                    <div className="" style={{height: '300px'}}></div>
                    <Carousel.Caption>
                        <h2 className='text-center pt-4'>Xush Kelibsiz <br/> Amaliy Matematika va Intekektual
                            Texnoligiyalar <br/> fakultetining rasmiy saytiga</h2>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="" style={{height: '300px'}}></div>
                    <Carousel.Caption>
                        <h2 className='text-center pt-4'>Xush Kelibsiz <br/> Amaliy Matematika va Intekektual
                            Texnoligiyalar <br/> fakultetining rasmiy saytiga</h2>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="" style={{height: '300px'}}></div>
                    <Carousel.Caption>
                        <h2 className='text-center pt-4'>Xush Kelibsiz <br/> Amaliy Matematika va Intekektual
                            Texnoligiyalar <br/> fakultetining rasmiy saytiga</h2>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> <Carousel.Item>

                <div className="" style={{height: '300px'}}></div>
                <Carousel.Caption>
                    <h2 className='text-center pt-4'>Xush Kelibsiz <br/> Amaliy Matematika va Intekektual
                        Texnoligiyalar <br/> fakultetining rasmiy saytiga</h2>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>


            </Carousel>

        </div>

    );
}
export default Navbarr





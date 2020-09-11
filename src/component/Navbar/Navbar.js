import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import photo from '../../assets/image/amiftIcon.jpg'
import {Carousel, Nav, NavDropdown} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'

const Navbarr = () => {

    let datchikComponent = React.createRef()
    let datchik = () => {
        if (datchikComponent.current.className == 'collapse navbar-collapse ') {
            datchikComponent.current.className = 'collapse navbar-collapse show '
        } else {
            datchikComponent.current.className = 'collapse navbar-collapse '
        }
    }

    return (
        <div className={s.backImage}>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand href="#"><img src={photo} className={s.image} alt="aa"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <NavLink to="/yangiliklar" style={{fontSize: '20px', color: '#9C9B9C'}}
                                     className='text-decoration-none font-weight-bold'>yangiliklar</NavLink>

                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/UstozlarJamoasi" style={{fontSize: '20px', color: '#9C9B9C'}}
                                     className='text-decoration-none font-weight-bold'>UstozlarJamoasi</NavLink>

                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/Kutubxona" style={{fontSize: '20px', color: '#9C9B9C'}}
                                     className='text-decoration-none font-weight-bold'>Kutubxona</NavLink>

                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/OnlainDarslar" style={{fontSize: '20px', color: '#9C9B9C'}}
                                     className='text-decoration-none font-weight-bold'>OnlainDarslar</NavLink>

                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/IshJoylari" style={{fontSize: '20px', color: '#9C9B9C'}}
                                     className='text-decoration-none font-weight-bold'>IshJoylari</NavLink>

                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/dialogs" style={{fontSize: '20px', color: '#9C9B9C'}}
                                     className='text-decoration-none font-weight-bold'>dialogs</NavLink>

                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/profile" style={{fontSize: '20px', color: '#9C9B9C'}}
                                     className='text-decoration-none font-weight-bold'>profile</NavLink>

                        </Nav.Link>
                        {/*<NavDropdown title="OnlainDarslar" id="collasible-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </Nav>
                    <Nav>
                        <Nav.Link><NavLink to="/SignUp" className='nav-link'>
                            <button type={'button'} className='btn btn-success'>Sign Up</button>
                        </NavLink></Nav.Link>
                        <Nav.Link eventKey={2}>
                            <NavLink to="/SignIn" className='nav-link'>
                                <button type={'button'} className='btn btn-danger'>Sign In</button>
                            </NavLink>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Carousel>
                <Carousel.Item>

                    <div className="" style={{height: '300px'}}></div>
                    <Carousel.Caption>
                        <h2 className=' text-center pt-4'>Xush Kelibsiz <br/> Amaliy Matematika va Intekektual
                            Texnoligiyalar <br/> fakultetining rasmiy saytiga</h2>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="" style={{height: '300px'}}></div>
                    <Carousel.Caption>
                        <h2 className=' text-center pt-4'>Xush Kelibsiz <br/> Amaliy Matematika va Intekektual
                            Texnoligiyalar <br/> fakultetining rasmiy saytiga</h2>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <div className="" style={{height: '300px'}}></div>
                    <Carousel.Caption>
                        <h2 className=' text-center pt-4'>Xush Kelibsiz <br/> Amaliy Matematika va Intekektual
                            Texnoligiyalar <br/> fakultetining rasmiy saytiga</h2>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> <Carousel.Item>

                <div className="" style={{height: '300px'}}></div>
                <Carousel.Caption>
                    <h2 className=' text-center pt-4'>Xush Kelibsiz <br/> Amaliy Matematika va Intekektual
                        Texnoligiyalar <br/> fakultetining rasmiy saytiga</h2>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>


            </Carousel>

        </div>
        // <div className={s.backImage}>
        //     <nav className="navbar navbar-expand-md">
        //
        //         <NavLink to="/#" className='navbar-brand'><img src={photo} className={s.image} alt="aa"/></NavLink>
        //         <button className="navbar-toggler " type="button" onClick={()=>datchik()}>
        //         <span className="">
        //             <img
        //                 src="https://marvel-live.freetls.fastly.net/canvas/2020/8/62b62409a3544aa88e478967592b8e44?quality=95&fake=.png&width=54"
        //                 alt=""/>
        //         </span>
        //         </button>
        //         <div className="collapse navbar-collapse" ref={datchikComponent} id="collapsibleNavbar">
        //             <ul className="navbar-nav align-items-center w-100">
        //                 <li className="nav-item"><NavLink to="/yangiliklar" className="nav-link font-weight-bold"
        //                                                   style={{
        //                                                       fontSize: '20px',
        //                                                       color: '#9C9B9C'
        //                                                   }}>Yangiliklar</NavLink></li>
        //                 <li className="nav-item"><NavLink to="/UstozlarJamoasi" className="nav-link font-weight-bold"
        //                                                   style={{
        //                                                       fontSize: '20px',
        //                                                       color: '#9C9B9C'
        //                                                   }}>UstozlarJamoasi</NavLink></li>
        //                 <li className="nav-item"><NavLink to="/Kutubxona" className="nav-link font-weight-bold" style={{
        //                     fontSize: '20px',
        //                     color: '#9C9B9C'
        //                 }}>Kutubxona</NavLink></li>
        //                 <li className="nav-item"><NavLink to="/OnlainDarslar" className="nav-link font-weight-bold"
        //                                                   style={{
        //                                                       fontSize: '20px',
        //                                                       color: '#9C9B9C'
        //                                                   }}>OnlainDarslar</NavLink></li>
        //                 <li className="nav-item"><NavLink to="/IshJoylari" className="nav-link font-weight-bold"
        //                                                   style={{
        //                                                       fontSize: '20px',
        //                                                       color: '#9C9B9C'
        //                                                   }}>IshJoylari</NavLink></li>
        //                 <li className="nav-item"><NavLink to="/dialogs" className="nav-link font-weight-bold"
        //                                                   style={{fontSize: '20px', color: '#9C9B9C'}}>dialogs</NavLink>
        //                 </li>
        //                 <li className="nav-item"><NavLink to="/profile" className="nav-link font-weight-bold"
        //                                                   style={{fontSize: '20px', color: '#9C9B9C'}}>profile</NavLink>
        //                 </li>
        //
        //
        //                 <li className='nav-item ml-0 ml-md-auto'><NavLink to="/SignUp" className='nav-link'>
        //                     <button type={'button'} className='btn btn-success'>Sign Up</button>
        //                 </NavLink></li>
        //                 <li className='nav-item'><NavLink to="/SignIn" className='nav-link'>
        //                     <button type={'button'} className='btn btn-danger'>Sign In</button>
        //                 </NavLink></li>
        //
        //
        //             </ul>
        //         </div>
        //
        //
        //     </nav>
        //

        // </div>
    );
}
export default Navbarr





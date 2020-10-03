import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbarr from "./component/Navbar/Navbar";
import {BrowserRouter, Route,} from "react-router-dom";
import YangiliklarContainer from "./component/Yangiliklar/YangiliklarContainer";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import SignUp from "./component/SignUp/SignUp";
import ProfileContainer from "./component/Profile/ProfileContainer";
import LoginPage from "./component/Login/Login";



function App() {

    return <BrowserRouter >


        <div className="mainFon container-fluid">
            <div className='container px-0'>
                <Navbarr/>

                <Route path='/yangiliklar' render={()=><YangiliklarContainer />}/>


                {/*<Route path='/UstozlarJamoasi' render={()=><UstozlarJamoasi/>}/>*/}
                {/*<Route path='/Kutubxona' render={()=><Kutubxona />}/>*/}
                {/*<Route path='/OnlainDarslar' render={()=><OnlainDarslar />}/>*/}
                {/*<Route path='/IshJoylari' render={()=><IshJoylari />}/>*/}
                <Route path='/dialogs'
                       render={ () => <DialogsContainer/> }/>
                <Route path='/profile/:userId?'
                       render={ () => <ProfileContainer/> }/>
                <Route path='/SignIn' render={()=><LoginPage/>}/>
                <Route path='/SignUp' component={SignUp}/>

            </div>
            <div style={{height: '700px'}}></div>

        </div>

    </BrowserRouter>

        ;
}


export default App;
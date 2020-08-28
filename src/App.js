import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./component/Navbar/Navbar";
import {BrowserRouter, Route,} from "react-router-dom";
import UstozlarJamoasi from "./component/UstozlarJamoasi/UstozlarJamoasi";
import Kutubxona from "./component/Kutubxona/Kutubxona";
import OnlainDarslar from "./component/OnlainDarslar/OnlainDarslar";
import IshJoylari from "./component/IshJoylari/IshJoylari";
import Profile from "./component/Profile/Profile";
import YangiliklarContainer from "./component/Yangiliklar/YangiliklarContainer";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import SignIn from "./component/SignIn/SignIn";
import SignUp from "./component/SignUp/SignUp";



function App(props) {

    return <BrowserRouter>
        <div className='container-fluid'>
            <Navbar/>
            <Route path='/yangiliklar' render={()=><YangiliklarContainer />}/>
            {/*<Route path='/UstozlarJamoasi' render={()=><UstozlarJamoasi/>}/>*/}
            {/*<Route path='/Kutubxona' render={()=><Kutubxona />}/>*/}
            {/*<Route path='/OnlainDarslar' render={()=><OnlainDarslar />}/>*/}
            {/*<Route path='/IshJoylari' render={()=><IshJoylari />}/>*/}
            <Route path='/dialogs'
                   render={ () => <DialogsContainer/> }/>
            <Route path='/profile'
                   render={ () => <Profile/> }/>
            <Route path='/SignIn' component={SignIn}/>
            <Route path='/SignUp' component={SignUp}/>

        </div>
    </BrowserRouter>

        ;
}


export default App;

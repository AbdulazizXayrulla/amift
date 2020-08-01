import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Col, Row, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./component/Navbar/Navbar";
import {BrowserRouter, Route,} from "react-router-dom";
import Yangiliklar from "./component/Yangiliklar/Yangiliklar";
import UstozlarJamoasi from "./component/UstozlarJamoasi/UstozlarJamoasi";
import Kutubxona from "./component/Kutubxona/Kutubxona";
import OnlainDarslar from "./component/OnlainDarslar/OnlainDarslar";
import IshJoylari from "./component/IshJoylari/IshJoylari";
import Users from "./component/Users/Users";
import Dialogs from "./component/Dialogs/Dialogs";
import Profile from "./component/Profile/Profile";

function App(props) {
    console.log(props.AddNew)
    return <BrowserRouter>
        <div className='container'>
            <Navbar/>
            <Route path='/yangiliklar' render={()=><Yangiliklar yangiliklar={props.state.yangiliklar} AddNew={props.AddNew}/>}/>
            <Route path='/UstozlarJamoasi' render={()=><UstozlarJamoasi UstozlarJamoasi={props.state.UstozlarJamoasi}/>}/>
            <Route path='/Kutubxona' render={()=><Kutubxona Kutubxona={props.state.Kutubxona}/>}/>
            <Route path='/OnlainDarslar' render={()=><OnlainDarslar OnlainDarslar={props.state.OnlainDarslar}/>}/>
            <Route path='/IshJoylari' render={()=><IshJoylari IshJoylari={props.state.IshJoylari}/>}/>
            <Route path='/dialogs'
                   render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
            <Route path='/profile'
                   render={ () => <Profile state={props.state.profilePage}
                                           addMessage={props.addMessage}
                   /> }/>

            <Route path='/Users' component={Users}/>

        </div>
    </BrowserRouter>

        ;
}


export default App;

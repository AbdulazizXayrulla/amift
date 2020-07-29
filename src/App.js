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

function App(props) {
    return <BrowserRouter>
        <div className='container'>
            <Navbar/>
            <Route path='/yangiliklar' render={()=><Yangiliklar yangiliklar={props.yangiliklar}/>}/>
            <Route path='/UstozlarJamoasi' render={()=><UstozlarJamoasi UstozlarJamoasi={props.UstozlarJamoasi}/>}/>
            <Route path='/Kutubxona' render={()=><Kutubxona Kutubxona={props.Kutubxona}/>}/>
            <Route path='/OnlainDarslar' render={()=><OnlainDarslar OnlainDarslar={props.OnlainDarslar}/>}/>
            <Route path='/IshJoylari' render={()=><IshJoylari IshJoylari={props.IshJoylari}/>}/>
            <Route path='/Users' component={Users}/>
        </div>
    </BrowserRouter>

        ;
}

export default App;

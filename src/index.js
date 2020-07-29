import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let yangiliklar = [
    {id: 1, matni:' Олий ўқув юртлари талабалари учун мўлжалланган ушбу Ўзбекистон'},
    {id:2,matni:'hhahhahah'},
    {id:3,matni:'fgfgfgfgfgf'},
    {id:4,matni:'trtrtrtrt'},
    {id:5,matni:'sdsdsdsdsdsd'},


]
let UstozlarJamoasi = [
    {id: 1, ismi:'Farrux'},
    {id:2,ismi:'Sardor'},
    {id:3,ismi:'Bekzod'},
    {id:4,ismi:'Joxa'},
    {id:5,ismi:'Sancho'},


]
let Kutubxona = [
    {id: 1, kitobNomi:'ertak'},
    {id:2,kitobNomi:'lirika'},
    {id:3,kitobNomi:'Adabiyot'},
    {id:4,kitobNomi:'komediya'},
    {id:5,kitobNomi:'Sherlar'},


]
let OnlainDarslar = [
    {id: 1, fanNomi:'matematika'},
    {id:2,fanNomi:'fizika'},
    {id:3,fanNomi:'inglistili'},
    {id:4,fanNomi:'informatika'},
    {id:5,fanNomi:'AxborotXavfsizligi'},


]
let IshJoylari = [
    {id: 1, turi:'mardikor'},
    {id:2,turi:'programmist'},
    {id:3,turi:'sovdagar'},
    {id:4,turi:'dehqon'},
    {id:5,turi:'doktor'},


]
ReactDOM.render(
    <React.StrictMode>
        <App yangiliklar={yangiliklar} UstozlarJamoasi={UstozlarJamoasi} Kutubxona={Kutubxona} OnlainDarslar={OnlainDarslar} IshJoylari={IshJoylari}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

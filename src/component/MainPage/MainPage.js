import React from "react";
import s from './MainPage.module.css'
import rektor from './../../assets/image/Rektor.jpg'
import raima from './../../assets/image/RaimaXakimovna.jpg'
import uzmu from './../../assets/image/uzmu.jpg'
import uzmu1 from './../../assets/image/uzmu1.jpg'
import uzmu2 from './../../assets/image/uzmu2.jpg'
import onlain from './../../assets/image/onlain.jpg'
import eye from './../../assets/image/eye.png'
import ok from './../../assets/image/okk.png'
import ok1 from './../../assets/image/ok12.jpg'

const MainPage=()=> {


        return (<section id="cardlar" className={`px-3 pt-3 `+s.marginTopResponse}>

            <div className="row mt-3 mt-sm-3">
                <div className="col-md-9">
                    <div className="d-flex">

                            <a href="#" className="nav-link p-0 font-family-bold text-uppercase">Yangiliklar</a>


                    </div>
                    <div className="row mt-2">
                        <div className="col-md-4 pr-0">
                            <div className="card bg-transparent border-0">
                                <div className="card-header p-0">
                                    <img src={rektor} alt="" className={`w-100 `+s.imgSizee}/>
                                </div>
                                <div className="card-body bg-transparent border-0 p-0 ml-sm-2 ml-2">
                                    <p className="son font-family-regular">21.01.2020</p>
                                    <p className="matn1 text-uppercase mb-0 font-family-regular">трио хаметовы на
                                        международном фестивале в будапеште
                                        заняло первое</p>
                                </div>
                                <div className="card-footer border-0 bg-transparent p-0 ml-2 ml-sm-2">
                                    <p className="matn2 mt-2">Семейное трио Хаметовых продолжает покорять международные
                                        цирковые
                                        арены и знакомить мир с узбекским цирковым</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pr-0">
                            <div className="card bg-transparent border-0">
                                <div className="card-header p-0">
                                    <img src={raima} alt="" className={`w-100 `+s.imgSizee}/>
                                </div>
                                <div className="card-body bg-transparent border-0 p-0 ml-sm-2 ml-2">
                                    <p className="son font-family-regular">21.01.2020</p>
                                    <p className="matn1 text-uppercase mb-0 font-family-regular">начало нового сезона 31
                                        августа! место.</p>
                                </div>
                                <div className="card-footer border-0 bg-transparent p-0 ml-2 ml-sm-2">
                                    <p className="matn2 mt-2">Государственное учреждение "Узбекгосцирк" 31 августа 16.00
                                        открывает свой новый цирковой сезон с большой праздничной программой</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-transparent border-0">
                                <div className="card-header p-0">
                                    <img src={uzmu} alt="" className={`w-100 `+s.imgSizee}/>
                                </div>
                                <div className="card-body bg-transparent border-0 p-0 ml-sm-2 ml-2">
                                    <p className="son font-family-regular">21.01.2020</p>
                                    <p className="matn1 text-uppercase mb-0 font-family-regular">"цирк под открытым
                                        небом"</p>
                                </div>
                                <div className="card-footer bg-transparent border-0 p-0 ml-sm-2 ml-2">
                                    <p className="matn2 mt-2">1.05.201г. с 18.00 до 20.00 часов на фасадной площади
                                        перед
                                        театрально-зрелищным корпусом РО</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 mt-sm-5">
                        <div className="col-md-4 pr-0">
                            <div className="card bg-transparent border-0">
                                <div className="card-header p-0">
                                    <img src={uzmu1} alt="" className={`w-100 `+s.imgSizee}/>
                                </div>
                                <div className="card-body bg-transparent border-0 p-0 ml-sm-2 ml-2">
                                    <p className="son font-family-regular">21.01.2020</p>
                                    <p className="matn1 text-uppercase mb-0 font-family-regular">трио хаметовы на
                                        международном фестивале в будапеште
                                        заняло первое</p>
                                </div>
                                <div className="card-footer border-0 bg-transparent p-0 ml-2 ml-sm-2">
                                    <p className="matn2 mt-2">Семейное трио Хаметовых продолжает покорять международные
                                        цирковые
                                        арены и знакомить мир с узбекским цирковым</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pr-0">
                            <div className="card bg-transparent border-0">
                                <div className="card-header p-0">
                                    <img src={onlain} alt="" className={`w-100 `+s.imgSizee}/>
                                </div>
                                <div className="card-body bg-transparent border-0 p-0 ml-sm-2 ml-2">
                                    <p className="son font-family-regular">21.01.2020</p>
                                    <p className="matn1 text-uppercase mb-0 font-family-regular">начало нового сезона 31
                                        августа! место.</p>
                                </div>
                                <div className="card-footer border-0 bg-transparent p-0 ml-2 ml-sm-2">
                                    <p className="matn2 mt-2">Государственное учреждение "Узбекгосцирк" 31 августа 16.00
                                        открывает свой новый цирковой сезон с большой праздничной программой</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card bg-transparent border-0">
                                <div className="card-header p-0">
                                    <img src={uzmu2} alt="" className={`w-100 `+s.imgSizee}/>
                                </div>
                                <div className="card-body bg-transparent border-0 p-0 ml-sm-2 ml-2">
                                    <p className="son font-family-regular">21.01.2020</p>
                                    <p className="matn1 text-uppercase mb-0 font-family-regular">"цирк под открытым
                                        небом"</p>
                                </div>
                                <div className="card-footer bg-transparent border-0 p-0 ml-sm-2 ml-2">
                                    <p className="matn2 mt-2">1.05.201г. с 18.00 до 20.00 часов на фасадной площади
                                        перед
                                        театрально-зрелищным корпусом РО</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="d-flex mr-5 mr-sm-5">


                            <a href="#" className="nav-link p-0 ml-4 font-family-regular text-uppercase">video galleriya</a>

                    </div>
                    <div className="row mt-2">
                        <div className="col-md-12">
                            <div className="card border-0 bg-transparent">
                                <div className="card-header p-0 border-0 d-sm-flex bg-transparent">
                                    <img src={uzmu2} alt="" className="w-50" style={{height: '75px'}}/>
                                    <p className="font-family-regular ml-2 ml-sm-2">Delfin Shou. Suv mushuklari va
                                        suv <br/>
                                        she'rlari</p>
                                </div>
                                <div className="card-body border-0 p-0">
                                    <a href="#"><span className="icon icon-playbutton icon-white fff"></span></a>
                                    <div className="aaa d-flex justify-content-between mt-1 mt-sm-1">
                                        <p className="son">20.01.2020</p>
                                        <div className="d-flex">
                                            <div className="ml-1">
                                                <p className="son"><img src={eye} className="ml-1"
                                                                         style={{width: '15px', height:'15px'}}/> 175
                                                </p>
                                            </div>
                                            <div className="ml-1">
                                                <p className="son"><img src={ok} className="ml-1"
                                                                        style={{width: '15px', height:'15px'}}/> 75
                                                </p>
                                            </div>
                                            <div className="ml-1 ">
                                                <p className="son"><img src={ok1} className="ml-1 mr-1" style={{width: '15px', height:'15px'}}/>3
                                                    {/*manashu yerga 2qo'ysa birnimalar chiqyapti?*/}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 nm">
                            <div className="card border-0 bg-transparent">
                                <div className="card-header p-0 border-0 d-sm-flex bg-transparent">
                                    <img src={uzmu2} alt="" className="w-50" style={{height: '75px'}}/>
                                    <p className="font-family-regular ml-2 ml-sm-2">Delfin Shou. Suv mushuklari va
                                        suv <br/>
                                        she'rlari</p>
                                </div>
                                <div className="card-body border-0 p-0">
                                    <a href="#"><span className="icon icon-playbutton icon-white fff"></span></a>
                                    <div className="aaa d-flex justify-content-between mt-1 mt-sm-1">
                                        <p className="son">20.01.2020</p>
                                        <div className="d-flex">
                                            <div className="ml-sm-2 ml-2">
                                                <p className="son"><span className="icon icon-eye ml-1"
                                                                         style={{width: '15px', height:'15px'}}></span> 175
                                                </p>
                                            </div>
                                            <div className="ml-sm-2 ml-2">
                                                <p className="son"><span className="icon icon-ok ml-1"
                                                                         style={{width: '15px', height:'15px'}}></span> 75</p>
                                            </div>
                                            <div className="ml-sm-2 ml-2">
                                                <p className="son"><span className="icon icon-ok rotet ml-1"
                                                                         style={{width: '15px', height:'15px'}}></span> 2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-sm-2  mt-2">
                        <div className="col-md-12">
                            <div className="card border-0 bg-transparent">
                                <div className="card-header p-0 border-0 d-sm-flex bg-transparent">
                                    <img src={uzmu2} alt="" className="w-50" style={{height: '75px'}}/>
                                    <p className="font-family-regular ml-2 ml-sm-2">Delfin Shou. Suv mushuklari va
                                        suv <br/>
                                        she'rlari</p>
                                </div>
                                <div className="card-body border-0 p-0">
                                    <a href="#"><span className="icon icon-playbutton icon-white fff"></span></a>
                                    <div className="aaa d-flex justify-content-between mt-1 mt-sm-1">
                                        <p className="son">20.01.2020</p>
                                        <div className="d-flex">
                                            <div className="ml-sm-2 ml-2">
                                                <p className="son"><span className="icon icon-eye ml-1"
                                                                         style={{width: '15px', height:'15px'}}></span> 175
                                                </p>
                                            </div>
                                            <div className="ml-sm-2 ml-2">
                                                <p className="son"><span className="icon icon-ok ml-1"
                                                                         style={{width: '15px', height:'15px'}}></span> 75</p>
                                            </div>
                                            <div className="ml-sm-2 ml-2">
                                                <p className="son"><span className="icon icon-ok rotet ml-1"
                                                                         style={{width: '15px', height:'15px'}}></span> 2</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-n3">
                        <div className="col-md-12 text-right">
                            <p className="kichik font-family-bold">Barcha videolar</p>
                        </div>
                    </div>
                    <div className="row mt-n2">
                        <div className="col-md-12">
                            <p className="katta text-uppercase font-family-semi-bold">foto galereya</p>
                        </div>
                    </div>
                    <div className="row mt-sm-1  mt-1">
                        <div className="col-md-12">
                            <img src={uzmu} alt="" className={`w-100 `+s.img1} />
                        </div>
                    </div>
                    <div className="row mt-sm-3  mt-3">
                        <div className="col-md-6 pr-2">
                            <img src={raima} alt="" className="w-100"/>
                        </div>
                        <div className="col-md-6 pl-2 mt-3 mt-md-0 ml-1 ml-md-0">
                            <img src={onlain} alt="" className="w-100"/>
                        </div>
                    </div>
                    <div className="row mt-sm-2  mt-2">

                    </div>
                </div>
            </div>
        </section>)


}
export default MainPage

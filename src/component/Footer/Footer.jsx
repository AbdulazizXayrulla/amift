import React from "react";
import telegram from '../../assets/image/003-telegram.png'
import video from '../../assets/image/001-video.png'
import facebook from '../../assets/image/002-facebook.png'
import instagram from '../../assets/image/004-instagram.png'
import phone from '../../assets/image/phone.png'
import user from '../../assets/image/user (1).png'
import s from './Footer.module.css'
const Footer =()=>{


        return <div className={`row mt-5 pt-5 `}>
            <div className="col-md-4 px-5 position-relative">
                <p className="font-weight-bold " style={{fontSize: '20px'}}>Contact us</p>
                <label htmlFor="as" className="position-relative" style={{top: '38px',left: '8px'}}><img
                    src={user} height="20" width="20"/></label>
                <input type="text" style={{width: '100%',height: '41px'}} placeholder="        Full Name"
                       className="border-0" id="as"/>

                    <label htmlFor="a" className="position-relative" style={{top: '19px',left: '5px',zIndex: '518'}}><img
                        src={phone} height="20"
                        width="20"/></label>
                    <input type="text" style={{width: '100%',transform: 'translateY(-20px)',height: '41px'}}
                           placeholder="        Phone Number" className="border-0" id="a"/>
                        <textarea className="form-control" rows="7" placeholder="Messege"></textarea>
                        <button type="button" className="btn btn-info w-50 text-center mt-3">Send</button>
            </div>
            <div className="col-md-4 px-5">
                <p className="font-weight-bold " style={{fontSize: '20px'}}>General</p>

                <p style={{fontSize: '20px',marginTop: '43px'}}>About as</p>
                <p style={{fontSize: '20px'}}>Company statistics</p>
                <p style={{fontSize: '20px'}}>Our team</p>
                <p style={{fontSize: '20px'}}>Contact</p>
                <p className="font-weight-bold " style={{fontSize: '20px',marginTop: '43px'}}>Follows us</p>
                <div className="d-flex w-100 justify-content-between pr-5">
                    <a href="https://t.me/AB_XAYRULLAYEV" target="_blank"><img src={telegram} height="40" width="40"/></a>
                    <img src={facebook} height="40" width="40"/>
                    <a href="https://www.instagram.com/xayrullayevabdulaziz100" target="_blank"> <img src={instagram} height="40" width="40"/></a>

                    <a href="https://www.youtube.com/channel/UCKM83opB3lT5pPSWS5UCntg/videos?view_as=subscriber" target="_blank"> <img src={video} height="40" width="40"/></a>


                </div>
                <p style={{marginTop: '34px'}}><b>Developer:</b>Xayrullayev Abdulaziz</p>
            </div>
            <div className="col-md-4 px-5">
                <p className="font-weight-bold " style={{fontSize: '20px'}}>Company</p>

                <p style={{fontSize: '20px',marginTop: '43px'}}>Services</p>
                <p style={{fontSize: '20px'}}>Portfolio</p>
                <p style={{fontSize: '20px'}}>Blog</p>

                <p className="font-weight-bold " style={{fontSize: '20px',marginTop: '87px'}}>Contact</p>
                <p style={{fontSize: '22px',marginTop: '6px'}} className="d-inline-block">(94) <span
                    className="font-weight-bold d-inline"
                    style={{transform: 'translateY(5px)',fontSize: '25px'}}>654-66-06</span></p>
                <p style={{fontSize: '22px'}} className="d-inline-block">(94) <span
                    className="font-weight-bold d-inline"
                    style={{transform: 'translateY(5px)',fontSize: '25px'}}>654-66-06</span></p>
            </div>

        </div>


    }

    export default Footer


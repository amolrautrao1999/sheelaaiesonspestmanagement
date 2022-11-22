import React from 'react'
import { useState } from 'react';
import style from '../css/popupicons.module.css'

const PopUpIcon = () => {
  const [visible,setVisible]=useState(false);

  const visibleBtn=()=>
  {
    const scrolled=document.documentElement.scrollTop;

    if(scrolled>200)
    {
      setVisible(true);
    }
    else
    {
      setVisible(false);
    }
  
  }
  window.addEventListener("scroll",visibleBtn)

    const moveTop=()=>
  {
    window.scrollTo({top:0,left:0,behavior:"smooth"})
  }
    return (
        <>
            <div className={` ${style.contactIcon}`}>

                <i className={`${style.moveTop}`} style={{visibility:visible?'visible':'hidden'}} id="scrollBtn" title="click to move top" onClick={moveTop}><span className={`bi bi-arrow-up`} ></span></i>

                <a href="https://wa.me/+919021136040?text=Hi, Give me further information about pest-control services."><i className={`${style.whatsapp}`} title="Whatsapp us"><span className={`bi bi-whatsapp`} ></span></i></a>

                <a href="tel:+919021136040 " className='text-decoration-none ms-2'> <i className={`${style.telephone}`} title="Whatsapp us"><span className={`bi bi-telephone-fill`} ></span></i></a>
            </div>
        </>
    )
}

export default PopUpIcon

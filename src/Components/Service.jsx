import React from 'react'
import style from '../css/home.module.css'
import ServiceCard from './ServiceCard'
import service from '../api/service_api'
const Service = () => {
  return (
    <>
      <div className="container-fuid">
        <section className={style.service}>
          <h2 className={`text-center py-5 text-secondary font-weight-bold ${style.heading}`} >OUR SERVICES</h2>
          <div className="container">
            <div className={`row ${style.cards}`}>
             { service.map((curVal,i)=>
             <ServiceCard key={curVal.id} name={curVal.name} imgSrc={curVal.imgsrc} desc={curVal.desc}/>
              )}
                
                
              
            </div>
            </div>
            </section>
            </div>
    </>
  )
}

export default Service

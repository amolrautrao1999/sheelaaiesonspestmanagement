// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import MyCarousel from './MyCarousel'
import style from '../css/home.module.css'
import ServiceCard from './ServiceCard'
import service from '../api/service_api'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <MyCarousel />
      <div className="container">
        <h4 className={`text-center py-4 text-secondary font-weight-bold ${style.heading}`} >WELCOME TO SHEELAAIE SONS PEST CONTROL MANAGEMENT </h4>
        <section className={`${style.about} container p-5`}>
        <p><i className="bi bi-caret-right-fill"></i> S.S.P.M has evolved to become one of Pune‘s most reputed Pest Control service‘ providers.</p>
          <p><i className="bi bi-caret-right-fill"></i> Sheelaaie Sons Pest Management has earned a reputation for Industry leadership in terms of its quality of Service as well as on time Delivery in Integrated Pest control service by being focused in this segment for the past 04 years.</p>
          <p><i className="bi bi-caret-right-fill"></i> Sheelaaie sons pest management was established in 2017 in Pune and have over 10 employees each with more than 3 years of experience in Pest control service.</p>
        </section>

      </div>
      <div className="container-fuid">
        <section className={style.service}>
          <h2 className={`text-center py-5 text-secondary font-weight-bold ${style.heading}`} >OUR SERVICES</h2>
          <div className="container">
            <div className={`row ${style.cards}`}>
             { service.map((curVal,i)=>
              (i<=2?<ServiceCard key={curVal.id} name={curVal.name} imgSrc={curVal.imgsrc}/>: null)
              )}
               </div>
            <NavLink to="/service" className={`btn btn-outline-primary text-uppercase my-4 mt-4`}>View All Services</NavLink>
          </div>
        </section>
       
      </div>

    </>
  )
}

export default Home

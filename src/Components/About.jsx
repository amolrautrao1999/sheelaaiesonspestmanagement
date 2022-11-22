import React from 'react'
import style from '../css/home.module.css'
import style2 from '../css/about.module.css'
import imgthumbnail from '../img/logo.jpg'
const About = () => {
  return (
    <>
      <div className="container pb-5">
        <h4 className={`text-center py-5 text-secondary font-weight-bold ${style.heading}`} >ABOUT SHEELAAIE SONS PEST CONTROL MANAGEMENT </h4>
        <section className="about container p-5">
          <div className="row">
            <div className="col-md-6">
              <p><i className="bi bi-caret-right-fill"></i> S.S.P.M has evolved to become one of Pune‘s most reputed Pest Control service‘ providers.</p>
              <p><i className="bi bi-caret-right-fill"></i> Sheelaaie Sons Pest Management has earned a reputation for Industry leadership in terms of its quality of Service as well as on time Delivery in Integrated Pest control service by being focused in this segment for the past 04 years.</p>
              <p><i className="bi bi-caret-right-fill"></i> Sheelaaie sons pest management was established in 2017 in Pune and have over 10 employees each with more than 3 years of experience in Pest control service.</p>
            </div>
            <div className={`col-md-6 ${style.imgthumbnail}`}>
              <img src={imgthumbnail} alt="img-thumbnail"/>
            </div>
          </div>

        </section>

      </div>
      <div className={`container-fluid ${style2.choose} pb-5`}>
        <h4 className={`text-center py-5 text-secondary font-weight-bold ${style.heading}`} >WHY CHOOSE US? </h4>
        <section className='container p-5'>
          <div className="row">            
            <div className={`col-md-6 ${style.imgthumbnail2}`}>
            
            </div>
            <div className="col-md-6 px-5">
            <div className={`${style2.choose_heading} m-2`}><i className="bi bi-shield-fill-check"></i><h3>Your safety</h3></div>
              <p className='px-3'>Your premise is your most important asset keep it protected! With over 06 years of experience in the industry, you‘re in safe hands with Sheelaaie sons pest management</p>
              <div className={`${style2.choose_heading} m-2`}><i className="bi bi-check-circle-fill"></i><h3>customize your needs</h3></div>
              <p className='px-3'> All of our professionally trained and experienced technicians take the utmost care when carrying out treatment at your premise and will work with your colleague to accommodate any needs.</p>
              <div className={`${style2.choose_heading} m-2`}><i className="bi bi-emoji-smile-fill"></i>  <h3>Follows Australian standards</h3></div>
              <p className='px-3'>All treatments are carried out by professional, licensed pest services technicians. We always adhere to Australian standards and use only the highest quality products to ensure your pest problem is treated thoroughly.</p>
             
            </div>
          </div>

        </section>

      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"><h3 className={`${style.heading } text-center text-uppercase`}>Our vision</h3> <p className='text-center px-5 pb-5'>Sheelaaie Sons Pest Management Will be one of the most admired service provider in Pune. </p></div>
          <div className="col-md-4"><h3 className={`${style.heading } text-center text-uppercase`}>Our Mission</h3> <p className='text-center px-5 pb-5'>We Shall be known as a reliable innovation and cost effective solution provider in service sector.</p></div>
          <div className="col-md-4"><h3 className={`${style.heading } text-center text-uppercase`}>Our Values</h3> <p className='text-center px-5 pb-5'>Developing and working with mutual trust. <br /> Commitment toward invoirenment. <br /> Quality in everything</p></div>
        </div>
      </div>
    </>
  )
}

export default About

import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../css/home.module.css'
// import ReactReadMoreReadLess from "react-read-more-read-less";
// import '.../node_modules/bootstrap/dist/css/bootstrap.min.css'
const ServiceCard = ({name,imgSrc,desc}) => {
    // const [name,imgsrc]=props;
    return (
        <>
         <div className="col-md-4 col-sm-6 col-xs-12">
            <div className={`card ${style.card}`} >
                <a href="" className='mt-4 mb-3'><img className="card-img-top" alt="Cardimage" src={imgSrc} /></a><h3>
              <a href="" className={style.serviceName}>{name}</a>
                </h3>
                <p style={{textAlign:"left"}}>
                {/* <ReactReadMoreReadLess
                charLimit={100}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{color:"blue",cursor:"pointer"}}
                readLessStyle={{color:"crimson",cursor:"pointer"}}
                    > */}
                    {desc}
                    {/* </ReactReadMoreReadLess> */}
                    </p>
                <NavLink to="/contact" className={`btn btn-primary ${style.btnContact}`}>Contact Now</NavLink>
            </div>
            </div>
        </>
    )
}

export default ServiceCard

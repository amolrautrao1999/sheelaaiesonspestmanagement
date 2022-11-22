import { Carousel } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import img1 from '../img/IMG1.png'
import img2 from '../img/IMG5.png'
import img3 from '../img/IMG6.png'


function CarouselFadeExample() {
  const size={
        height:"50rem",
        width:"100%"
      }
  const btn_contact={
        // height:"38rem",
        // width:"100%"
        padding:"12px",
        textDecoration:"none",
        margin:"50px 0"
      }
  const cHeading={
        textShadow:"0 0 3px #FF0000, 0 0 5px #0000FF"
      }
  return (
    <Carousel fade>
      
      <Carousel.Item >
        <img style={size}
          className="d-block w-100"
          src={img1} 
          alt="First slide"
        />
        <Carousel.Caption className='py-5'>
          <h1 className="carousel-heading" style={cHeading}>residential Pest Management</h1>
          <p style={cHeading}>To control Pest In sensitive premise with a minimum use of pesticides which are safe and less toxic in nature.</p>
          <NavLink className='btn-contact-carousel' style={btn_contact}>Contact Now</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={size}
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption className='py-5'>
          <h1 className="carousel-heading" style={cHeading}>Commercial Pest Management</h1>
          <p style={cHeading}> Our services ensure safety stability and the highest service efficiencies in equal measure.</p>
          <NavLink className='btn-contact-carousel' style={btn_contact}>Contact Now</NavLink>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={size}
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption className='py-5'>
          <h1 className="carousel-heading" style={cHeading}>Industrial Pest Management</h1>
          <p style={cHeading}>
            Don't worry our team developing and working with mutual trust
          </p>
          <NavLink className='btn-contact-carousel ' style={btn_contact}>Contact Now</NavLink>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
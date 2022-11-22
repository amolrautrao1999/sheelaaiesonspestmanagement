import React from 'react'
import '../css/enquiry.css'

const Enquiry = ({title,modal,buttonType,buttonTitle,closeBtn}) => {
  const submitForm=(e)=>
  {
    alert(`Some Technical problem we are working on it Please contact through email or whatsapp`)
  }
  return (
    <> 
     <div className="modal-dialog">
     <div className={`modal-content  ${modal}`}>
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">{title}</h3>
              {closeBtn?<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>:null}
              
            </div>
            <form onSubmit={submitForm}>
            <div className="modal-body">
            
                <div className="row">
                  <div className="col mb-4">
                    <label className='label'>First Name</label>
                    <input  type="text" className="form-control" placeholder="First name" required />
                  </div>
                  <div className="col mb-4">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                  </div>

                  <div className="form-group mb-4">
                    <label className='label'>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email' required />
                  </div>
                  <div className="form-group mb-4">
                    <label className='label'>Contact Number</label>
                    <input type="number" className="form-control" placeholder='Your Mobile' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                  </div>
                  <div className="form-group mb-4">
                    <label>Message</label>
                    <textarea className="form-control" placeholder='Your Message' id="exampleInputEmail1" aria-describedby="emailHelp">
                    </textarea>
                  </div>

                </div>
              
            </div>
            <div className="btnBottom p-3">
              <button type={buttonType} className="btn btn-danger me-2" data-bs-dismiss="modal">{buttonTitle}</button>
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
          </div>
        </div>
    </>
  )
}

export default Enquiry

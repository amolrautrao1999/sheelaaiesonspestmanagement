import React from 'react'

const TopBar = () => {
  return (
    <>
      <div className=" topbar container d-flex justify-content-between flex-wrap align-items-center">
        <p><a href="mailto:sheelaaiesons@gmail.com" className="text-decoration-none align-items-center"><i className='bi bi-envelope-fill'>&nbsp;</i> sheelaaiesons@gmail.com</a></p>
        <p><a href="tel:+919021136040" className="text-decoration-none "><i className='bi bi-telephone-outbound-fill' >&nbsp; </i> +91 9021136040</a></p>
      </div>
    </>
  )
}

export default TopBar

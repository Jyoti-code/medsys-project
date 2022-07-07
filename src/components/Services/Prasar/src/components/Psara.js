import React from 'react'

function Psara() {
  return (
    <>
      <div className="application">
    <div className="application-form-content flex">
      <h1>PSARA License</h1> <br/>
      <p>Private security business is thriving rapidly. Connect with Medsys to know the legalities.</p><br/>

      <br/>
      <ul>
        <li> <img src="images/business logo.jpeg"  alt=""/> <b>Business Served</b></li>
        <li> <img src="images/star logo.jpeg"  alt=""/> <b>9.6/10 Unfiltered Customer ratings</b></li>
        <li> <img src="images/smile logo.jpeg"  alt=""/> <b>Satisfaction or Money Back Guarntee</b></li>
      </ul>
    </div>

    <div className="application-form flex" id="flexx">
      <form action="">
        <input type="text" name="" placeholder="Full Name" required/> <br/>
        <input type="email" name="" placeholder="Email ID" required/> <br/>
        <input type="tel" name="" placeholder="Phone No." required/> <br/>
        <button type="submit"> <a href="#">Request a Callback</a></button>
      </form>
    </div>
  </div>

  <div className="top-footer">
    <p >Get in touch with us acquire various licenses, registrations, and certifications</p>
    <button type="submit"><a href="tel:+91 70204 38881">Call Now!</a></button>
  </div>
    </>
  )
}
export default Psara;

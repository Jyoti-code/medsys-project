import React from 'react'

function Trad() {
  return (
    <>
     <div class="application">
        <div class="application-form-content flex">
            <h1>Tradmark Registration</h1> <br/>
            <p>A trademark is a unique identity that makes your product, service or enterprise stand out from the rest.
                If you have a unique idea or logo, a trademark can protect it from illegal use permanently.</p>
               <p>We have a dedicated team and a completely online process for registering your trademark anywhere in
                India and also overseas!</p><br/>
            <br/>
            <ul>
                <li> <img src="images/business logo.jpeg" alt=""/>&nbsp;&nbsp; <b>Business Served</b></li>
                <li> <img src="images/star logo.jpeg"  alt=""/>&nbsp;&nbsp; <b>9.6/10 Unfiltered Customer ratings</b>
                </li>
                <li> <img src="images/smile logo (1).jpeg"alt=""/>&nbsp;&nbsp; <b>Satisfaction or Money Back Guarntee</b>
                </li>
            </ul>
        </div>
        <div class="application-form flex" id="flexx">
            <form action="">
                <input type="text" name="" placeholder="Full Name" required/> <br/>
                <input type="email" name="" placeholder="Email ID" required/> <br/>
                <input type="tel" name="" placeholder="Phone No." required/> <br/>
                <button type="submit"> <a href="tel:+918881069069">Request a Callback</a></button>
            </form>
        </div>
    </div>
    <div class="top-footer">
        <p >Contact us to know more about how we can help you with
            Trademark Registration</p>
        <button type="submit"><a href="tel:+918881069069">Call Now!</a></button>
    </div>     
    </>
  )
}
export default Trad;

import React from 'react'

function Shop() {
  return (
<>
    
<div class="application">
        <div class="application-form-content flex">
            <h1>Apply for Shop Establishment Registration</h1> <br/>
            <p>Contact our professionals to obtain shop establishment registration online for your business and shop
                establishment license is required for all the shops running in India!!</p><br/>

            <br/>
            <ul>
                <li> <img src="images/business logo.jpeg" alt=""/>&nbsp;&nbsp; <b>Business Served</b></li>
                <li> <img src="images/star logo.jpeg" alt=""/> &nbsp;&nbsp;<b>9.6/10 Unfiltered Customer
                        ratings</b>
                </li>
                <li> <img src="images/smile logo.jpeg" alt=""/>&nbsp;&nbsp; <b>Satisfaction or Money Back
                        Guarntee</b>
                </li>
            </ul>
        </div>

        <div class="application-form flex" id="flexx">
            <form action="">
                <input type="text" name="" placeholder="Full Name" required/> <br/>
                <input type="email" name="" placeholder="Email ID" required/> <br/>
                <input type="tel" name="" placeholder="Phone No." required/> <br/>
                <button type="submit"> <a href="#">Request a Callback</a></button>
            </form>
        </div>
    </div>
</>
  )
}
export default Shop;

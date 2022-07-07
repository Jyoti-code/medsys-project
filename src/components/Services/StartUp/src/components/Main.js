import React from 'react'

function Main() {
  return (
    
    <>
<div className="application">
        <div className="application-form-content flex">
            <h1>Startup India Scheme</h1> <br/>
            <p>The Startup India campaign is a welcome initiative to boost entrepreneurship in India. It promotes bank
                financing, simplifies the incorporation process and grants exemptions to startups. But, you need to
                qualify as an “Eligible Startup” to avail all these benefits!!</p><br/><br/>
            <ul>
                <li> <img src="images\business logo.jpeg" alt=""/>&nbsp;&nbsp; <b>Business Served</b></li>
                <li> <img src="images\star logo.jpeg"  alt=""/> &nbsp;&nbsp;<b>9.6/10 Unfiltered Customer ratings</b></li>
                <li> <img src="images\smile logo.jpeg"  alt=""/>&nbsp;&nbsp; <b>Satisfaction or Money Back Guarntee</b>
                </li>
            </ul>
        </div>
        <div className="application-form flex" id="flexx">
            <form action="">
                <input type="text" name="" placeholder="Full Name" required/> <br/>
                <input type="email" name="" placeholder="Email ID" required/> <br/>
                <input type="tel" name="" placeholder="Phone No." required/> <br/>
                <button type="submit"> <a href="tel:+918881069069">Request a Callback</a></button>
            </form>
        </div>
    </div>
    <div className="top-footer">
        <p >Get in touch with us acquire various licenses, registrations,
            and certifications</p>
        <button type="submit"><a href="#">Call Now!</a></button>
    </div>
    <h1 className="heading">What Is A Startup India Scheme?</h1>
        <div className="boxx1" >
            <p >Startup India Scheme is an initiative by the Government of India for generation of employment and
                wealth creation. The goal of Startup India is the development and innovation of products and services
                and increasing the employment rate in India .
            </p>
        </div>

    <div class="top-footer">
        <p >Get in touch with us acquire various licenses, registrations,
            and certifications</p>
        <button type="submit"><a href="#">Call Now!</a></button>
    </div>
    <h1 class="heading">What Is A Startup India Scheme?</h1>
        <div class="boxx1" >
            <p >Startup India Scheme is an initiative by the Government of India for generation of employment and
                wealth creation. The goal of Startup India is the development and innovation of products and services
                and increasing the employment rate in India .
            </p>
        </div>
        <script src="pp.js"></script>


    </>
  )
}
export default Main;

import React from 'react'
import csr from './csr';

function Main() {
  return (
    <>
      
    <div className="application">
       <div className="application-form-content flex">
      <h1>CSR-1 Registration for NGOs</h1> <br/>
      <p>NGOs seeking CSR funding cannot receive any without registering with the MCA by filing Form CSR-1.
        Let Medsys handle it for you and corporate CSR funding will make your social goals a reality!</p><br/>

      <br/>
      <ul>
        <li> <img src="images/business logo.jpeg"  alt=""/> <b>Business Served</b></li>
        <li> <img src="images/star logo.jpeg" alt=""/> <b>9.6/10 Unfiltered Customer ratings</b></li>
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
    <p >Form CSR-1 Filing at just ₹1999/- (inclusive of all taxes)</p>
    <button type="submit"><a href="tel:+918881069069">Call Now!</a></button>
  </div>

  <h3 className="heading">How Does CSR-1 Registration Work For You?</h3>
  <div className="boxx1">
    <span>
      <p>Form CSR-1 is for the ‘Registration of Entities for undertaking CSR Activities’. All entities planning CSR
        projects must submit this form to the MCA portal.</p>
    </span>
    <ul id="list">
      <li className="arroww1"><b>STEP 1:</b>
        <h4 >Online Documentation</h4>
      </li>
      <p style={{paddingLeft:'75px'}}>We address all your queries regarding the process and assist you in digitally
        verifying all your documents.</p>
      <li className="arroww1"> <b>STEP 2:</b>
        <h4 >Registration</h4>
      </li>
      <p style={{paddingLeft:'75px'}}>We complete the registration process on your behalf, make the necessary filings
        and submit it to the MCA.</p>
    </ul>
  </div>

    <section className="main-content">
      <div className="left" id="lefty" >
        <div  id="activeTableContentaa">
          <h1>Table Of Contents</h1>
          <hr/>
          <p> <a className="tabanchor" href="#overview" >Overview</a></p>
          <p> <a className="tabanchor" href="#importance" >Importance of CSR-1</a></p>
          <p> <a className="tabanchor" href="#laws" >Laws Associated With CSR </a></p>
          <p> <a className="tabanchor" href="#eligibility" >Eligibility Criteria for NGOs</a></p>
          <p> <a className="tabanchor" href="#form">Filing of Form for CSR Funding</a></p>
          <p> <a className="tabanchor" href="#checklist" >Checklist</a></p>
          <p> <a className="tabanchor" href="#documents" >Documents Required</a></p>
          <p> <a className="tabanchor" href="#attachment" >Attachments Required for Filing </a>
          </p>
          <p> <a className="tabanchor" href="#faq" >FAQs</a></p>
          <br/>
        </div> <br/>  
        <button type="submit" id="contact" ><a href="#contactus"><b style={{color:"white"}}>
              CONTACT US </b></a>
        </button>
      </div>

      {/* <!-- <button type="submit"> <a href="#">Contact Us</a></button> --> */}

      <div className="right1" id="necessity">
        <div className="necessity">
          <h1 id="overview">Overview</h1>
          <br/>
          <p className="gap">It has now been made mandatory for NGOs to register in order to undertake CSR activities funded
            by companies and corporations.
            To receive CSR funding, all NGOs must register with the central government by submitting Form CSR-1.
            This requirement permits the effective monitoring of CSR spending in the country.</p>
          <br/>
          <h3>What is CSR-1?</h3>
          <p>CSR-1 is a registration form that is filed in order to get CSR funding. The Ministry of Corporate Affairs
            made it mandatory that all entities undertaking
            Corporate Social Responsibility (CSR) have to file eForm CSR-1 for all their CSR projects. This form is
            signed and submitted digitally after verification by a Chartered Accountant (CA),
            Company Secretary (CS) or Certified Management Accountant (CMA).This is done to monitor CSR spending in the
            country.
          </p>


        </div>
        <br id="importance"/><br/>

        <div className="ICI" id="content">
          <h1 >Importance of CSR-1</h1>
          <br/>

          <ul>

            <li>It boosts the public image of the entity</li>
            <li>It strengthens the goodwill of the NGO</li>
            <li>CSR activities become hassle-free</li>
            <li id="laws">Securing funding from corporate has fewer legal hurdles.</li>
          </ul>
        </div>
        <br/><br/>
        <div className="necessity">
          <h1>Laws Associated With CSR Registration</h1>
          <br/>
          <p className="gap">The laws related to the filing of eForm CSR-1 is according to Section 135 of the
            Companies Act 2013 and the Companies (Corporate Social Responsibility Policy) Rules, 2014.
            <br/>

          </p>
          <p id="eligibility"></p>
        </div>
        <br/><br/>
        <div className="ICI" id="eligibility">
          <h1>Eligibility Criteria for NGOs</h1>
          <br/>

          <ul>

            <li>NGOs can be eligible for CSR registration if they match the following criteria:</li>
            <li>The NGO is to be registered as a section 8 company registered under Section 12A and 80G of the IncomeTax Act.
              It should have at  least 3 years of experience in undertaking charitable activities.
            </li>
            <li>It should be a registered public trust registered under Section 12A and 80G of the Income Tax Act.
              It should have at least 3 years of experience in undertaking charitable activities.
            </li>
            <li id="form">It should be a registered society registered under Section 12A and 80G of the Income Tax Act.
              It should have at least 3 years of experience in undertaking charitable activities.
            </li>
          </ul>
        </div>
        <br/><br/>
        <div className="ICI">
          <h1>Filing of Form for CSR Funding</h1>
          <br/>
          <p>As per Rule 4(2) of the CSR Amendment Rules, 2021 the following procedure is to be followed:</p>

          <ul>

            <li>The entity has to electronically file the form CSR-1 with the Registrar in order to register itself with the Central Government</li>
            <li>As mentioned earlier, it has to be digitally verified by a CA, CS or CMA</li>
            <li id="checklist">On submission, a unique CSR registration number will be generated.</li>
          </ul>
        </div>
        <br/><br/>
        <div className="necessity">
          <h1>Checklist</h1>
          <br/>
          <p className="gap">Section 8 companies, public charitable trusts, or societies registered under section 12A and 80
            G of the Income Tax Act</p>
            <br/>
          <h3 >Time taken:</h3>
          <p id="documents"> CSR-1 registration is usually done within 1 week from the date of submission of all
            documents. We will file the Form CSR-1 on behalf of your organisation.
          </p>


        </div>

        <br/><br/>
        <div className="ICI">
          <h1>Documents Required</h1>
          <br/>

          <ul>

            <li>Copy of PAN card of the NGO</li>
            <li>Mail ID and mobile number</li>
            <li>Details of governing body members</li>
            <li>Copy of registration certificate</li>
            <li>Copy of 12A & 80G exemption certificate</li>
            <li>NGO Darpan ID</li>
            <li id="attachment">Digital signature of the authorised person with their PAN</li>
          </ul>
        </div>
        <br/><br/>
        <div className="ICI">
          <h1>Attachments Required for Filing Form CSR-1</h1>
          <br/>
          <ul>
            <li>Company CSR policy</li>
            <li>Company CSR report</li>
            <li>Company sustainability report</li>
            <li>Details of subsidiary(s)</li>
            <li id="faq">Details of other entity(s).</li>
          </ul>
        </div>

        <br/><br/>

        <div className="faq">
          <h1>FAQs</h1>
          <br/><br/>

          <section id="about">
            <hr/>
            <div className="accordion" id="faq">

              <div className="accordion__item">
                <button className="accordion__btn">

                  <span className="accordion__caption" >a.Is it mandatory for an NGO to do CSR-1
                    registration?</span>
                  <span className="accordion__icon"><i className="fa fa-plus"></i></span>
                </button>

                <div className="accordion__content">
                  <p >Yes, it is mandatory for an NGO
                    to do CSR-1 as soon as possible if they seek CSR funding. If they don’t seek CSR funding this isn’t
                    essential.</p>
                </div>
              </div>

              <div className="accordion__item">
                <button className="accordion__btn">

                  <span className="accordion__caption" >b. How long does it take to get the CSR-1
                    registration done?</span>
                  <span className="accordion__icon"><i className="fa fa-plus"></i></span>
                </button>

                <div className="accordion__content">
                  <p >CSR-1 registration gets done
                    within 1 week from the date of submission of all the documents properly.</p>
                </div>
              </div>

              <div className="accordion__item">
                <button className="accordion__btn">

                  <span className="accordion__caption" >c.Do I have to be physically present
                    during the process?</span>
                  <span className="accordion__icon"><i className="fa fa-plus"></i></span>
                </button>

                <div className="accordion__content">
                  <p >The process is 100% online. So,
                    it doesn’t require your physical presence at any stage. Relax in the comfort of your home while we
                    take care of everything.</p>
                </div>
              </div>


              <div className="accordion__item">
                <button className="accordion__btn">

                  <span className="accordion__caption" >d. Still Confused?</span>
                  <span className="accordion__icon"><i className="fa fa-plus"></i></span>
                </button>

                <div className="accordion__content">
                  <p > Speak to our experts who shall
                    solve all your
                    doubts.
                    Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com</p>
                </div>
              </div>

            </div>
            </section>
        </div>
      </div>
      </section>
 {/* <script src="csr.js"></script> */}
   <csr/>
    </>
  )
}
export default Main;

import React from 'react'
// import FrqItems from './FrqItems';
import Frq from './Frq'

function ShopSection() {
  return (
    <>
    <section className="main-content">
        <div className="left" id="lefty">
            <div id="activeTableContentaa">
                <h1>Table Of Contents</h1>
                <hr/>
                <p> <a className="tabanchor" href="#over">About</a></p>
                <p> <a className="tabanchor" href="#laws">Benefit </a></p>
                <p> <a className="tabanchor" href="#process">What is Shop Establishment </a></p>
                <p> <a className="tabanchor" href="#registration">Process</a></p>
                <p> <a className="tabanchor" href="#documents">Documents required </a> </p>

                <p> <a className=" tabanchor" href="#faq">FAQs</a></p>
                <br/>
            </div>
            <button type="submit" id="contact"><a href="#contactus"><b style={{color:"white"}}>
                        CONTACT US </b></a></button>
        </div>
        <br id="over"/><br/>
        <div className="right1" id="necessity over">
            <div className="necessity1" style={{overflowX:"auto"}}>
                <br/><br/>
                <h1 id="over">ABOUT SHOP ESTABLISHMENT REGISTRATION </h1>
                <br/>
                <table>
                    <tr>
                        <th>Meaning of shop</th>
                        <th>Objective</th>
                        <th>Who required</th>
                        <th>validity</th>
                        <th>Gumasta Licence</th>
                        <th> e-karmik</th>
                    </tr>
                    <tr>
                        <td>

                            <p> A place where any trade or business is carried and services are rendered to customers.
                                It
                                includes offices or warehouses for the purpose of trade.</p>
                        </td>
                        <td>
                            <p>Aim of Shop establishment is to govern and improve the working conditions of shop &
                                offices

                                and rights of the workers, like wages, leaves, holidays & work hours, etc.</p>
                        </td>
                        <td>
                            <p> It is mandatory for all business entities other than factories regulated by the
                                Factories
                                Act, 1948 to register under shopex.</p>
                        </td>
                        <td>
                            <p>Shop establishment certificate is valid for a certain period. This varies from State to
                                State. The owner shall apply for the renewal after expiry.</p>
                        </td>
                        <td>
                            <p>According to the Maharashtra Shops and Establishment Act 1948, the shop establishment
                                certificate is known as Gumasta License.</p>
                        </td>
                        <td>
                            <p>As per the Karnataka Shops and Commercial Establishments Act, 1961, the shop
                                establishment
                                license is referred to as e-Karmik.</p>
                        </td>
                    
                    </tr>
                </table>
                <br/>
            </div><br/><br/>
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <br/><br/>
           <div className="plc">
                <p>Related Read:How To Register A Company In India: A Step By Step Guide</p>
                <button type="submit" className="button">
                    <a href="">CLICK HERE</a></button>
            </div>
            <br id="laws"/><br/><br/>
            <div className="ICI">
                <h1>KEY BENEFITS OF SHOP ESTABLISHMENT REGISTRATION </h1><br/>

                <ul>
                    <h3> KEY BENEFITS OF SHOP ESTABLISHMENT REGISTRATION The significance of an obtaining Shop
                        Establishment Certificate can never be ignored as it emphasizes on the following aspects:</h3>
                    <br/>
                    <li>Regulation of working hours.</li>
                    <li>Prevention of child labour</li>
                    <li>Separate regulations regarding employment of female staff.</li>
                    <li>Proper guidelines for record-keeping </li>
                    <li>Fixed opening and closing time</li>
                    <li>Intervals for rest & lunch</li>
                    <li>Rules regarding Weekly-offs, working condition and wages</li>
                    <li>Important measures such as hygiene & sanitation, lighting and ventilation, safety precautions
                        and hazard management</li>



                </ul>
            </div><br id="process"/><br/><br/>
            <div className="ICI">
                <h1>WHAT IS SHOP ESTABLISHMENT KNOWN AS IN DIFFERENT STATES?</h1>
                <br/>
                <p>Shop Establishment registration is known by different names in various states. For instance, in Delhi
                    it is known as Delhi Shopex, in Bihar it is known as Trade License, in Maharashtra it is known as
                    Gumasta License, and e-Karmik in Karnataka. </p>

            </div>


            <br id="registration"/><br/><br/>
            <div className="ICI">
                <h1>Process of SHOPEX Registration</h1>
                <br/>
                <ul>
                    <li> <b>Step-1:</b> Upload the necessary Documents on our web portal.</li>
                    <li> <b>Step-2:</b> Choose the appropriate Package and Pay online with various payments modes
                        available..</li>
                    <li> <b>Step-3:</b> On placing order, your application will be assigned to one of our dedicated
                        professionals. .</li>
                    <li> <b>Step-4:</b> Our professional team will prepare your shop establishment application..</li>
                    <li> <b>Step-5:</b> Obtain shop establishment license from the labour department.</li>
                    <li> <b>Step-6:</b> Provide shop establishment certificate over the mail.</li>
                </ul>
            </div>
            <br id="documents"/>
            <br/><br/>
            <div className="ICI">
                <h1>Documents Required For Shop Establishment License </h1>
                <ul>
                    <li> Passport size photo</li>
                    <li> Aadhaar card</li>
                    <li>Proof of Business Address</li>
                    <li>Details of the employees and manager of the business</li>
                </ul>
            </div>
            <br id="faq"/><br/><br/>

            <div className="faq">
                <h1>FAQs</h1>
                <br/><br/>

        <section id="about" style={{marginRight : '95px'}}>
        <hr />

        <div className="accordion" id="faq">
            <Frq number={0} ques="Why is Shop Establishment
                                    a better option for me?"
                answer="If you have limited funds and want to get into fewer legal compliances for acting upon your
                                    business idea solely, Shop Establishment is the most suitable way to do start a sole
                                    proprietor business. Besides, you can easily grow your business over a period of
                                    time with lesser restrictions. ." />

            <Frq number={1} ques="How to get a shop
                                    establishment license?"
                answer="You need to
                                    provide a requisite document for obtaining shop establishment certificate or
                                    license. Our professional team shall submit the application with your documents and
                                    make follow up with government officials and obtain the certificate for you." />

            <Frq number={2} ques="How much is the validity
                                    of the shop establishment certificate?"
                answer="The shop
                                    establishment certificate validity period depends upon the state under which the
                                    business entity is operating. In some states validity is lifetime and some states
                                    range from 1 year to 5 years. After that, the owner of the shop has to apply for the
                                    renewal of his shop establishment license or certificate." />
            <Frq number={3} ques="d.
                                    Can i open current bank account with shop establishment certificate?"
                answer="Yes, Shop establishment certificate considered as a valid proof of you are doing
                                    business in the name of entity mentioned in the certificate and almost all bank
                                    accept shop establishment certificate as a documentary proof." />
            <Frq number={4} ques="e. How much time does it
                                    take to get a Gumasta License in Mumbai?"
                answer="If there are
                                    proper documentation and error-free application, it will hardly take 10 days to
                                    complete the verification process and issue the shop establishment license.." />
            <Frq number={5} ques="f. Whom to inform in case of
                                    change of any information in shop establishment registration application?"
                answer="In case you need
                                    to change any detail in your application for shop establishment certificate, you
                                    need to file a modification application with updated details of the organisation.." />
            <Frq number={6} ques="Still Confused?"
                answer="Speak to our experts who shall
                                    solve all your
                                    doubts.
                                    Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com" />

        </div>
    </section >
                
            </div>
        </div>
    </section>
 
    </>
  )
}
export default ShopSection;

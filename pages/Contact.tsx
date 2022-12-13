import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactMessage, setContactMessage] = useState('')

  const handleChangeName = (e : any) => {
    setName(e.target.value)

  }

  const handleChangeEmail = (e : any) => {
    setEmail(e.target.value)
  }

  const handleChangeContactMessage = (e:any) => {
    setContactMessage(e.target.value)
  }

  const handleContact = (e:any) => {
    e.preventDefault()
    // const obj = {
    //   name: name,
    //   email: email,
    //   message: contactMessage,
    //   lang: "en",
    //   captcha: ""
    // }
    // personService
    //   .create(personObj)
    //   .then(person => {
    //     setMessage(`Added ${newName}`)
    //     setMessageType('success')
    //     setShowMessage(true)
    //     setTimeout(function () {
    //       setShowMessage(false)
    //     }, 5000)
    //     setPersons(persons.concat(person))
    //   })
    //   .catch(error => {
    //     setMessage(error.response.data.error)
    //     setMessageType('error')
    //     setShowMessage(true)
    //     setTimeout(function () {
    //       setShowMessage(false)
    //     }, 5000)
    //   })

    // setNewName('')
    // setNewNumber('')
  }

  return (
    <>
      <main id="main">
        <section id="contact" className="contact d-flex flex-column justify-content-center align-items-center">
            <div className="container">
                <div className="contact-block1">
                    <div className="row">

                        <div className="col-lg-6 justify-content-center align-items-center">
                            <div className="contact-contact">

                                <h5>contact us</h5>
                                <br />
                                <h1>how can we help?</h1>

                                <br />
                                <a href="https://www.linkedin.com/company/asia-focus-group/">AFG LinkedIn</a><br />
                                <a href="tel:+65 6909 5800">+65 6909 5800</a>
                                <br /><br />
                                    <p>
                                        114 LAVENDER STREET<br />
                                        #02-57<br />
                                        SINGAPORE 338729<br /><br />
                                    </p>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                            <form onSubmit={handleContact} action="/Home/" method="POST" role="form" target="_blank">
                                {/* <!-- className="php-email-form" --> */}
                                <div className="row">

                                    <div className="col-lg-6">
                                        <div className="form-group contact-block1">
                                            <input  value={name} onChange={handleChangeName} type="text" name="contactname" className="form-control" id="contactname" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input value={email} onChange={handleChangeEmail} type="email" className="form-control" name="contactemail" id="contactemail" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        </div>
                                    </div>

                                    {/* @*<div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="contactsubject" id="contactsubject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        </div>
                                    </div>*@ */}

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea value={contactMessage} onChange={handleChangeContactMessage} className="form-control" name="contactmessage" id="contactmessage" rows={12} data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <div className="g-recaptcha" data-sitekey="6LftMdoZAAAAAIcEGPrz2aRYRwdit_CiM4vQrrpg" data-theme="dark"></div>
                                        </div>
                                    </div>

                                    {/* <!--<div className="col-lg-12 mb-3">
                                      <div className="loading">Loading</div>
                                      <div className="error-message"></div>
                                      <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>--> */}

                                    <div className="col-lg-12">
                                        <button type="submit" id="contactbtn" className="btn btn-defeault btn-send"/* onclick="javascript:contactUs();"*/>
                                            <i className="fa fa-refresh d-none" id="contactSpin"></i>
                                            &nbsp;Send message <i className="fa fa-arrow-right"></i>
                                        </button>
                                        {/* @*<input type="submit" className="btn btn-defeault btn-send" value="Send message">*@ */}
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
    </>
  )
} 
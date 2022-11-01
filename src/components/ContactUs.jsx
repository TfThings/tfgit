import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {Link} from "react-router-dom";
import BackButton from './BackButton';
import './ContactUs.css'

const ContactUs = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault() // prevents the page from being reloaded upon submission.

        emailjs.sendForm('service_gaznw8t', 'template_3quazbv', form.current, 'uKAhAFmHG6Nun59nr')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })

        e.target.reset()
    }

  return (
    <div>
        <div className='sby'>
            <h1 className='sfbt'>Contact Us</h1>
            <h2 className='sbyd'>Want to send us a message that needs a response? Fill out the form below and we will get back to you asap!</h2>
            <form className='sfb' ref={form} onSubmit={sendEmail}>
                <label className='sfemt'>Your Email</label>
                <input className='sfem inpt' name='from_name' type='text' placeholder='Put Your Email Here...' required/>
                <label className='sfemt'>Subject</label>
                <input className='sfsub inpt' name='to_name' type='text' placeholder='Put Subject Of Message Here...'/>
                <label className='sfemt'>Message</label>
                <textarea className='sfbody inpt' name="message" placeholder='Leave a message here and press send!' required/>
                <button className='embb' type="submit" value="Send">Send</button>
                {/* <input className='sfbody' type='text' name='message' placeholder='Leave a message here then press send...' required/> */}
                {/* <input className='hiddenTag' type='text' name='to_name' defaultValue={"VALUEHERE"} /> */}
                    {/* <textarea name="message" placeholder='Leave a message here and press send!'/> */}
                {/* <input type='text' name='message' placeholder='Leave a message here then press send...' required/>
                <button type="submit" value="Send">Send</button> */}
            </form>
        </div>
        <BackButton/>
    </div>
  )
}

export default ContactUs
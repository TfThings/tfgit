import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './EmailSect.css'

const EmailSect = ({isImprovement, place}) => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault() // prevents the page from being reloaded upon submission.

        emailjs.sendForm('service_gaznw8t', 'template_onwe1', form.current, 'uKAhAFmHG6Nun59nr')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })

        e.target.reset()
    }


  return (

    <div className='sectBody'>
        <h1 className='sectHeader' name='to_name'>{isImprovement ? "Do you know more about this place? Let us know!" : "Want to send us a message?"}</h1>
        <form className='body' ref={form} onSubmit={sendEmail}>
            <input className='hiddenTag' type='text' name='to_name' defaultValue={isImprovement ? "Need To Impove " + place.name : "Some one Left a Message"} />
            {/* <textarea name="message" placeholder='Leave a message here and press send!'/> */}
            <input type='text' name='message' placeholder='Leave a message here then press send...' required/>
            <button type="submit" value="Send">Send</button>
        </form>
    </div>
 
  )
}

export default EmailSect
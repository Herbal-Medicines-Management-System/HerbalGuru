import React from 'react';
import "./Contact.scss";
import emailjs from 'emailjs-com';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contact = () => {

    function sendMail(e) {
        e.preventDefault();
        emailjs.sendForm('service_fop7x2k', 'template_kk8xczi', e.target, 'uvGc_29zw5aL9-yKq').then(
            res => {
                console.log(res);
            }).catch(err => console.error(err));
    }

    return (
        <div className='contact'>
            <div className='wrapper'>
                <span>BE IN TOUCH WITH US:</span>
                <form
                    onSubmit={sendMail}
                >
                    <div className='mail'>
                        <input type='text' name='userEmail' placeholder='Enter your e-mail...' />
                        <button>JOIN HERBALGURU</button>
                    </div>
                </form>
                <div className='icons'>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <GoogleIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>

    );
};

export default Contact;
import React from 'react';
import { useEffect } from 'react';

const Footer = () => {

    return (
        <footer>
            <section>
                <div className='container footer py-5'>
                        <div className="container footer-row">
                            <div className="footer-col" id='first-col'>
                                <img className='footer-img' src="assets/mucc_logo.png"/>
                                <br/><br/>
                                <div className='footer-left-first-info'>
                                    <p>43 Scott Street</p>
                                    <p>Utica, NY 13501</p>
                                </div>
                                <br/>
                                <div className='footer-left-second-info'>
                                    <p>Hours: Monday - Thursday</p>
                                    <p>11:00 PM to 6:00 PM</p>
                                </div>
                            </div>
                            <div className="footer-col" id='footer-left'>
                                <br/>
                                <div id='footer-txt-left'>
                                    <ul><a id='nav-link-footer' className='nav-link' href='/'>Home</a></ul>
                                    <ul><a id='nav-link-footer' className='nav-link' href='/overview'>About</a></ul>
                                    <ul><a id='nav-link-footer' className='nav-link' href='/'>Events</a></ul>
                                    <ul><a id='nav-link-footer' className='nav-link' href='/'>Media</a></ul>
                                </div>
                            </div>
                            <div className="footer-col" id='footer-right'>
                                <br/>
                                <div id='footer-txt-right'>
                                    <ul><a id='nav-link-footer' className='nav-link' href='/programs'>Programs</a></ul>
                                    <ul><a id='nav-link-footer' className='nav-link' href='/educational-partners'>Partners</a></ul>
                                    <ul><a id='nav-link-footer' className='nav-link' href='/jobs-internships'>Resources</a></ul>
                                    <ul><a id='nav-link-footer' className='nav-link' href='https://secure.givelively.org/donate/midtown-utica-community-center?ref=ca8545b3-a601-4faf-bbec-1fd561eee2e3'>Donate</a></ul>
                                </div>
                            </div>
                            <div className="footer-col">
                                <h4 className='footer-contact'>Contact Us</h4>
                                <br/>
                                <div className='footer-local'>
                                    <p>(315)-496-1791</p>
                                    <p> <a id='contact-us-email-link' href="mailto:info@midtownutica.org">info@midtownutica.org</a> </p>
                                </div>
                                <div className='links'>
                                <h4 className='footer-follow'>Follow Us</h4>
                                <br/>
                                <ul id='footer-links' className="list-unstyled d-flex">
                                    <a className="link-light" href="https://www.facebook.com/MidtownUticaCommunityCenter">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a className="link-light" href="https://www.instagram.com/midtownutica">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a className="link-light" href="https://www.linkedin.com/company/midtown-utica-community-center">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </ul>
                            </div>
                        </div>  
                        
                    </div>
                </div>
            </section>           
        </footer>
    );
}

export default Footer;
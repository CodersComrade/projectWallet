import React from 'react';
import payment from '../../Images/payment.png';

const Footer = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Contact Us</h3>
                        <p><strong>Address:</strong> 56 King Street, New York</p>
                        <p><strong>Email:</strong> coders@comrade.com</p>
                        <p><strong>Phone:</strong> +1 964 123 456789</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Quick links</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms and Conditions</li>
                            <li>Purchasing Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h3>Company</h3>
                        <ul>
                            <li>About us</li>
                            <li>Career</li>
                            <li>Affiliate</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Subscribe our newsletter</h3>
                        <p>Subscribe to the mailing list to receive updates on special offers, new arrivals and our promotions.</p>
                        <input className='mb-3 w-100 p-2' type="email" name="" id="" placeholder='Enter Your Email Address' />
                        <button className='btn btn-danger w-100' type="submit">SUBMIT</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="mx-5">
                <div className="row">
                    <div className="col-md-6">
                        <p>Copyright © 2021. All rights reserved by Coders Comrade</p>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <img src={payment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__topContainer">
                    <div className="footer__topContent">
                        <h2>See personalized recommendations</h2>
                        <button className="footer__signInButton">Sign in</button>
                        <p className="footer__newCustomer">
                            New customer? <a href="#">Start here.</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="footer__container">
                <div className="footer__column">
                    <h3>Get to Know Us</h3>
                    <ul>
                        <li><a href="#">About Amazon</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press Releases</a></li>
                        <li><a href="#">Amazon Science</a></li>
                    </ul>
                </div>

                <div className="footer__column">
                    <h3>Connect with Us</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>

                <div className="footer__column">
                    <h3>Make Money with Us</h3>
                    <ul>
                        <li><a href="#">Sell on Amazon</a></li>
                        <li><a href="#">Sell under Amazon Accelerator</a></li>
                        <li><a href="#">Protect and Build Your Brand</a></li>
                        <li><a href="#">Amazon Global Selling</a></li>
                        <li><a href="#">Supply to Amazon</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Fulfilment by Amazon</a></li>
                        <li><a href="#">Advertise Your Products</a></li>
                        <li><a href="#">Amazon Pay on Merchants</a></li>
                    </ul>
                </div>

                <div className="footer__column">
                    <h3>Let Us Help You</h3>
                    <ul>
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Returns Centre</a></li>
                        <li><a href="#">Recalls and Product Safety Alerts</a></li>
                        <li><a href="#">100% Purchase Protection</a></li>
                        <li><a href="#">Amazon App Download</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="footer__bottomContainer">
                    <div className="footer__logo">
                        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
                    </div>
                    <div className="footer__selectors">
                        <select className="footer__language">
                            <option value="en">English</option>
                            <option value="hi">हिन्दी</option>
                            <option value="ta">தமிழ்</option>
                            <option value="te">తెలుగు</option>
                            <option value="ml">മലയാളം</option>
                            <option value="bn">বাংলা</option>
                        </select>
                        <select className="footer__country">
                            <option value="in">India</option>
                            <option value="us">United States</option>
                            <option value="uk">United Kingdom</option>
                            <option value="ca">Canada</option>
                            <option value="au">Australia</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer; 
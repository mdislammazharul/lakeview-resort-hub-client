import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div class="d-flex flex-column h-100 footer">

            {/* <!-- FOOTER --> */}
            <footer class="w-fluid py-4 flex-shrink-0">
                < div class="container py-4" >
                    <div class="row gy-4 d-flex justify-content-between footer">
                        <div class="col-lg-4 col-md-6">
                            <h5 class="h1 text-white">Lake View Resort Hub</h5>
                            <p class="small text-muted">Lake View Resort Hub is a specialized resort booking service, where anyone can book his preferred resort from anywhere to anyplace in the world.</p>
                            <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved.
                                <a class="text-primary" href="https://www.github.com/mdislammazharul">Md Mazharul Islam</a>
                            </p>
                        </div>
                        <div class="col-lg-2 col-md-6">
                            <h5 class="text-white mb-3">Quick links</h5>
                            <ul class="list-unstyled text-muted">
                                <li><a href="/home#reviewers">Reviewers</a></li>
                                <li><a href="/home#faq">FAQ</a></li>
                                <li><a href="/home#services">Services</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h5 class="text-white mb-3">Subscribe</h5>
                            <p class="small text-muted">Please Subscribe Out Site to Get Daily Travel Tips</p>
                            <form action="#">
                                <div class="input-group mb-3">
                                    <input class="form-control" type="text" placeholder="Recipient's email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </footer >
        </div >
    );
};

export default Footer;
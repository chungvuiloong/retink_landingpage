import React from 'react';

const Footer = () => {
    // rgba(235,235,235,var(--tw-bg-opacity)
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: 'rgba(235,235,235,1)' }}>
                <div className="container">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <div>Product by Retink Media UG</div>
                            <div>Bonn, Germany</div>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <div>Get Early Access</div>
                            <div>Provide Feedback</div>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <div>Connect with Us</div>
                                <div>
                                    <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" className='footer_sm_logo'/>
                                    <img src="https://img.icons8.com/fluency/48/null/twitter.png" className='footer_sm_logo'/>
                                    <img src="https://img.icons8.com/fluency/48/null/instagram-new.png" className='footer_sm_logo'/>
                                    <img src="https://img.icons8.com/fluency/48/null/linkedin.png" className='footer_sm_logo'/>
                                    <img src="https://img.icons8.com/fluency/48/null/youtube-play.png" className='footer_sm_logo'/>
                                    <img src="https://img.icons8.com/fluency/48/null/pinterest.png" className='footer_sm_logo'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark ">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-between align-items-center py-4">
                        <p className="col-md-4 mb-0 text-white">Copyright &copy; {(new Date()).getFullYear()} Retink</p>
                        <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Privacy Policy</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
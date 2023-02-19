import React from 'react';
import Header from './Header';

const Footer = () => {
    // rgba(235,235,235,var(--tw-bg-opacity)
    return (
        <>
            <footer>
                <div className="text-lg-start text-center bg-opacity-25 bg-secondary">
                    <div className="container p-4 pb-0">
                    <Header />
                        <section className="pb-4">
                            <div className="row">
                            <hr className="w-100 clearfix d-md-none" />
                            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mt-3">
                                <h5 className="mb-4 font-weight-bold">Product by Retink Media UG</h5>
                                <h5 className="mb-4 font-weight-bold">Bonn, Germany</h5>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mt-3">
                                <h5 className="mb-4 font-weight-bold">
                                Get Early Access
                                </h5>
                                <h5 className="mb-4 font-weight-bold">
                                Provide Feedback
                                </h5>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3 ">
                                <h5 className="mb-4 font-weight-bold">Connect with us</h5>
                                <a href="https://m.facebook.com/retinkmedia" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/48/null/facebook-new.png" className='footer_sm_logo mr-5' width='10%' alt='facebook_logo'/></a>
                                <a href="https://twitter.com/retinkmedia" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/48/null/twitter.png" className='footer_sm_logo mx-2' width='10%' alt='twitter_logo'/></a>
                                <a href="https://www.instagram.com/retinkmedia/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/48/null/instagram-new.png" className='footer_sm_logo mx-2' width='10%' alt='instagram_logo'/></a>
                                <a href="https://www.linkedin.com/company/retink/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/48/null/linkedin.png" className='footer_sm_logo mx-2' width='10%' alt='linkedin_logo'/></a>
                                <a href="https://www.youtube.com/channel/UCU8_MUvy4BLWqReEb-eEA4A" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/48/null/youtube-play.png" className='footer_sm_logo mx-2' width='10%' alt='youtube_logo'/></a>
                                <a href="https://www.pinterest.com/retinkmedia/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/fluency/48/null/pinterest.png" className='footer_sm_logo mx-2 ' width='10%' alt='pinterest_logo'/></a>
                            </div>

                            </div>
                        </section>
                    </div>
                </div>

                <div className="container-fluid bg-dark">
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
            </footer>
        </>
    );
};

export default Footer;
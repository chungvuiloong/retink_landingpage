import React from 'react';

const ServicesCardLayout = () => {
    return (
        <>
            <div className="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src="https://retink.io/istockphoto-655926676-612x612.jpg" class="card-img-top border h-100" alt="retink_logos" style={{ borderRadius: "25px"}}/>
                            <div class="card-body">
                                <h5 class="card-title">Logos</h5>
                                <p class="card-text">
                                Create a distinct logo designed to express and represent your brand identity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                        <img src="https://retink.io/andrew-neel-cckf4TsHAuw-unsplash.jpg" class="card-img-top border h-100" alt="blog_writing" style={{ borderRadius: "25px"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Blog Writing</h5>
                            <p class="card-text">
                            Write SEO enriched blog posts as long or short articles on any topic of your choice.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                        <img src="https://retink.io/animation.jpg" class="card-img-top border h-100" alt="animated_videos " style={{ borderRadius: "25px"}} />
                        <div class="card-body">
                            <h5 class="card-title">Animated Videos</h5>
                            <p class="card-text">Bring animated characters to life to keep your viewers engaged and entertained.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                        <img src="https://retink.io/dlxmedia-hu-tp93kAQkHSQ-unsplash.jpg" class="card-img-top border h-100"  alt="product_demo" style={{ borderRadius: "25px"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Product Demo</h5>
                            <p class="card-text">Introduce your product to potential customers in a clear and creative video.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                        <img src="https://retink.io/luca-onniboni-4v9Kk01mEbY-unsplash.jpg" class="card-img-top border h-100"  alt="copywriting" style={{ borderRadius: "25px"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Copywriting</h5>
                            <p class="card-text">Write compelling copies to boost your product, brand, service, or company.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card h-100 border-0">
                        <img src="https://retink.io/dole777-gPet7PdxI1Q-unsplash.jpg" class="card-img-top border h-100" width="75%" alt="social_media" style={{ borderRadius: "25px"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Social Media Ads</h5>
                            <p class="card-text">Boost sales and awareness with tailor made ads from experts.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesCardLayout;
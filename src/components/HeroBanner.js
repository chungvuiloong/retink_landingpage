import React from 'react';

const HeroBanner = () => {
    return (
        <>
            <div class="container col-xl-10 col-xxl-8 px-2 py-3">
                <div class="row align-items-center g-lg-5 py-3">
                    <div class="col-md-6 col-lg-8 text-center text-lg-start">
                        <h1 class="display-4 fw-bold lh-1 mb-3">Get Advanced AI</h1>
                        <h1 class="display-4 fw-bold lh-1 mb-3 ">+ Expert Created <span class='retink_red_font animated'></span></h1>
                        <p class="col-lg-10 fs-5">Boost your sales <span class="retink_red_font">10x faster</span> with content customized by our unique partnership of <span class="retink_red_font">human creativity and AI optimization</span></p>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <img src="https://retink.io/Retink-avatar.png" alt="retink_mascot" width="95%" className='floating'/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;
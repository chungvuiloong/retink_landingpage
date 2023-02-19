import React from 'react';

const VideoBanner = () => {
    return (
        <>
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold mb-5">Ret<span class="i">i</span>nk Content Solut<span class="i">i</span>on for Your Bus<span class="i">i</span>ness</h1>
                <div class="col-lg-6 mx-auto">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/u1wprFtkMLg" title="YouTube video" allowfullscreen></iframe>
                    </div>
                 </div>
            </div>
        </>
    );
};

export default VideoBanner;
import React from 'react';

const Newsletter = () => {
    return (
        <>
            <div class="px-4 py-4 text-center my-5">
                <h3 class="display-5 fw-bold mb-3">S<span class="i">i</span>gn Up For The BETA To See More</h3>
                <div class="col-lg-6 mx-auto">
                <p class="lead">Sign up to the Beta to know more and to receive the latest updates.</p>
                    <div class="input-group mt-4">
                        <input type="text" aria-label="First name" class="form-control" placeholder="Company name"/>
                        <input type="text" aria-label="Last name" class="form-control" placeholder="Email" />
                        <button class="btn text-white glow_effect" type="button" id="button-addon2" style={{ backgroundColor: "#cc0000"}}>Notify Me</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Newsletter;
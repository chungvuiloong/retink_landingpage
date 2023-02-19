import React from 'react';
import AI from '../assets/artificial-intelligence-image.png'

const FeaturesCard = () => {
    return (
        <>
            <section id="features" className="container bg-white">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center  d-flex justify-content-center justify-content-center-sm ">
                    <div class="col mb-4">
                        <div class="card text-center h-100 py-5 px-2"  style={{ borderRadius: "25px"}}>
                        <img src="https://retink.io/artificial-intelligence-image.png" class="mx-auto" alt="ai_image" width="15%"/>
                        <div class="card-body">
                            <h5 class="card-title">Make AI-assisted Content Choices</h5>
                            <p class="card-text mt-3">Access and order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card text-center h-100 py-5 px-2" style={{ borderRadius: "25px"}}>
                        <img src="https://retink.io/brand-identity-image.png" class="mx-auto" alt="brand_identity_image" width="15%" />
                        <div class="card-body">
                            <h5 class="card-title">Upload and Maintain Your Brand Identity</h5>
                            <p class="card-text mt-3">Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!</p>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card text-center h-100 py-5 px-2" style={{ borderRadius: "25px"}}>
                        <img src="https://retink.io/be-informed-image.png" class="mx-auto" alt="be_informed_image" width="15%" />
                        <div class="card-body">
                            <h5 class="card-title">Be Informed as We Create</h5>
                            <p class="card-text mt-3">Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates..</p>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4">
                        <div class="card text-center h-100 py-5 px-2 " style={{ borderRadius: "25px"}}>
                        <img src="https://retink.io/receive-and-review-image.png" class="mx-auto" alt="receive_and_review_image" width="15%" />
                        <div class="card-body">
                            <h5 class="card-title">Receive and Review</h5>
                            <p class="card-text mt-3">Track your content metrics for improvement and content strategy.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col mb-4 text-center">
                        <div class="card text-center h-100 py-5 px-2" style={{ borderRadius: "25px"}}>
                        <img src="https://retink.io/publish-and-monitor-image.png" class="mx-auto" alt="publish_and_monitor_image" width="15%" />
                        <div class="card-body">
                            <h5 class="card-title">Publish and Monitor Your Contents' Progress</h5>
                            <p class="card-text mt-3">The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturesCard;
import React from 'react';
import AI from '../assets/artificial-intelligence-image.png'

const FeaturesCard = () => {
    return (
        <>
            <div className="container">
                <div class="bg-white card">
                    <img src={AI} className="bg-white" alt="Card image cap" width="50px" sx={{}}/>
                    <div class="card-body">
                        <h4 class="card-title">Make AI-assisted Content Choices and Make it Human</h4>
                        <p class="card-text">Access and order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best human- content for your business.</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default FeaturesCard;
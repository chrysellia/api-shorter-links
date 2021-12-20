import React from 'react'
import './Hero.style.scss'

const Hero = () => {
    return (
        <div className="hero-component">
            <div className="hero-wrapper">
                <div className="hero-content">
                    <div className="main-content">More than just shorter links</div>
                    <div className="content-description">
                        <p>
                            Build your brand's recognition and get detailed <br/>
                            insights on how your links are performing.
                        </p>
                    </div>
                    <div className="content-button">
                        <div className="button-text">Get started</div>
                    </div>
                </div>

                <div className="hero-image">
                    <img src="images/illustration-working.svg"/>
                </div>
            </div>
        </div>
    )
}

export default Hero

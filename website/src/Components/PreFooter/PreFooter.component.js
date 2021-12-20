import React from 'react';
import './PreFooter.style.scss';

const PreFooter = () => {
    return (
        <div className="prefooter-component">
            <div className="prefooter-wrapper" style={{backgroundImage:'url("images/bg-boost-desktop.svg")'}}>
                <div className="prefooter-content">Boost your links today</div>
                <div className="prefooter-button">
                    <div className="button-text">Get started</div>
                </div>
            </div>
        </div>
    )
}

export default PreFooter

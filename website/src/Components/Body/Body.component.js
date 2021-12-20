import React from 'react'
import './Body.style.scss'

const Body = () => {
    return (
        <div className="body-component">
            <div className="body-wrapper" style={{backgroundImage:'url("images/bg-shorten-desktop.svg")'}}>
                <div className="body-input">
                    <input type="text" className="input-content" placeholder="Shorten a link here..."/>
                    <div className="input-button">
                        <div className="button-content">Shorten it!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body

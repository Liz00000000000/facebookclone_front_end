import React, { Component } from 'react'
import connectImg from '../imgs/connect.png'
import messageImg from '../imgs/message.png'
import galleryImg from '../imgs/online_gallery.png'
import eventsImg from '../imgs/events.png'
import momentsImg from '../imgs/moments.png'

export default class Landing extends Component {
    render() {
        return(
            <div className="landing-page">
                <div className="landing-hero">
                    <div className="inner-container">
                        <h1>Connect with all your friends</h1>
                        <p>
                            Tired of compromising your privacy to connect with your friends? Connect with them on So Not Facebook. We value your privacy and will not share your data.
                        </p>
                    </div>
                </div>
                <div className="intro-section">
                    <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#9183FF" fill-opacity="1" d="M0,96L40,117.3C80,139,160,181,240,202.7C320,224,400,224,480,192C560,160,640,96,720,85.3C800,75,880,117,960,144C1040,171,1120,181,1200,176C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    </svg>
                    <div className="feature-container">
                        <div className="individual-feature">
                            <div className="photo-container">
                                <img src={connectImg} alt=""/>
                            </div>
                            <div className="content-container">
                                <h2>Connect With Friends</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dui quis neque gravida.</p>
                            </div>
                        </div>
                        <div className="individual-feature">
                        <div className="photo-container">
                                <img src={messageImg} alt=""/>
                            </div>
                            <div className="content-container">
                                <h2>Message With Friends</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitnec dui.</p>
                            </div>
                        </div>
                        <div className="individual-feature">
                        <div className="photo-container">
                                <img src={galleryImg} alt=""/>
                            </div>
                            <div className="content-container">
                                <h2>Keep Your Friends Updated</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nam nec dui quis neque.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="additional-section">
                    <div className="inner-container">
                        <div className="item-container">
                            <div className="img-container">
                                <img src={eventsImg} alt=""/>
                            </div>
                            <div className="content-container">
                                <h4>Organize Events</h4>
                                <p>Nam egestas felis eget tellus sagittis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam accumsan eleifend libero quis pharetra.</p>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="content-container">
                                <h4>Share Moments</h4>
                                <p>Nam egestas felis eget tellus sagittis accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam accumsan eleifend libero quis pharetra.</p>
                            </div>
                            <div className="img-container">
                                <img src={momentsImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
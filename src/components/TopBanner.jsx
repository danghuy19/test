import React, { Component } from 'react'

export default class TopBanner extends Component {
    render() {
        return (
            <div className="top-banner">
                <div className="header">
                    <div className="container">
                        <div className="headr-left">
                            <div className="social">
                                <a href="#"><i className="facebook"></i></a>
                                <a href="#"><i className="twitter"></i></a>
                                <a href="#"><i className="gplus"></i></a>
                                <a href="#"><i className="pin"></i></a>
                                <a href="#"><i className="youtube"></i></a>
                            </div>
                            <div className="search">
                                <form>
                                    <input type="submit" value="" />
                                        <input type="text" value="" placeholder="Search..." />
                                        </form>
                                    </div>
                                    <div className="clearfix"></div>
                            </div>
                            <div className="headr-right">
                                <div className="details">
                                    <ul>
                                        <li><a href="mailto@example.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>info(at)example.com</a></li>
                                        <li><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+1)000 123 456789</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="banner-info">
                        <div className="container">
                            <div className="logo">
                                <h1><a href="index.html">GAME BOX</a></h1>
                            </div>
                            <div className="top-menu">
                                <span className="menu"></span>
                                <ul className="nav1">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="reviews.html">Reviews</a></li>
                                    <li><a href="typo.html">News</a></li>
                                    <li><a href="gallery.html">Gallery</a></li>
                                    <li><a href="contact.html">Mail</a></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                )
  }
}

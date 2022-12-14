import React from 'react'

const Header = () => {
    return (
        <div>
            {/* start header section */}
            <header className="header">
                {/* start navbar */}
                <div className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="row">
                            <div className="navbar-header page-scroll">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#myNavbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand page-scroll" href="/">
                                    <img src={"/img/outreachappnobgwhite.png"} alt="logo" />
                                </a>
                            </div>

                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="navbar-collapse collapse" id="myNavbar">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="active"><a className="page-scroll" href="#hero">Home</a></li>
                                    <li><a className="page-scroll" href="#about">About</a></li>
                                    <li><a className="page-scroll" href="#features">Features</a></li>
                                    <li><a className="page-scroll" href="#impact">Impact</a></li>
                                    <li><a className="page-scroll" href="#screenshots">Screenshots</a></li>
                                    <li><a className="page-scroll" href="#feedback">Feedback</a></li>
                                    <li><a className="page-scroll" href="#volunteer">Volunteer</a></li>
                                    <li><a className="page-scroll" href="#donate">Donate</a></li>
                                    <li><a className="page-scroll" href="#contact">Contact</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                {/* end navbar */}
            </header>
            {/* end header section */}
        </div>
    )
}


export default Header;
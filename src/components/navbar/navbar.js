import React, { Component } from 'react'
import {Link } from 'react-scroll'

import './styles/navbar.css'
import logoup from '../../images/logoup.png'

export default class Navbar extends Component {
  openMenu(){
  //TODO: ADD THE OPEN MENU HERE
  }
  render() {
    return (
      <div className="nav-bar">
        <header>
            <div className="menu">
                <div className="logo">
                    <a href="#">
                       <img  src={logoup} />
                    </a>
                </div>
                <div className="hamburguer" onClick={this.openMenu}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <nav className="menu-nav">
                    <Link
                      activeClass="active"
                      to="main-section"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                    Home
                    </Link>
                    <Link
                      activeClass="active"
                      to="work-section"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      
                    >
                    Work
                    </Link>
                    <Link
                      activeClass="active"
                      to="aboutme-section"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      
                    >
                    About
                    </Link>
                    <Link
                      activeClass="active"
                      to="workflow-section"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                    My Workflow
                    </Link>
                    <Link
                      activeClass="active"
                      to="contact-section"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                    Contact
                    </Link>
                </nav>
            </div>
        </header>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './styles/navbar.css'
import logoup from '../../images/logoup.png'

export default class Navbar extends Component {
  openMenu(){
   alert('this fucking is working');
  }
  render() {
    return (
      <div class="navbar">
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
                    <ul>
                        <li> <a href="#" className="active">Home</a></li>
                        <li> <a href="#">Work</a></li>
                        <li> <a href="#">About me</a></li>
                        <li> <a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
      </div>
    )
  }
}

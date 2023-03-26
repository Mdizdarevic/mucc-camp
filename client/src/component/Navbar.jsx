import React from 'react';
import { useEffect } from 'react';

const Navbar = () => {

  useEffect(() => {            
      
    window.addEventListener("scroll", () => {

        var navimg = document.getElementById("mucc-logo");
        navimg.style.width = '80px';
        navimg.style.height = '50px';
        navimg.style.transition = '0.5s';

        if (!window.pageYOffset) {
          navimg.style.width = '120px';
          navimg.style.height = '80px';
        }
    });
  }, []);

    return (
      <nav id='navbarID' className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <div className='container'>
            <img id='mucc-logo' src='assets/mucc_logo.png'/>
          </div>        
        </a>
         <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
             
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link" id="nav-link">
                  <div className="dropdown">
                    <button className="dropbtn">About</button>
                    <div className="dropdown-content">
                        <a href='/overview'>Overview</a>
                        <a href='/staff-executive-board'>Staff/Executive Board</a>
                        <a href='/news'>News</a>
                        <a href='/constituent-map'>Constituent Map</a>
                    </div>
                  </div>
                </div>             
           </li>
           <li className="nav-item">
            <div className="nav-link" id="nav-link">
              <div className="dropdown">
                <button className="dropbtn">Partners</button>
                <div className="dropdown-content">
                  <a href='/educational-partners'>Educational Partners</a>
                  <a href='/community-partners'>Community Partners</a>
                  <a href='/supporters'>Supporters</a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
          <div className="nav-link" id="nav-link">
            <div className="dropdown">
              <button className="dropbtn">Programs</button>
              <div className="dropdown-content">
                <a href='/programs'>Academics/Self-Development</a>
                <a href='/programs'>Arts and Culture</a>
                <a href='/programs'>Health and Wellness</a>
                <a href='/programs'>MUCCamp</a>
                <a href='/programs'>SYEP 2022</a>
              </div>
            </div>
          </div>
        </li>
           <li className="nav-item">
          <div className="nav-link" id="nav-link">
            <div className="dropdown">
              <button className="dropbtn">Events</button>
              <div className="dropdown-content">
                <a href='/calendar'>Calendar</a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" id="nav-link">
            <div className="dropdown">
              <button className="dropbtn">Media</button>
              <div className="dropdown-content">
                <a href='/photo-gallery'>Photo Gallery</a>
                <a href='https://www.linkedin.com/company/midtown-utica-community-center/'>LinkedIn</a>
                <a href='https://www.facebook.com/MidtownUticaCommunityCenter'>Facebook</a>
                <a href='https://www.instagram.com/midtownutica'>Instagram</a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" id="nav-link">
            <div className="dropdown">
              <button className="dropbtn">Get Involved</button>
              <div className="dropdown-content">
                <a href='https://secure.givelively.org/donate/midtown-utica-community-center?ref=ca8545b3-a601-4faf-bbec-1fd561eee2e3'>Donate</a>
                <a href='https://www.amazon.com/hz/wishlist/ls/3G7OX2OLWQ572/ref=hz_ls_biz_ex'>Amazon Wishlist</a>
                <a href='/'>Volunteer</a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <div className="nav-link" id="nav-link">
            <div className="dropdown">
              <button className="dropbtn">Resources</button>
              <div className="dropdown-content">
                <a href='/job-resources'>Job Resources</a>
                <a href='/scholarships'>Scholarships</a>
                <a href='/community-resources'>Community Resources</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
            <div className='lightdark-mode'>
              <a id='lightdark'>LIGHT&nbsp;</a>
              <label className="switch">
                <input id='darkToggle' type="checkbox"/>
                <span className="slider round"></span>
              </label>
              <a id='lightdark'>&nbsp;DARK</a>
            </div>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;
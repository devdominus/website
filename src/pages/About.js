import React from 'react'
import Adi from '../Assets/ADI.png'
import Ags from '../Assets/AGS.png'
import sejen from '../Assets/sejen.png'
import {Helmet} from 'react-helmet'

function About() {
    return (
            <div className="page">
               <Helmet>
               <title>Dev Dominus - About</title>
               <meta name="description" content="We are based in Chennai and Build Websites, Perform SEO setup and provide all forms of digital design" />
               </Helmet>
              <div className="about-parent">
              <span className="about-us-header">
              <div className="header-text1">Who</div>
              <div className="header-text2">We Are</div>
              </span> 
              <span className="about-us-body">We are a duo of technophiles who believe that in this growing age of technology, it is essential for businesses to be well equipped to build their digital presence so that they can broaden their reach and grow exponentially. With the seamless fusion of design and development we assure that you get only the very best. Customer satisfaction is our number one priority and we will not settle until every detail is executed perfectly. </span>
              </div>
              <div className="about-parent">
              <span className="about-us-header">
              <div className="header-text1">What</div>
              <div className="header-text2">We Do</div>
              </span> 
              <div className="cards-parent">
                <div className="card">
                <i className="fa fa-laptop fa-3x" aria-hidden="true"></i>
                <div className="card-title">Website Development</div>
                <div className="card-body">A robust and professional website is your greatest weapon to showcase yourself or your business and to provide services that have a global reach.</div>
                </div>
                <div className="card">
                <i className="fa fa-3x fa-search" aria-hidden="true"></i>
                <div className="card-title">SEO Setup</div>
                <div className="card-body">To be found on search engines like Google is essential to any business advertising their services and reach a wider audience.</div>
                </div>
                <div className="card">
                <i className="fa fa-3x fa-bullhorn" aria-hidden="true"></i>
                <div className="card-title">Digital Marketing</div>
                <div className="card-body">Build your Identity on the Internet with High Quality Digital Marketing Materials as well as setup all the necessary technologies for Digital Marketing.</div>
                </div>
                <div className="card">
                <i className="fa fa-3x fa-paint-brush" aria-hidden="true"></i>
                <div className="card-title">Digital Design</div>
                <div className="card-body">We are the answer to all things involving digital design. Logos, banners, posters, brochures, social media material, business cards, etc, we do it all. </div>
                </div>
              </div>
              </div>
              <div className="about-parent">
              <span className="about-us-header">
              <div className="header-text1">Meet</div>
              <div className="header-text2">The Team</div>
              </span> 
              <div className="team-cards-parent">
                <div className="team-card">
                <img src={Ags} className="team-image"/>
                <div className="card-title">V Aakash</div>
                <div className="card-body">Founder</div>
                <a href="https://www.linkedin.com/in/aakashgourishankar" target="_blank" rel="noopener noreferrer" ><i className="fa fa-linkedin icon team-icon" aria-hidden="true"></i> </a>
                </div>
                <div className="team-card">
                <img src={Adi} className="team-image"/>
                <div className="card-title">Aditya Ravishankar</div>
                <div className="card-body">Founder</div>
                <a href="https://www.linkedin.com/in/adityaravishankar310" target="_blank" rel="noopener noreferrer" ><i className="fa fa-linkedin icon team-icon" aria-hidden="true"></i> </a>
                </div>
                <div className="team-card">
                <img src={sejen} className="team-image"/>
                <div className="card-title">Sejen Rao</div>
                <div className="card-body">Lead - Malaysia</div>
                <a href="https://www.linkedin.com/in/sejenrao-mohanaraj-a63a90138" target="_blank" rel="noopener noreferrer" ><i className="fa fa-linkedin icon team-icon" aria-hidden="true"></i> </a>
                </div>
              </div>
              </div>
              
          </div>
    )
}

export default About;
import React from 'react'
import DevDominus from '../Assets/devdominus.png'
import Sibidharan from '../Assets/sibidharan.png'
import Zionrc from '../Assets/zionrc.png'
import fionainfrastructure from '../Assets/fionainfrastructure.png'
import gvacademy from '../Assets/gvacademy.png'
import Constructions from '../Assets/3mconstructions.png'
import yogi from '../Assets/yogi.png'
import Osh from '../Assets/osh.png'
import myfamilytree from '../Assets/myfamilytree.png'

function Projects() {
    return (
        <div className="page">
          <div className="project-header-container">
              <div className="header-text2">Projects</div>
            </div>
            <div className="project-card">
                <a href="https://sibidharan.me" target="_blank" rel="noopener noreferrer">
                <img src={Sibidharan} className="project-image"/>
                </a>
                <div className="project-content-container inner-box">
                <a href="https://sibidharan.me" target="_blank" rel="noopener noreferrer"><div className="project-inner-header">Learn Hacking With Sibidharan</div></a>
                <div className="project-content">A portfolio website of hacking wizard Sibidharan showcasing his profile and online course. This was made using Unyson.</div>
                </div>
            </div>
            <div className="project-card">
                <a href="https://myfamilytreegoc.com" target="_blank" rel="noopener noreferrer">
                <img src={myfamilytree} className="project-image"/>
                </a>
                <div className="project-content-container inner-box">
                <a href="https://myfamilytreegoc.com" target="_blank" rel="noopener noreferrer"><div className="project-inner-header">My Family Tree</div></a>
                <div className="project-content">My Family Tree Inc. is inspired by a team of nature lovers who understood that nature is the best gift presented for humanity. This was made using Elementor.</div>
                </div>
            </div>
            <div className="project-card">
                <img src={Osh} className="project-image"/>
                <div className="project-content-container inner-box">
                <div className="project-inner-header">Occupational Safety and Health</div>
                <div className="project-content">A locally hosted product which is used to collect occupational hazard details. This was made using HTML, JS, Bootstrap, jQuery, PHP, MySQL.</div>
                </div>
            </div>
            <div className="project-card">
            <a href="https://3mconstructions.in/" target="_blank" rel="noopener noreferrer">
                <img src={Constructions} className="project-image"/>
                </a>
                <div className="project-content-container inner-box">
                <a href="https://3mconstructions.in/" target="_blank" rel="noopener noreferrer">
                <div className="project-inner-header">3M Constructions</div>
                </a>
                <div className="project-content">3mconstructions is a construction company servicing clients all over Tamil nadu. The website was made using Elementor and Wordpress.</div>
                </div>
            </div>
            <div className="project-card">
            <a href="https://zionrc.co.in" target="_blank" rel="noopener noreferrer">
                <img src={Zionrc} className="project-image"/>
                </a>
                <div className="project-content-container inner-box">
                <a href="https://zionrc.co.in" target="_blank" rel="noopener noreferrer">
                <div className="project-inner-header">Zion Research and Consultants</div>
                </a>
                <div className="project-content">They are a prominent Market and Social Research company based out of Chennai. The website was made using Wordpress and Elementor.</div>
                </div>
            </div>
            <div className="project-card">
            <a href="https://fionainfrastructure.in" target="_blank" rel="noopener noreferrer">
                <img src={fionainfrastructure} className="project-image"/>
                </a>
                <div className="project-content-container inner-box">
                <a href="https://fionainfrastructure.in" target="_blank" rel="noopener noreferrer">
                <div className="project-inner-header">Fiona Infrastructure</div>
                </a>
                <div className="project-content">They are an all-round infrastructure company working across Tamil Nadu. The site exhibits their services and projects and was made using Wordpress and Elementor.</div>
                </div>
            </div>
            <div className="project-card">
            <a href="https://yogiimpex.co.in" target="_blank" rel="noopener noreferrer">
                <img src={yogi} className="project-image"/>
                </a>
                <div className="project-content-container inner-box">
                <a href="https://yogiimpex.co.in" target="_blank" rel="noopener noreferrer">
                <div className="project-inner-header">Yogi Impex</div>
                </a>
                <div className="project-content">Yogi Impex is an engineering company who produce and supply light fittings and accessories. This website was made using Wordpress and the images for the product catalog were edited using Illustrator.</div>
                </div>
            </div>
            <div className="project-card">
            <a href="https://greatvalueacademy.in" target="_blank" rel="noopener noreferrer">
                <img src={gvacademy} className="project-image"/>
                </a>
                <div className="project-content-container inner-box">
                <a href="https://greatvalueacademy.in" target="_blank" rel="noopener noreferrer">
                <div className="project-inner-header">Great Value Academy</div>
                </a>
                <div className="project-content">Great value academy are tutors for class XI and XII Commmerce branch students. The website was made using Elementor and wordpress.</div>
                </div>
            </div>
            <div className="project-card last">
                <img src={DevDominus} className="project-image"/>
                <div className="project-content-container inner-box">
                <div className="project-inner-header">Dev Dominus</div>
                <div className="project-content">Welcome to our site. Nice to meet you. This was made using ReactJS.</div>
                </div>
            </div>

        </div>
    )
}

export default Projects

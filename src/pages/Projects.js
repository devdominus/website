import React from 'react'
import Logo from '../Assets/LogoLow.png'

function Projects() {
    return (
        <div className="page">
          <div className="project-header-container">
              <div className="header-text2">Projects</div>
            </div>
            <div className="project-card">
                <img src={Logo} className="project-image"/>
                <div className="project-content-container inner-box">
                <div className="project-inner-header">Header</div>
                <div className="project-content">Content</div>
                </div>
            </div>
            <div className="project-card">
                <img src={Logo} className="project-image"/>
                <div className="project-content-container inner-box">
                <div className="project-inner-header">Header</div>
                <div className="project-content">Content</div>
                </div>
            </div>
            <div className="project-card">
                <img src={Logo} className="project-image"/>
                <div className="project-content-container inner-box">
                <div className="project-inner-header">Header</div>
                <div className="project-content">Content</div>
                </div>
            </div>
            <div className="project-card">
                <img src={Logo} className="project-image"/>
                <div className="project-content-container inner-box">
                <div className="project-inner-header">Header</div>
                <div className="project-content">Content</div>
                </div>
            </div>

        </div>
    )
}

export default Projects

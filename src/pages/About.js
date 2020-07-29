import React from 'react'
 

function About() {
    return (
            <div className="page">
              <div className="about-parent">
              <span className="about-us-header">
              <div className="header-text1">Who</div>
              <div className="header-text2">We Are</div>
              </span> 
              <span className="about-us-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non consectetur nibh. Proin pellentesque velit velit. Suspendisse bibendum lorem at mollis laoreet. Phasellus quis nisi egestas, aliquet odio quis, auctor orci. Mauris in est faucibus, maximus mauris in, feugiat velit. Aliquam accumsan dignissim auctor. Curabitur sit amet dui quis arcu tristique rutrum. Duis a erat justo. Aenean eget interdum tellus. Ut interdum, tellus vitae sollicitudin convallis, diam leo tristique magna, posuere sagittis mauris libero a metus. Praesent sit amet tincidunt lacus, id pretium lectus. Nullam sapien nulla, finibus vitae purus vel, egestas facilisis mi. Ut in suscipit neque, ac scelerisque dui. Sed metus dui, semper sit amet est non,</span>
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
                <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non con</div>
                </div>
                <div className="card">
                <i className="fa fa-3x fa-search" aria-hidden="true"></i>
                <div className="card-title">SEO Setup</div>
                <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non con</div>
                </div>
                <div className="card">
                <i className="fa fa-3x fa-bullhorn" aria-hidden="true"></i>
                <div className="card-title">Digital Marketing</div>
                <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non con</div>
                </div>
                <div className="card">
                <i className="fa fa-3x fa-mobile" aria-hidden="true"></i>
                <div className="card-title">Android App Development</div>
                <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non con</div>
                </div>
              </div>
              </div>
          </div>
    )
}

export default About;
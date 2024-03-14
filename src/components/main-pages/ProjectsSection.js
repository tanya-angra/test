import React from 'react'

export default function ProjectsSection() {
  return (
    <section className="section projects is-medium is-white has-text-centered">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Work</h1>
        <h2 className="subtitle is-size-5-desktop">Here are a few past design projects I've worked on. Want to see more? <a className="has-text-weight-normal" href="mailto:sahildhiman98765@gmail.com">Email me</a>.</h2>
        <div className="project-grid">  
          <div className="columns is-multiline is-mobile">
            <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure className="image is-3by2"><img className="project-thumb" src="/projects/web-developer.png" />
                <figcaption>
                  <h1 className="title is-size-5 is-size-4-widescreen">High-end, custom residential renovaters serving Fraser Valley homeowners.</h1><a className="button is-primary is-outlined is-rounded" href="https://www-dev.sunnybenefits.com/" target="_blank"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div className="column is-12-mobile is-half-tablet is-one-third-desktop"> 
              <figure className="image is-3by2"><img className="project-thumb" src="/projects/software-development.webp" />
                <figcaption>
                  <h1 className="title is-size-5 is-size-4-widescreen">Accounting and tax services characterized by quality, reliability and trust.</h1><a className="button is-primary is-outlined is-rounded" href="https://www.burkettandco.ca/" target="_blank"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure className="image is-3by2"><img className="project-thumb" src="/projects/web-scrap.jpeg" />
                <figcaption>
                  <h1 className="title is-size-5 is-size-4-widescreen">Blockchain pioneers bringing transparency, trust, and security to supply.</h1><a className="button is-primary is-outlined is-rounded" href="https://www.chronicled.com/" target="_blank"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
              <figure className="image is-3by2"><img className="project-thumb" src="/projects/web-automation.jpeg" />
                <figcaption>
                  <h1 className="title is-size-5 is-size-4-widescreen">Business savvy tech experts helping forward thinking companies get things done.</h1><a className="button is-primary is-outlined is-rounded" href="http://glcsolutions.ca" target="_blank"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div className="column is-12-mobile is-half-tablet is-one-third-desktop"> 
              <figure className="image is-3by2"><img className="project-thumb" src="/projects/web-3.png" />
                <figcaption>
                  <h1 className="title is-size-5 is-size-4-widescreen">Vancouver's tower crane rental service and support leader since 1974.</h1><a className="button is-primary is-outlined is-rounded" href="http://coupalcranes.com/" target="_blank"><span>Visit Website</span><span className="icon"><i className="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
            <div className="column is-12-mobile is-half-tablet is-one-third-desktop"> 
              <figure className="image is-3by2"><img className="project-thumb" src="/projects/cloud.jpg" />
                <figcaption>
                  <h1 className="title is-size-5 is-size-4-widescreen">Results-oriented, responsive and flexible full service civil engineering firm.</h1><a className="button is-primary is-outlined is-rounded" href="http://wedler.com" target="_blank"><span>View Website</span><span className="icon"><i className="fas fa-angle-right"></i></span></a>
                </figcaption>
                <div className="overlay"></div>
              </figure>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column"><a className="button is-primary is-outlined is-rounded is-medium has-text-weight-normal" href="https://github.com/dhimanromanregins"><span className="icon"><i className="fab fa-git"></i></span><span>See more on Github</span></a></div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function CompaniesSection() {
  return (
    <>
      <section className="section clients is-medium is-white has-text-centered has-border-top">
        <div className="container is-narrow">
          <div className="columns is-centered">
            <div className="column is-half">
              <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">I'm proud to have collaborated with some awesome companies:</h1>
            </div>
          </div>
          <div className="client-grid">
            <div className="columns is-multiline is-mobile">
              <div className="column is-half-mobile is-one-quarter-tablet">
              <figure className="image is-2x1"><img className="client-logo" src="toxsl.png" alt="ToXSL Logo" /></figure>

              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
              <figure className="image is-2x1"><img className="client-logo" src="ameotech-logo.png" alt="Ameotech Logo" /></figure>
              </div>
              <div className="column is-half-mobile is-one-quarter-tablet">
                <figure className="image is-2x1"><img className="client-logo" src="sm-header-logo-1.svg" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section call-to-action is-primary has-text-centered">
        <div className="container is-narrow">
          <div className="box">
            <div className="columns level">
              <div className="column level-item">
                <h1 className="title">Start a project</h1>
              </div>
              <div className="column level-item">
                <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
              </div>
              <div className="column level-item"><Link className="button is-success is-outlined is-rounded is-medium has-text-weight-normal" to="/project-planner"><span className="icon"><i className="fa-regular fa-hand-horns"></i></span><span>Let's do this</span></Link></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

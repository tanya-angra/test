import React from 'react'

export default function LandingPage() {
  return (
    <section className="hero is-white has-text-centered">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Web designer, Frontend Developer &amp; Mentor</h1>
              <h2 className="subtitle is-size-4-tablet">"I design and create visually appealing and user-friendly websites, crafting elegant solutions that enhance user experience. I'm passionate about my work and strive for excellence in every project."</h2>
              {/* <img className="avatar" src="" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
      {/* <img className="is-bottom" src="/hero-devices.svg" alt="Hero Devices" /> */}
      </div>
    </section>
  )
}

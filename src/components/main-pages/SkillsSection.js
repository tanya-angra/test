import React from "react";
import "boxicons";

export default function SkillsSection() {
  return (
    <section className="section skills has-text-centered">
      <div className="container is-narrow">
        <div className="box">
          <div className="content">
            <div className="columns is-centered">
              <div className="column">
              <div class="flip-container">
            <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x has-text-success"></i>
                <i class="fas fa-server fa-stack-1x has-text-dark icon-hover"></i>
            </span>
        </div>
                {/* <span class="fa-stack fa-2x">
                  <i class="fas fa-circle fa-stack-2x has-text-success"></i>
                  <i class="fas fa-server fa-stack-1x has-text-dark  icon-hover"></i>
                </span> */}
                <h1 className="title is-size-4 is-spaced">Web Designer</h1>
                <p>

                  In web design, I value well-thought-out information architecture, streamlined user interfaces, and meticulous attention to detail in data presentation
                </p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Frameworks I enjoy working on:
                </p>
                <p>wordpress,Bootstrap,Talwind CSS,SAAS</p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Development Tools:
                </p>
                <ul>
                  <li>Integrated Development Environment</li>
                  <li>Version Control</li>
                  <li>Package Managers</li>
                  <li>Package Managers</li>
                  <li>Database Management</li>
                  <li>API Testing and Documentation</li>
                </ul>
              </div>
              <div className="column">
              <div class="flip-container">
            <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x has-text-success"></i>
                <i class="fas fa-globe fa-stack-1x has-text-dark icon-hover"></i>
            </span>
        </div>
                {/* <span className="fa-stack fa-2x">
                  <i class="fas fa-circle fa-stack-2x has-text-success"></i>
                  <i class="fas fa-globe fa-stack-1x has-text-dark  icon-hover"></i>
                </span> */}
                <h1 className="title is-size-4 is-spaced">
                  Frontend Developer
                </h1>
                <p>
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser, love crafting new things. I love what
                  I create.{" "}
                </p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Languages I speak:
                </p>
                <p>HTML, Js, ReactJs,Dhtml, CSS, Sass, Git</p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Dev Tools:
                </p>
                <ul>
                  <li>Bootstrap</li>
                  <li>WebFlow</li>
                  <li>React Js</li>
                  <li>GitLab</li>
                  <li>Github</li>
                  <li>VSCode</li>
                </ul>
              </div>
              <div className="column">
                {/* <span className="fa-stack fa-2x">
                  <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i>
                  <i class="fas fa-chalkboard-teacher fa-stack-1x has-text-dark  icon-hover" aria-hidden="true"></i>
                </span> */}
                    <div class="flip-container">
            <span class="fa-stack fa-2x">
                <i class="fa-solid fa-circle fa-stack-2x has-text-success"></i>
                <i class="fas fa-chalkboard-teacher fa-stack-1x has-text-dark icon-hover"></i>
            </span>
        </div>
                <h1 className="title is-size-4 is-spaced">Mentor</h1>
                <p>
                  I genuinely care deeply about people, finding immense
                  gratification in actively and compassionately helping them
                  work on honing their craft.
                </p>
                <p className="list-title has-text-primary has-text-weight-normal">
                  Experiences I draw from:
                </p>
                <p>My Work Experiences</p>
                <p className="list-title has-text-primary has-text-weight-normal  ">
                  Mentor Stats:
                </p>
                <ul>
                  <li>2.5 + years experience</li>
                  <li>Multiple Programing Languages</li>
                  <li>Backend Framworks</li>
                  <li>FrontEnd Ideas</li>
                  <li>Multiple Could Serves Providers</li>
                  <li>Data Scraping</li>
                  <li>Automation Web, Desktop Apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const Mentorship = () => {
    return (
        <>
            <Navbar />
            <section className="hero is-white has-text-centered is-page-title">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-two-thirds">
                                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">I haven't met you, and this is crazy...</h1>
                                <h2 className="subtitle is-size-4-tablet">But if you need a mentor, then email me maybe.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <div className="container">
                        <figure className="image"><img className="is-bottom mentor" src="img/mentorship.svg" /></figure>
                    </div>
                </div>
            </section>
            <section className="section intro is-medium is-primary has-text-centered is-long-ish">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths">
                            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Being a developer is tough.</h1>
                            <h2 className="subtitle is-size-5-desktop has-text-centered has-text-weight-normal">It seems like every other day there's a new programming trend to learn, tool to master, and endless articles to read. Honestly, it can be overwhelming and intimidating. I know because I've walked more than a few miles in those shoes. So whether you're new to the field or simply looking for some guidance and support, I can help.</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section pricing has-text-centered">
                <div className="container is-narrow">
                    <div className="pricing-grid">
                        <div className="columns is-centered level">
                            <div className="column level-item">
                                <div className="box">
                                <span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className=" fas fa-user fa-stack-1x fa-inverse has-text-dark"></i></span>

                                    <h1 className="title is-size-4 is-spaced mt-5">Spot Mentoring</h1>
                                    <h2 className="title price is-size-2">$150</h2>
                                    <p>1 hour of candid conversation and advice as needed with no long term, ongoing commitment required.</p>
                                    <p className="list-title has-text-primary has-text-weight-bold is-family-primary is-size-6">Good for:</p>
                                    <ul>
                                        <li>All developers</li>
                                    </ul><Link className="button is-dark is-rounded is-medium is-fullwidth has-text-weight-normal has-text-success" to="https://buy.stripe.com/dR6eVQ8cb6GGfgA000">Book a session</Link>
                                </div>
                            </div>
                            <div className="column level-item">
                                <div className="box"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fas fa-desktop  fa-stack-1x has-text-dark"></i></span>
                                    <h1 className="title is-size-4 is-spaced mt-5">Production Support</h1>
                                    <h2 className="title price is-size-2">$500</h2>
                                    <p> 4 hours of targeted feedback and programming critique to help you focus on delivering your best work.</p>
                                    <p className="list-title has-text-primary has-text-weight-bold is-family-primary is-size-6">Great for:</p>
                                    <ul>
                                        <li>Experienced developers</li>
                                    </ul><Link className="button is-dark is-rounded is-medium is-fullwidth has-text-weight-normal has-text-success" to="https://buy.stripe.com/9AQaFAdwv1mmb0k5kl">Improve your chops</Link>
                                </div>
                            </div>
                            <div className="column level-item">
                                <div className="box"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fas fa-cogs fa-stack-1x has-text-dark"></i></span>
                                    <h1 className="title is-size-4 is-spaced mt-5">Tailored Learning</h1>
                                    <h2 className="title price is-size-2">$1,200</h2>
                                    <p>12 hours of professional coaching and collaboration to help you achieve long term goals and ambitions.</p>
                                    <p className="list-title has-text-primary has-text-weight-bold is-family-primary is-size-6">Best for:</p>
                                    <ul>
                                        <li>New developers</li>
                                    </ul><Link className="button is-dark is-rounded is-medium is-fullwidth has-text-weight-normal has-text-success" to="https://buy.stripe.com/7sIbJEdwvfdc5G08wy">Start your journey</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="callout">
                        <div className="columns is-centered">
                            <div className="column">
                                <h1 className="title is-spaced has-text-weight-semibold">If you're wanting to level up, mentorship helps.</h1>
                                <h2 className="subtitle is-size-5-desktop">Schedule a free consultation to ask questions, discuss details, and decide if it's a fit.</h2><Link className="button is-primary is-outlined is-rounded is-medium has-text-weight-normal" to="/mentorship-inquiry"><span className="icon"><i className="fa-regular fa-hand-wave"></i></span><span>Introduce yourself</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section benefits is-medium is-white has-text-centered has-border-top">
                <div className="container is-narrow">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths">
                            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Benefits of Mentorship</h1>
                            <h2 className="subtitle is-size-5-desktop">I know a thing or two because I've done a thing or two in my programming career, and I'm committed to helping you make use of that knowledge.</h2>
                        </div>
                    </div>
                    <div className="benefits-grid">
                        <div className="columns is-multiline is-centered">
                            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span className="icon has-text-primary"><i className="fas fa-tools fa-2x"></i></span>
                                <h1 className="title is-size-4 is-spaced">Tools</h1>
                                <p>I'll help you build confidence and skill in your programming tools.</p>
                            </div>
                            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span className="icon has-text-primary"><i className="fas fa-book fa-2x"></i></span>
                                <h1 className="title is-size-4 is-spaced">Resources</h1>
                                <p>I'll point you towards informative content to learn from.</p>
                            </div>
                            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span className="icon has-text-primary"><i className="fa-light fas fa-network-wired fa-2x"></i></span>
                                <h1 className="title is-size-4 is-spaced">Networking</h1>
                                <p>I'll connect you with other pros to expand your reach.</p>
                            </div>
                            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span className="icon has-text-primary"><i className="fa-light fas fa-handshake fa-2x"></i></span>
                                <h1 className="title is-size-4 is-spaced">Opportunity</h1>
                                <p>I'll make introductions and help you source potential work.</p>
                            </div>
                            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop"><span className="icon has-text-primary"><i className="fa-light fas fa-chart-line fa-2x"></i></span>
                                <h1 className="title is-size-4 is-spaced">Growth</h1>
                                <p>I'll uncover blind spots and accelerate your growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium is-primary has-text-centered is-long-ish">
                <div className="container is-narrow">
                    <div className="columns is-centered">
                        <div className="column is-three-fifths">
                            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Mentoring Style</h1>
                            <h2 className="subtitle is-size-5-desktop has-text-weight-normal">I strive to function as a catalyst and challenge you to grow as both a developer and a human. I care about the details and will encourage you to think, plan, and dream. These are the qualities I will bring to every conversation.            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section mentor-style has-text-centered">
                <div className="container is-narrow">
                    <div className="mentor-style-grid">
                        <div className="box">
                            <div className="content">
                                <div className="columns is-multiline is-centered level">
                                    <div className="column is-half level-item"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fas fa-shield-alt  fa-stack-1x has-text-dark"></i></span>
                                        <h1 className="title is-size-4 is-spaced">Authenticity</h1>
                                        <p>No sugar-coated critiques here. I care about your growth too much to not keep it real. We'll tear things down and rebuild them better, together.</p>
                                    </div>
                                    <div className="column is-half level-item"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fas fa-hand-holding-heart fa-stack-1x has-text-dark"></i></span>
                                        <h1 className="title is-size-4 is-spaced">Humility</h1>
                                        <p>I don’t profess to be at the top of the programming talent pool, because I know there is still much for me to master. Design is a moving target I'm hunting every day.</p>
                                    </div>
                                    <div className="column is-half level-item"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fas fa-balance-scale fa-stack-1x has-text-dark"></i></span>
                                        <h1 className="title is-size-4 is-spaced">Equality</h1>
                                        <p>To me, you're more than just a mentee. You’re a developer — an industry peer. I’m not the only one teaching and you’re not the only one learning.</p>
                                    </div>
                                    <div className="column is-half level-item"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fas fa-glasses fa-stack-1x has-text-dark"></i></span>
                                        <h1 className="title is-size-4 is-spaced">Transparency</h1>
                                        <p>I don’t have all the answers, but I’m happy to point you towards useful resources and share what I've learned from my own personal programming journey.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section testimonials is-medium is-white has-text-centered">
                <div className="container is-narrow">
                    <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Happy Mentees</h1>
                    <h2 className="subtitle is-size-5-desktop">Don't take my word for it when you can take theirs...</h2>
                    <div className="columns is-centered">
                        <div className="column is-two-thirds">
                            <div className="testimonials-slider">
                                <input id="carousel-1" type="radio" name="carousel" />
                                <input id="carousel-2" type="radio" name="carousel" />
                                <input id="carousel-3" type="radio" name="carousel" />
                                <input id="carousel-4" type="radio" name="carousel" />
                                <input id="carousel-5" type="radio" name="carousel" />
                                <div className="carousel-slides">
                                    <div className="carousel-inner">
                                        <div className="carousel-item">
                                            <div className="testimonial-block"><img className="avatar" src="img/avatars/dalrae.png" />
                                                <p className="quote">“Matt always offered insightful suggestions on the work I produced and challenged me with questions I had not considered. He is an incredible mentor, developer, and person.”</p>
                                                <h1 className="title is-size-5">Dalrae Kim</h1>
                                                <h2 className="subtitle is-size-6">Backend Developer, Indeed</h2>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="testimonial-block"><img className="avatar" src="img/avatars/jenann.png" />
                                                <p className="quote">“Matt’s passion for programming and unique perspective constantly pushed my problem-solving abilities. He's a master of his craft, and genuinely cares about the people he mentors.”</p>
                                                <h1 className="title is-size-5">Jenann Pham</h1>
                                                <h2 className="subtitle is-size-6">Design Consultant, Freelance</h2>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="testimonial-block"><img className="avatar" src="img/avatars/jonathan.png" />
                                                <p className="quote">“Matt not only opened doors for me in my career, but did so with a smile and an easy-going personality. He has serious grit, and if you spend enough time with him, you will too.”</p>
                                                <h1 className="title is-size-5">Jonathan Maimon</h1>
                                                <h2 className="subtitle is-size-6">User Researcher, Coinbase</h2>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="testimonial-block"><img className="avatar" src="img/avatars/erika.png" />
                                                <p className="quote">“Matt believed in me before I believed in myself as a developer, and I am ever grateful for his unwavering support in my growth and development as a freelancer and programming educator.”</p>
                                                <h1 className="title is-size-5">Erika Harano</h1>
                                                <h2 className="subtitle is-size-6">Backend Developer, Freelance</h2>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="testimonial-block"><img className="avatar" src="img/avatars/arnold.png" />
                                                <p className="quote">“Matt greatly impacted my growth as a developer. He took the time to really understand where I was at in my career and provided guidance to help fill gaps in my knowledge.”</p>
                                                <h1 className="title is-size-5">Arnold Rosario</h1>
                                                <h2 className="subtitle is-size-6">Backend Developer, Smartsheet</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-nav">
                                    <label htmlFor="carousel-1"></label>
                                    <label htmlFor="carousel-2"></label>
                                    <label htmlFor="carousel-3"></label>
                                    <label htmlFor="carousel-4"></label>
                                    <label htmlFor="carousel-5"></label>
                                </div>
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
                                <h1 className="title">Book a consult</h1>
                            </div>
                            <div className="column level-item">
                                <p className="px-3">Thinking about mentorship? Let's talk about it. The first call is on me.</p>
                            </div>
                            <div className="column level-item"><Link className="button is-success is-outlined is-rounded is-medium has-text-weight-normal" to="/mentorship-inquiry"><span className="icon"><i className="fa-regular fa-hand-wave"></i></span><span>Introduce yourself</span></Link></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Mentorship;
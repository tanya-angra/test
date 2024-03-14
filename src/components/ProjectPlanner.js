import { Link } from "react-router-dom";
import Footer from './Footer';
import { useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';

function ProjectPlanner() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project_type: '',
        budget: '',
        description: '',
    });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleFormData = (e)=>{
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const clearFormData = ()=>{
        Object.keys(formData).map(key=>{
            setFormData((prevData) => ({
                ...prevData,
                [key]: ''
            }));
        })
    };

    const submitData = async()=>{
        if (!formData.name || !formData.email || !formData.project_type || !formData.budget || !formData.description){
            toast.warning('Please fill all fields.', {autoClose: 500});
            return;
        }
        if (!emailPattern.test(formData.email)){
            toast.warning('Please enter correct email address.', { autoClose: 700 });
            return;
        }
        if (formData.name.length < 3) {
            toast.warning('Bame must be at least 3 characters long.', { autoClose: 700 });
            return;
        }
        if (formData.description.length < 20) {
            toast.warning('Description must be at least 20 characters long.', { autoClose: 700 });
            return;
        }
        try{
            const response = await axios.post('https://sahildhiman.online/api/projects/', formData);
            if (response){
                clearFormData();
                toast.success('Send successfully.', {autoClose: 500})
            }
        }
        catch(error){
            toast.error('Something went wrong.', {autoClose: 500});
        }
    };

    return (
        <>
            <nav className="navbar is-transparent is-planner animate-fadeDown">
                <div className="container">
                    <div className="navbar-brand"><Link className="navbar-item" to="/"><img src="img/mf-logo.svg" alt="Matt Farley | Designer, Front-end Developer &amp; Mentor" height="48" /></Link></div>
                    <div className="navbar-menu" id="navMenu">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <p className="buttons"><Link className="button is-medium tooltip is-tooltip-bottom" data-tooltip="Reset" onClick={clearFormData}><span className="icon is-small"><i className="fas fa-undo-alt"></i></span></Link><Link className="button is-medium tooltip is-tooltip-bottom" data-tooltip="Close" to="/"><span className="icon is-small"><i className="fas fa-times"></i></span></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="is-form-page animate-fadeUp">
                <section className="is-white has-text-centered">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-8"><img className="avatar-emoji" src="img/mf-avatar.svg" />
                                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">I’m excited to learn about your project. Ready to get started?</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="is-white">
                    <div className="container">
                        <form id="form" acceptCharset="UTF-8" action="https://usebasin.com/f/fc77d50a35ad" method="POST">
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control is-expanded">
                                            <input className="input is-large" value={formData.name} onChange={handleFormData} name="name" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control is-expanded">
                                            <input className="input is-large" value={formData.email} onChange={handleFormData} name="email" type="email" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Type of project</label>
                                        <div className="control is-expanded">
                                            <div className="select is-fullwidth">
                                                <select value={formData.project_type} onChange={handleFormData} className="is-large" name="project_type">
                                                    <option value="">Select an option</option>
                                                    <option>Responsive design</option>
                                                    <option>Web app</option>
                                                    <option>Mobile app</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Budget</label>
                                        <div className="control is-expanded">
                                            <div className="select is-fullwidth">
                                                <select value={formData.budget} onChange={handleFormData} className="is-large" name="budget">
                                                    <option value="">Select an option</option>
                                                    <option>$5,000 - $10,000</option>
                                                    <option>$10,000 - $25,000</option>
                                                    <option>$25,000+</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Additional details</label>
                                        <div className="control is-expanded">
                                            <textarea className="textarea is-large" value={formData.description} onChange={handleFormData} name="description" rows="5" required></textarea>
                                        </div>
                                    </div>
                                    <div className="field is-hidden">
                                        <label className="is-hidden"></label>
                                        <div className="control is-expanded is-hidden">
                                            <input className="is-hidden" name="_gotcha" value="" type="hidden" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column is-one-third">
                                    <div className="field">
                                        <div className="control">
                                            <button onClick={submitData} type="button" className="button is-primary is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
export default ProjectPlanner;

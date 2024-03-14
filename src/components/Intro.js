import Navbar from './Navbar';
import { useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';

function Intro() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        membership_type: '',
        desired_outcome: '',
        story: '',
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
        if (!formData.name || !formData.email || !formData.membership_type || !formData.desired_outcome || !formData.story){
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
        if (formData.story.length < 20) {
            toast.warning('Story must be at least 20 characters long.', { autoClose: 700 });
            return;
        }
        try{
            const response = await axios.post('https://sahildhiman.online/api/mentor/', formData);
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
            <Navbar />
            <div className="is-form-page animate-fadeUp">
                <section className="is-white has-text-centered">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-8"><img className="avatar" src="img/mf-avatar.svg" />
                                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">I'm eager to explore mentorship with you! Tell me a bit about yourself.</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="is-white">
                    <div className="container">
                        <form id="form" acceptCharset="UTF-8" action="https://usebasin.com/f/6fafad823634" method="POST">
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control is-expanded">
                                            <input className="input is-large" name="name" onChange={handleFormData} value={formData.name} type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control is-expanded">
                                            <input className="input is-large" name="email" onChange={handleFormData} value={formData.email} type="email" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Type of Mentorship</label>
                                        <div className="control is-expanded">
                                            <div className="select is-fullwidth">
                                                <select className="is-large" name="membership_type" onChange={handleFormData} value={formData.membership_type}>
                                                    <option value="">Select an option</option>
                                                    <option>Spot Mentoring</option>
                                                    <option>Production Support</option>
                                                    <option>Tailored Learning</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Desired desired_outcome</label>
                                        <div className="control is-expanded">
                                            <div className="select is-fullwidth">
                                                <select className="is-large" name="desired_outcome" onChange={handleFormData} value={formData.desired_outcome}>
                                                    <option value="">Select an option</option>
                                                    <option>Fill knowledge gaps</option>
                                                    <option>Improve development chops</option>
                                                    <option>Make a career pivot</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Your Story</label>
                                        <div className="control is-expanded">
                                            <textarea className="textarea is-large" name="story" onChange={handleFormData} value={formData.story} rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div className="field is-hidden">
                                        <label className="is-hidden"></label>
                                        <div className="control is-expanded is-hidden">
                                            <input className="is-hidden" name="_gotcha" type="hidden" />
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
        </>
    )
}
export default Intro;

import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
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
        if (!formData.name || !formData.email || !formData.message){
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
        if (formData.message.length < 20) {
            toast.warning('Message must be at least 20 characters long.', { autoClose: 700 });
            return;
        }
        try{
            const response = await axios.post('https://sahildhiman.online/api/contacts/', formData);
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
            <Navbar/>
            <div className="is-form-page">
                <section className="is-white has-text-centered">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-8"><img className="avatar" src="img/mf-avatar.svg" />
                                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Thanks for taking the time to reach out. How can I help you today?</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="is-white">
                    <div className="container">
                        <form acceptCharset="UTF-8" action="https://usebasin.com/f/363b98eca5af" method="POST">
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Name</label>
                                        <div className="control is-expanded">
                                            <input className="input is-large" name="name" type="text" onChange={handleFormData} value={formData.name} />
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-half">
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control is-expanded">
                                            <input className="input is-large" name="email" type="email" onChange={handleFormData} value={formData.email} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns is-centered">
                                <div className="column">
                                    <div className="field">
                                        <label className="label">Message</label>
                                        <div className="control is-expanded">
                                            <textarea className="textarea is-large" name="message" rows="5" onChange={handleFormData} value={formData.message}></textarea>
                                        </div>
                                    </div>
                                    <div className="field is-hidden">
                                        <label className="is-hidden"></label>
                                        <div className="control is-expanded is-hidden">
                                            <input className="is-hidden" name="bot_vortex" type="hidden" />
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
export default Contact;

import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import contact from '../../images/contact.jpg';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s3bklnu', 'template_xiobz9x', form.current, 'U0g6Ht1DVmnBbENk0')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='mb-44 mt-12'>
            <div className='text-center'>
                <h4 className='text-2xl font-bold font-serif text-primary'>Contact</h4>
                <h1 className='font-semibold text-5xl text-black'>Feel free to contact us anytime</h1>
            </div>
            <div className="grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-base items-center">
                <div className="flex flex-col justify-between">
                    <img src={contact} alt="" className="mx-auto rounded-xl" />
                </div>
                <form ref={form} onSubmit={sendEmail} noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid shadow-2xl p-10 rounded-xl bg-opacity-5 bg-slate-500">
                    <h1 className='text-4xl font-bold text-secondary'>Contact Us</h1>
                    <div>
                        <label htmlFor="name" className="text-sm">Full name</label>
                        <input name="user_name" id="name" type="text" placeholder="Name" className="w-full p-3 bg-black bg-opacity-5  border border-gray-600 mt-3 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm">Email</label>
                        <input name="user_email" placeholder='Email' id="email" type="email" className="w-full p-3 bg-black bg-opacity-5 border border-gray-600 mt-3 rounded-lg" />
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm">Message</label>
                        <textarea name="message" placeholder='Message' id="message" rows="3" className="w-full p-3 bg-black bg-opacity-5 border border-gray-600 mt-3 rounded-lg"></textarea>
                    </div>
                    <input type="submit" className="btn btn-primary rounded-lg" value='Send Message' />
                </form>
            </div>
        </div>
    );
};

export default Contact;
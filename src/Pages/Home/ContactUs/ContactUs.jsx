import React from 'react';

const ContactUs = () => {
    return (
        <section className="p-6 text-gray-800 bg-[url('/src/assets/images/appointment.png')]">
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Contact Us</h3>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
            </div>
            <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md  ng-untouched ng-pristine ng-valid ">
                <div>
                    <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100" />
                </div>
                <div>
                    <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100" data-temp-mail-org="2" />
                </div>
                <div>
                    <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary ">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;
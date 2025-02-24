import mail_icon from '../assets/mail_icon_team.svg'
import phone_icon from '../assets/call_contact.svg'
import whatsapp_icon from '../assets/whatsapp_icon.svg'
import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_ID
        ).then(
            () => {
                console.log("SUCCESS!");
            },
            (error) =>
                {
                    console.log("FAILED...", error.text)
                },
        );
    };

    return (
        <>
            <section id="contact" className="mb-12 py-12 sm:px-12 px-6 bg-gateway-logo-complement">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight pb-5 uppercase">Contact Us</h2>
                <p className="text-md sm:text-lg text-gray-600 text-center">
                Have any questions or inquiries? Get in touch with us!
                </p>
    
                <div className="max-w-lg mx-auto mt-8 space-y-6">
                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center justify-center text-gray-600 mt-1">
                            <img src={mail_icon} alt="Mail Icon" className="w-6 h-6 mr-1" />
                            <a
                                href="mailto:info@gatewaypaper.co@example.com"
                                className="text-gateway-logo hover:underline transition duration-200"
                            >
                                info@gatewaypaper.co
                            </a>
                        </div>
                        <div className="flex items-center justify-center text-gray-600 mt-1">
                            <img src={phone_icon} alt="Mail Icon" className="w-6 h-6 mr-1" />
                            <a
                                href="tel:+1234567890"
                                className="text-gateway-logo hover:underline transition duration-200"
                            >
                                +1 647-574-2195
                            </a>
                        </div>
                        <div className="flex items-center justify-center text-gray-600 mt-1">
                        <img src={whatsapp_icon} alt="Whatsapp Icon" className="w-6 h-6 mr-1" />
                        <a
                            href="https://wa.me/919769818895"
                            target='_blank'
                            className="text-gateway-logo hover:underline transition duration-200"
                        >
                            Connect with us on Whatsapp
                        </a>
                        </div>
                        
                    </div>
        
                    <form ref={form} onSubmit={sendEmail} className="bg-white p-6 rounded-lg">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gateway-logo"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gateway-logo"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company_name" className="block text-gray-700 font-medium mb-1">Company Name</label>
                            <input
                                type="text"
                                name="company_name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gateway-logo"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="company_type" className="block text-gray-700 font-medium mb-1">Company Type</label>
                            <select
                                name="company_type"
                                className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gateway-logo"
                                required
                            >
                                <option value="">Select your company type</option>
                                <option value="Paper_mill">Paper Mill</option>
                                <option value="Recycler">Recycler</option>
                                <option value="Broker">Broker/Commission Agent</option>
                                <option value="Trader">Trader</option>
                                <option value="Exporter">Exporter</option>
                                <option value="Freight_forwarder">Freight Forwarder</option>
                                <option value="Insurance">Insurance</option>
                                <option value="Financial Institution">Financial Institution</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-gateway-logo"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-gateway-logo transition duration-200"
                            >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
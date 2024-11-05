import { useState } from 'react'
import logo from './assets/GATEWAY-2.png'
import cpyright_logo from './assets/copyright-logo.png'
import mobile_menu from './assets/mobile_menu_icon.svg'
import member_1 from './assets/rishabh_team_img.jpg'
import logo_no_text from './assets/logo-with-text.png'
import mail_icon from './assets/mail_icon_team.svg'
import phone_icon from './assets/call_contact.svg'
import './App.css'

function App() {
  const [bMobileMenu, setMobileMenuOpen] = useState(false)
   const [showMore, setShowMore] = useState(false);

  const toggleMobileMenu = () => 
    {
      setMobileMenuOpen(!bMobileMenu);
    }

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    toggleMobileMenu(); 
  };

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <>
      <div className="flex flex-col items-center text-center min-h-screen p-4 sm:p-6 lg:p-10 bg-slate-100">
        <nav className="w-full bg-slate-100 border-b border-gray-300 shadow-md py-4 px-6 flex justify-between items-center md:px-12 lg:px-20 relative">
          <a href="/" className="flex items-center space-x-2">
            <img src={cpyright_logo} alt="Company Logo" className="max-w-8 max-h-8 md:w-12 md:h-12 cursor-pointer" />
          </a>
          <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-800 uppercase">
            <li><a href="#services" className="hover:text-gateway-logo transition-colors duration-300">Services</a></li>
            <li><a href="#values" className="hover:text-gateway-logo transition-colors duration-300">Our Values</a></li>
            <li><a href="#team" className="hover:text-gateway-logo transition-colors duration-300">Meet the team</a></li>
            <li><a href="#contact" className="hover:text-gateway-logo transition-colors duration-300">Contact Us</a></li>
          </ul>

          <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMobileMenu}>
            <img src={mobile_menu} alt="Menu" className="w-6 h-6" />
          </button>
          
          {/* flex flex-col items-center space-y-4 text-gray-700 absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 bg-white py-6 shadow-lg rounded-lg transition-all duration-300 ease-in-out ${bMobileMenu ? 'block' : 'hidden'} md:hidden */}

          <ul className={`flex flex-col space-y-4 text-gray-800 uppercase leading-tight font-semibold text-sm absolute 
                          top-16 left-1/2 z-50 transform -translate-x-1/2 w-11/12 bg-slate-200 py-6 shadow-md rounded-lg 
                          transition-all duration-300 ease-in-out 
                          ${bMobileMenu ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}
                          md:hidden`}>
            <li><a href="#services" className="hover:text-gateway-logo transition-colors duration-200" onClick={handleLinkClick}>Services</a></li>
            <li><a href="#values" className="hover:text-gateway-logo transition-colors duration-200" onClick={handleLinkClick}>Our Values</a></li>
            <li><a href="#team" className="hover:text-gateway-logo transition-colors duration-200" onClick={handleLinkClick}>Meet the team</a></li>
            <li><a href="#contact" className="hover:text-gateway-logo transition-colors duration-200" onClick={handleLinkClick}>Contact Us</a></li>
          </ul>
        </nav>

        <header className="md:mb-6 cursor-pointer">
          <img src={logo} alt="Company Logo" className="max-w-80 pt-20 sm:max-w-md sm:pt-12 md:max-w-xl md:pt-0 md:max-h-fit animate-scaleIn"/>
        </header>

        <section id="about" className="mb-12 py-8 px-12 border-indigo-100  border-b ">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight font-lora">
            <span className="text-gateway-logo">Leading</span> the <span className="text-gateway-logo">Way</span> in <span className="text-gateway-logo">Global Pulp</span> and <span className="text-gateway-logo">Paper Resource Recovery</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-medium mt-6 max-w-3xl text-center font-lora">
            We forge <span className="font-bold">partnerships</span> across advanced economies and emerging markets to <span className="font-bold">inspire sustainability</span> and <span className="font-semibold">drive environmental responsibility</span> worldwide.
          </p>
          {/* <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight">
            Leading the Way in Global Pulp and Paper Resource Recovery
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-medium mt-6 max-w-3xl text-center">
            We forge partnerships across advanced economies and emerging markets to inspire sustainability and drive environmental responsibility worldwide.
          </p> */}
            {/* <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center">About us</h2>
            <p className="text-md sm:text-lg text-slate-900 font-medium mt-4 max-w-2xl mx-auto text-center">
            Leading the way in global pulp and paper resource recovery, we forge partnerships that inspire sustainability and drive environmental responsibility worldwide.
            </p> */}
        </section>
        
        <section id="services" className="mb-12 py-8 px-12 bg-gray-50 border-t border-gray-300">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight font-lora">
            Our Services
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-gateway-logo mb-2">Fostering Commercial Relationships</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                We prioritize strong partnerships that facilitate mutual growth and success in the paper supply chain.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-gateway-logo mb-2">Global Paper Supply Chain</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                Our comprehensive network ensures timely delivery and consistent quality across international markets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-gateway-logo mb-2">Audits for Success</h3>
              <p className="text-gray-700 mt-2 md:mt-8 leading-relaxed">
                We conduct thorough audits to identify areas for improvement, enhancing operational efficiency and sustainability.
              </p>
            </div>
            <div className="bg-white p-6 md:px-1 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <h3 className="text-xl font-semibold text-gateway-logo mb-2">All-Coverage Shipping</h3>
              <p className="text-gray-700 mt-2 md:mt-8 leading-relaxed">
                Our logistics solutions offer all-encompassing shipping options, ensuring your products reach their destination safely and on time.
              </p>
            </div>
          </div>
        </section>




        <section id="values" className="mb-12 py-8 px-12 border-t border-gray-300 bg-gray-50">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight font-lora">
            Our Values
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gateway-logo mb-2">Sustainability</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                We prioritize sustainable practices in everything we do, reducing waste and promoting environmental stewardship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gateway-logo mb-2">Integrity</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                We build trust with partners by upholding transparency, accountability, and reliability in all our interactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gateway-logo mb-2">Innovation</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                We are committed to finding smarter, more efficient ways to connect resources with markets, enhancing value for our clients and reducing global waste.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-1">
              <h3 className="text-xl font-semibold text-gateway-logo mb-2">Partnership</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                We believe in the power of collaboration and value the long-term relationships that make a positive global impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-1">
              <h3 className="text-xl font-semibold text-gateway-logo mb-2">Quality</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                We deliver high standards in our products and services, ensuring our clients receive dependable materials for sustainable manufacturing.
              </p>
            </div>
          </div>
        </section>


        <section id="team" className="mb-6 py-8 sm:px-12 border-t border-gray-300 bg-gray-50">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight font-lora pb-5">Meet the team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <img
                src = {member_1}
                alt = "Rishabh M."
                className='w-20 h-20 rounded-full object-cover border-2 border-gray-300 mb-4 sm:mb-0'
              />
              <div className='text-center'>
                <h3 className="text-xl font-semibold text-gray-800">Rishabh Mundhra</h3>
                <p className="text-sm font-medium text-gateway-logo">Supply Officer</p>
                <p className="text-sm text-gray-600 mt-1">North America</p>
                <div className="flex items-center justify-center text-sm text-gray-600 mt-1">
                  <img src={mail_icon} alt="Mail Icon" className="w-6 h-6 mr-1" />
                  <a href="mailto:rishabh@gatewaypaper.co" className="text-gateway-logo hover:underline">
                    rishabh@gatewaypaper.co
                  </a>
                </div>
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  Mr. Rishabh S Mundhra is a Mechanical Engineering graduate from the University of Toronto. 
                  Prior to founding Gateway Paper, Rishabh had an illustrious career in the renewable energy and energy storage industry in Canada and the United States.
                  In his previous avatar as a managing consultant, Rishabh shepherded various energy development and public contracting projects for F100 & F500 energy companies.
                  Determined to explore an innovative solutions for the circular economy sector.
                </p>
              </div>              
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              <img
                src = {member_1}
                alt = "Rishabh M."
                className='w-20 h-20 rounded-full object-cover border-2 border-gray-300 mb-4 sm:mb-0'
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Shankar Mundhra</h3>
                <p className="text-sm font-medium text-gateway-logo">Sales Officer</p>
                <p className="text-sm text-gray-600 mt-1">Indo Pacific</p>
                <div className="flex items-center justify-center text-sm text-gray-600 mt-1">
                  <img src={mail_icon} alt="Mail Icon" className="w-6 h-6 mr-1" />
                  <a href="mailto:rishabh@gatewaypaper.co" className="text-gateway-logo hover:underline">
                    shankar@gatewaypaper.co
                  </a>
                </div>                
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">Mr. Shankar C Mundhra is a distinguished leader in the Indian pulp and paper industry, whose expertise has been instrumental in shaping distribution supply chains for pulp and paper mills worldwide over the past five decades. As Director of Bombay Paper Udyog, Mr. Mundhra oversees the annual supply of almost 60,000 metric tons of finished pulp and paper products globally. Known for his strategic vision and commitment to environmental stewardship, Mr. Mundhra brings a unique perspective and invaluable market insight to Gateway Paper.
                </p>
              </div>              
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              {/* <img
                src = {member_1}
                alt = "Rishabh M."
                className='w-20 h-20 rounded-full object-cover border-2 border-gray-300 mb-4 sm:mb-0'
              /> */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Shivangi Singh</h3>
                <p className="text-sm font-medium text-gateway-logo">Procurement Director</p>
                <p className="text-sm text-gray-600 mt-1">North America</p>
                <div className="flex items-center justify-center text-sm text-gray-600 mt-1">
                  <img src={mail_icon} alt="Mail Icon" className="w-6 h-6 mr-1" />
                  <a href="mailto:rishabh@gatewaypaper.co" className="text-gateway-logo hover:underline">
                    shivangi@gatewaypaper.co
                  </a>
                </div>                <p className="text-gray-600 text-sm mt-2"></p>
              </div>              
            </div>
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
              {/* <img
                src = {member_1}
                alt = "Rishabh M."
                className='w-20 h-20 rounded-full object-cover border-2 border-gray-300 mb-4 sm:mb-0'
              /> */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Ritvik Singh</h3>
                <p className="text-sm font-medium text-gateway-logo">Manager</p>
                <p className="text-sm text-gray-600 mt-1">North America</p>
                <div className="flex items-center justify-center text-sm text-gray-600 mt-1">
                  <img src={mail_icon} alt="Mail Icon" className="w-6 h-6 mr-1" />
                  <a href="mailto:rishabh@gatewaypaper.co" className="text-gateway-logo hover:underline">
                    ritvik@gatewaypaper.co
                  </a>
                </div>                <p className="text-gray-600 text-sm mt-2"></p>
              </div>              
            </div>
           
          </div>
        </section>

        <section id="contact" className="mb-12 py-10 px-6 bg-gray-100">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight font-lora pb-5">Contact Us</h2>
          <p className="text-md sm:text-lg text-gray-600 text-center">
            Have any questions or inquiries? We’re here to help.
          </p>

          <div className="max-w-lg mx-auto mt-8 space-y-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center text-gray-600 mt-1">
              <img src={mail_icon} alt="Mail Icon" className="w-6 h-6 mr-1" />
                <a
                  href="mailto:rishabh@gatewaypaper.co@example.com"
                  className="text-gateway-logo hover:underline transition duration-200"
                >
                  rishabh@gatewaypaper.co
                </a>
              </div>
              <div className="flex items-center justify-center text-gray-600 mt-1">
              <img src={phone_icon} alt="Mail Icon" className="w-6 h-6 mr-1" />
                <a
                  href="tel:+1234567890"
                  className="text-gateway-logo hover:underline transition duration-200"
                >
                  +1 234-567-890
                </a>
              </div>
              
            </div>

            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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

        <footer className="w-full py-4 bg-gray-100 text-center text-gray-600 text-xs font-medium border-t border-gray-200 mt-12 flex items-center justify-center space-x-2">
        {/* Logo */}
          <img src={cpyright_logo} alt="Gateway Paper Logo" className="w-8 h-auto cursor-pointer" />

          {/* Copyright Notice */}
          <p>Gateway Paper Company Limited © {new Date().getFullYear()}</p>
        <button><a href = "https://www.linkedin.com/company/gatewaypapercompany/"><i className = "fa fa-linkedin text-gateway-logo text-sm"></i></a></button>
      </footer>
        

    </div>
    </>
  )
}

export default App

import about_us_image from '../assets/card_1.jpeg'
import handshake_icon from '../assets/handshake-icon.png'
import recycle_icon from '../assets/recycling-icon.png'
import quality_icon from '../assets/quality-icon.png'
import partnership_icon from '../assets/integrity-icon.png'


const AboutUs = () => {
    return (
        <>
        <div class = "py-2 px-12 max-w-7xl">
            <div class = "py-4 sm:py-8 px-6 sm:px-12">
                <div class = "mb-4">
                    <h1 class = "text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight uppercase">About Us</h1>
                    {/* <hr class = "my-4 border-t-2 border-double border-gateway-logo"></hr> */}
                </div>
                <div class = "flex overflow-hidden relative">
                    <div class = "flex-1">
                        <img src = {about_us_image} alt = "About Us" class = "h-full object-cover object-[65%_20%] rounded-xl"></img>    
                    </div>
                    <div class = "flex-1 mt-2 leading-relaxed text-left sm:pl-4 mx-auto text-base/7 sm:text-lg text-gray-800 font-semibold">
                        <p class = "mb-2 p-2 sm:p-6 rounded-lg mx-auto leading-relaxed border-gateway-logo">Based in Toronto, the Gateway Paper Company is a trader and exporter of recycled paper commodities. Our business’ philosophy is rooted in its core values of partnership, integrity, quality, and sustainability.</p>
                        <p class = "mt-2 mb-2 p-2 sm:p-6 rounded-lg mx-auto border-gateway-logo">Backed by a multi-generational pulp and paper distribution business headquartered in Mumbai, India, Gateway Paper Company is a supplier of standard recycled paper grades internationally. We specialize in sourcing high-quality recycled paper, providing end-to-end shipping, and ensuring accredited quality compliance to suit the requirements of our publicly-listed, international clientele. </p>
                        <p class = "mt-2 p-2 sm:p-6 rounded-lg mx-auto border-gateway-logo">We take pride in unlocking resilient paper recovery supply chains, supporting circular economics and reducing the environmental impact of fibrous waste generation in North America. As we support recycled paper suppliers and consumers across continents, our commitment to partnership, integrity, quality, and sustainability is paramount.</p>
                    </div>
                </div>
            </div>
            <section id="values" className="mb-12 py-8 px-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center leading-tight uppercase">
                    Our Core Values
                </h2>
                {/* <hr class = "my-4 border-t-2 border-double border-gateway-logo"></hr> */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 max-w-5xl mx-auto cursor-pointer">
                    <div className="bg-gateway-logo-complement p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-gateway-logo">
                        <div class = "flex flex-col items-center text-center">
                            <img src = {recycle_icon} class = "w-10 h-10 mr-1"></img>
                            <h3 className="text-2xl font-semibold text-gateway-logo mb-2">Sustainability</h3>
                            <p className="text-base text-gray-950 mt-2 leading-relaxed font-semibold">
                                We prioritize sustainable practices in everything we do, reducing waste and promoting environmental stewardship.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gateway-logo-complement p-6 hover:shadow-lg transition-shadow duration-300 border-2 border-gateway-logo">
                        <div class = "flex flex-col items-center text-center">
                            <img src = {handshake_icon} class = "w-10 h-10 mr-1"></img>
                            <h3 className="text-2xl font-semibold text-gateway-logo mb-2">Integrity</h3>
                            <p className="text-gray-950 mt-2 leading-relaxed font-semibold">
                                We build trust with partners by upholding transparency, accountability, and reliability in all our interactions.
                            </p>
                        </div>
                    </div>
                    {/* <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-gateway-logo mb-2">Innovation</h3>
                    <p className="text-gray-700 mt-2 leading-relaxed">
                        We are committed to finding smarter, more efficient ways to connect resources with markets, enhancing value for our clients and reducing global waste.
                    </p>
                    </div> */}
                    <div className="bg-gateway-logo-complement p-6 hover:shadow-lg transition-shadow duration-300 md:col-span-1 border-2 border-gateway-logo">
                        <div class = "flex flex-col items-center text-center">
                            <img src = {partnership_icon} class = "w-10 h-10 mr-1"></img>
                            <h3 className="text-2xl font-semibold text-gateway-logo mb-2">Partnership</h3>
                            <p className="text-gray-950 mt-2 leading-relaxed font-semibold">
                                We believe in the power of collaboration and value the long-term relationships that make a positive global impact.
                            </p>
                        </div>
                    </div>
                    <div className="bg-gateway-logo-complement p-6 hover:shadow-lg transition-shadow duration-300 md:col-span-1 border-2 border-gateway-logo">
                        <div class = "flex flex-col items-center text-center">
                            <img src = {quality_icon} class = "w-10 h-10 mr-1"></img>
                            <h3 className="text-2xl font-semibold text-gateway-logo mb-2">Quality</h3>
                            <p className="text-gray-950 mt-2 leading-relaxed font-semibold">
                                We deliver high standards in our products and services, ensuring our clients receive dependable materials for sustainable manufacturing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default AboutUs; 
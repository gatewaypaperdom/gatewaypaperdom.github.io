import logo from '../assets/GATEWAY-2.png'
import member_1 from '../assets/rishabh_team_img.jpg'
import member_2 from '../assets/shankar_team_img.jpeg'
import logo_no_text from '../assets/logo-with-text.png'
import mail_icon from '../assets/mail_icon_team.svg'
import phone_icon from '../assets/call_contact.svg'
import whatsapp_homepage_icon from '../assets/whatsapp_logo.svg'
import card_1 from '../assets/card_1.jpeg'
import card_2 from '../assets/card_2.jpeg'
import card_3 from '../assets/card_3.jpeg'
import card_1_re from '../assets/about_us.jpeg'
import intro_video from '../assets/Gateway Video Compressed.webm'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  
  const navigate = useNavigate();

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const goToContactPage = () => {
    navigate("/contact");
  }


  return (
    <>
        {/* <header className="md:mb-6 cursor-pointer">
            <img src={logo} alt="Company Logo" className="max-w-80 pt-20 sm:max-w-md sm:pt-12 md:max-w-xl md:pt-0 md:max-h-fit animate-scaleIn"/>
        </header> */}

        <section id="video-intro" class = "relative h-screen w-full flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline loading="Lazy" class = "absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
            <source src = {intro_video} type='video/webm' />
            Browser does not support video playback.
          </video>
          <div class = "absolute inset-0 z-10 bg-gateway-logo bg-opacity-50 uppercase flex flex-col items-center justify-center text-center">
            <h1 class = "font-bold text-gateway-logo-complement text-6xl drop-shadow-2xl mb-4">Building a sustainable future</h1>
            <h1 class = "font-semibold text-gateway-logo-complement text-6xl">One shipment at a time</h1>
            <a href="#new-services" onClick={handleLinkClick}><button class = "bg-gateway-logo-light px-8 py-4 mt-8 rounded-lg uppercase font-semibold">Learn More</button></a>
          </div>

        </section>

        <section id="whatsapp_sticky" class = "fixed bottom-12 right-12 z-50 flex items-center gap-x-2">
          <a href="https://wa.me/919769818895" target="_blank">
            <img src={whatsapp_homepage_icon} alt="Whatsapp Icon" class = "w-16 h-16 cursor-pointer"></img>
          </a>
          {/* <div class = "font-semibold text-md">Connect with us on Whatsapp</div> */}
        </section>

    

        <section id="new-services" class = "">
          <div class = "relative">  
            <div class = "mt-6 grid grid-cols-1 max-w-full mx-auto tracking-tight text-left">
              <div class = "flex flex-row items-center md:gap-4">
                <img src={card_1_re} alt="Toronto" class = "w-1/2 object-cover"></img>
                <p class = "p-2 font-semibold text-3xl/loose text-gray-900">Gateway Paper Company helps manufacturers, recycling facilities, and paper mills in advanced and emerging economies access international recovered commodity markets, promoting supplier diversification for the sustainable recovery of fiber</p>
              </div>
              {/* <hr class = "my-4 border-t-2 border-double border-gateway-logo"></hr> */}
              <div class = "flex flex-row items-center relative">
                <img src={card_2} alt="Handshake" class="max-w-full object-cover"></img>
                <p class ="p-1 font-semibold border-gateway-logo/20 text-3xl/loose text-gray-900 absolute z-10">Your Gateway to Global Paper Recovery</p>
              </div>
              {/* <hr class = "border-t-2 border-double border-gateway-logo"></hr> */}
              <div class = "flex flex-row items-center">
                <p class="font-semibold p-2 relative border-gateway-logo/20 text-3xl/loose text-gray-900">We work with a variety of standard recycled paper grades, offering competitive pricing, bankable payment terms, comprehensive shipping solutions and internationally-accepted quality compliance.
                </p>
                <img src={card_3} alt="Shipping Containers at the dock" class="w-1/2 object-cover relative"></img>
              </div>
            </div>
            <h2 class = "font-bold text-5xl uppercase">Want to learn more about sustainable paper recovery?</h2>
            <button class="font-semibold text bg-gateway-logo-light px-4 py-4 uppercase rounded-lg mt-8" onClick={goToContactPage}>Get in touch</button>
          </div>
        </section>

        {/* <section id = "address" class = "">
              <div class = "flex flex-col sm:flex-row gap-12 items-center">
                <div class = "">
                  <p class = "">
                    Canada<br></br>
                    22 Balsdon Hollow,<br></br>
                    East Gwillimbury, ON L9N 0Y7<br></br>
                    +1 (647) 574-2195
                  </p>
                </div>
                <div class = "">
                  <p class = "">
                    India<br></br>
                    313-4, Morya Estate,<br></br>
                    New Link Road, Andheri (West)<br></br>
                    Mumbai, MH 400053<br></br>
                    +91 98200-11198
                  </p>
                </div>
              </div>
            

        </section> */}
        
    </>
  );
};

export default Homepage;
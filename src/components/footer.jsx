import cpyright_logo from '../assets/copyright-logo.png'
import linkedin_logo from '../assets/linkedin-logo.svg'
import mail_icon from '../assets/mail_icon_team.svg'
import phone_icon from '../assets/call_contact.svg'
import linkedin_icon from '../assets/linkedin-icon.svg'


const Footer = () => {
        return (
        <footer className="w-full py-4 bg-gray-100 text-center text-gray-600 text-xs font-medium border-t border-gray-200 mt-12 flex items-center justify-center space-x-12">
          {/* <div class = "max-w-7xl mx-auto px-4 flex items-center justify-center space-x-4"> */}
          <div class = "flex items-center gap-x-2">
            <img src={cpyright_logo} alt="Gateway Paper Logo" className="w-8 h-auto cursor-pointer" />
            <p>Gateway Paper Company Limited © {new Date().getFullYear()}</p>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <img src={mail_icon} alt="Mail Icon" className="w-6 h-6 mr-1" />
            <a
                href="mailto:info@gatewaypaper.co@example.com"
                className="text-gateway-logo hover:underline transition duration-200"
            >
                info@gatewaypaper.co
            </a>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <img src={phone_icon} alt="Mail Icon" className="w-6 h-6" />
            <a
            href="tel:+1234567890"
            className="text-gateway-logo hover:underline transition duration-200"
            >
              +1 647-574-2195
              </a>
          </div>
          <a href = "https://www.linkedin.com/company/gatewaypapercompany/">
          <div class = "flex items-center space-x-2">
            <p class = "text-sm text-gateway-logo">Connect with us on Linkedin</p>
            <img src = {linkedin_icon} class = "w-8 h-8" />
          </div>
          </a>
        </footer>
        );
    };

export default Footer;
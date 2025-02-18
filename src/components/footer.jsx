import cpyright_logo from '../assets/copyright-logo.png'
import linkedin_logo from '../assets/linkedin-logo.svg'


const Footer = () => {
        return (
        <footer className="w-full py-4 bg-gray-100 text-center text-gray-600 text-xs font-medium border-t border-gray-200 mt-12 flex items-center justify-center space-x-2">
          <div class = "max-w-7xl mx-auto px-4 flex items-center justify-center space-x-4">
          <img src={cpyright_logo} alt="Gateway Paper Logo" className="w-8 h-auto cursor-pointer" />
          <p>Gateway Paper Company Limited © {new Date().getFullYear()}</p>
          <button><a href = "https://www.linkedin.com/company/gatewaypapercompany/"><i className = "fa fa-linkedin text-gateway-logo text-sm"></i></a></button>
          </div>
        </footer>
        );
    };

export default Footer;
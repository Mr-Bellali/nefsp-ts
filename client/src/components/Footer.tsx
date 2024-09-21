// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 NEFSP corp. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

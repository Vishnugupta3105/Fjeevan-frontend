import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t dark:border-gray-700 mt-10">
      <div className="max-w-7xl mx-auto py-10 px-6 sm:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* App Summary */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">JeevanSaar</h2>
          <p className="text-sm">
            Explore timeless wisdom by interacting with the minds of history’s greatest thinkers.
            Learn, grow, and reflect — through the voices of the past, powered by AI.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/home" className="hover:text-indigo-600 dark:hover:text-indigo-300">Home</Link></li>
            <li><Link to="/interact" className="hover:text-indigo-600 dark:hover:text-indigo-300">Interact</Link></li>
            <li><Link to="/store" className="hover:text-indigo-600 dark:hover:text-indigo-300">Store</Link></li>
            <li><Link to="/about" className="hover:text-indigo-600 dark:hover:text-indigo-300">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm mb-2">Have questions or feedback?</p>
          <p className="text-sm">
            📧 <a href="mailto:hello@jeevansaar.app" className="hover:text-indigo-600 dark:hover:text-indigo-300">
              hello@jeevansaar.app
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-600 border-t border-gray-200 dark:border-gray-700 py-4 px-4">
        © {new Date().getFullYear()} JeevanSaar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

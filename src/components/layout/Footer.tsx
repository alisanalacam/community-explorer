
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">KlanPeak</h3>
            <div className="text-3xl font-bold mb-4">
              <span className="text-brand-blue">k</span>
              <span className="text-brand-red">l</span>
              <span className="text-brand-yellow">a</span>
              <span className="text-brand-teal">n</span>
              <span className="text-gray-800">Peak</span>
            </div>
            <p className="text-sm text-gray-600">
              The all-in-one platform for building and growing your online community.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/communities" className="text-gray-600 hover:text-primary text-sm">
                  Discover Communities
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-primary text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/affiliate" className="text-gray-600 hover:text-primary text-sm">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/policy/rules" className="text-gray-600 hover:text-primary text-sm">
                  KlanPeak Rules
                </Link>
              </li>
              <li>
                <Link to="/policy/privacy" className="text-gray-600 hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policy/terms" className="text-gray-600 hover:text-primary text-sm">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="/policy/cookies" className="text-gray-600 hover:text-primary text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/policy/transaction" className="text-gray-600 hover:text-primary text-sm">
                  Transaction Terms
                </Link>
              </li>
              <li>
                <Link to="/policy/acceptable-use" className="text-gray-600 hover:text-primary text-sm">
                  Acceptable Use
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@klanpeak.com" className="text-gray-600 hover:text-primary text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-primary text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} KlanPeak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">UXDaffa</div>
            <p className="text-gray-400 leading-relaxed">
              Creating intuitive digital experiences through user-centered design 
              and collaborative methodologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Featured Work', href: '#work' },
                { label: 'About Me', href: '#about' },
                { label: 'Contact', href: '#contact' },
                { label: 'Case Studies', href: '#' },
                { label: 'Blog', href: '#' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                  onClick={(e) => {
                    if (link.href.startsWith('#') && link.href !== '#') {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="space-y-2 text-gray-400">
              <p>LinkedIn: @fdaffa</p>
              <p>Available for freelance projects</p>
              <p>Based in Stuttgart, DE</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {currentYear} UXDaffa. All rights reserved.
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

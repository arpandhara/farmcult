import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { label: 'Passive Income Model', path: '/solutions' },
        { label: 'Turnkey End-to-End', path: '/solutions' },
        { label: 'Education & Training', path: '/solutions' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blogs', path: '/blogs' },
        { label: 'Case-studies', path: '/case-studies' },
      ]
    },
    {
      title: 'Discover',
      links: [
        { label: 'Why Farmcult', path: '/why-farmcult' },
        { label: 'Technology', path: '/technology' },
      ]
    },
    {
      title: 'Social Media',
      links: [
        { label: 'Instagram', path: 'https://instagram.com' },
        { label: 'Linked-in', path: 'https://linkedin.com' },
        { label: 'Facebook', path: 'https://facebook.com' },
      ]
    }
  ];

  return (
    <footer className="footer-section bg-[#F7F7F7] pt-20 flex flex-col min-h-[50vh]">
      <div className="container mx-auto px-[5%] flex-1 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="inline-block mb-10">
              <img src="/logo.svg" alt="Farmcult Logo" className="h-10 lg:h-12" />
            </Link>
            <h2 className="text-xl lg:text-2xl font-normal text-[#343434] max-w-[300px] leading-snug font-outfit">
              Turn Your Idle Land Into A Money Generating Asset
            </h2>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-16 lg:gap-15">
            {footerLinks.map((column, idx) => (
              <div key={idx} className="footer-col">
                <span className="block text-xs font-normal text-[#343434] mb-8 uppercase tracking-wider font-inter">
                  {column.title}
                </span>
                <ul className="flex flex-col gap-6">
                  {column.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      {link.path.startsWith('http') ? (
                        <a 
                          href={link.path} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-md font-normal text-[#343434] hover:text-accent transition-colors font-inter "
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link 
                          to={link.path}
                          className="text-md font-normal text-[#343434] hover:text-accent transition-colors font-inter"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-accent py-6 px-[5%] w-full">
        <p className="text-[#343434] font-medium text-base">
          © Farmcult {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

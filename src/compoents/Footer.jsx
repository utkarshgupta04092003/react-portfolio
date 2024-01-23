import React from 'react';
import { socialMediaUrl } from '../utils/Details';

const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow-lg shadow-white text-white pb-8 py-5">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2024 Utkarsh Gupta. All Rights Reserved.</p>
        <div className="flex justify-center mt-4">
          <a href={socialMediaUrl.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mx-2">
            LinkedIn
          </a>
          <a href={socialMediaUrl.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mx-2">
            GitHub
          </a>
          <a href={socialMediaUrl.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mx-2">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

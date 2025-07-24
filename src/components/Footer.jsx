import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4">
   
      <div className="mb-4">
        <a
          href="https://www.instagram.com/itsmgb_8055"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-4"
        >
          <i className="fab fa-instagram fa-lg"></i>
        </a>
        <a
          href="https://github.com/mallu771"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-4"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mallikarjun-bajantri-b19842180/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-4"
        >
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
      <p className="mb-0"> Social Media Links</p>
    </footer>
  );
};

export default Footer;

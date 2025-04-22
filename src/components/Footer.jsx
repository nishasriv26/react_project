import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-8">
      <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

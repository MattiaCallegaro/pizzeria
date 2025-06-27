import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">🍕 Pizzeria Bella Napoli</p>
        <p className="mb-1">Via Roma 123, 00100 Roma</p>
        <p className="mb-1">Tel: +39 0123 456789</p>
        <div>
          <a href="/" className="text-light mx-2 text-decoration-none">Home</a>
          |
          <a href="/menu" className="text-light mx-2 text-decoration-none">Menu</a>
          
        </div>
        <p className="mt-3 mb-0">&copy; {new Date().getFullYear()} Pizzeria Bella Napoli. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;

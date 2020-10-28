import React from 'react';

const Header = () => (
  <nav
    data-testid="header"
    className="flex px-8 py-2 items-center justify-between bg-gradient-to-r from-primary-dark to-secondary-dark text-white"
  >
    <div>
      <p className="text-lg">Squad Management Tool</p>
    </div>

    <div className="flex items-center">
      <p className="text-sm mr-2 invisible md:visible">John Doe</p>

      <p className="bg-white py-2 px-3 rounded-full text-black">JD</p>
    </div>
  </nav>
);

export default Header;

import React from 'react';
import cn from 'classnames';

const Header = () => (
  <nav
    data-testid="header"
    className={cn(
      'flex items-center justify-between',
      'px-8 py-2 text-white',
      'bg-gradient-to-r from-primary-dark to-secondary-dark'
    )}
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

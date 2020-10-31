import React from 'react';
import cn from 'classnames';
import Header from '../Header';
import Footer from '../Footer';

const Page = ({ children }) => (
  <>
    <Header />

    <div
      data-testid="page"
      className={cn(
        'flex flex-col md:flex-row justify-center',
        'bg-background w-full px-5 md:px-10'
      )}
    >
      {children}
    </div>

    <Footer />
  </>
);

export default Page;

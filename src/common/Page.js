import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Page = ({ children }) => (
  <>
    <Header />

    <div className="flex flex-col md:flex-row bg-background justify-center w-full px-5 md:px-10">
      {children}
    </div>

    <Footer />
  </>
);

export default Page;

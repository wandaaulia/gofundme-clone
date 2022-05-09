import React from 'react';
import {
  FeaturedTopic, Footer, FundContent, Fundraise, GetStarted, Header, MenuBar, Navbar, Step,
} from './components';
import { useGLobalContext } from './contextApp';


const App = () => {
  const {isMenuOpen} = useGLobalContext();

  return (
    <> 
    { !isMenuOpen ? 
    (
      <> 
      <Navbar />
      <Header />
      <Step />
      <FeaturedTopic />
      <Fundraise />
      <FundContent />
      <GetStarted />
      <Footer />
      </>
    ) : (
    <MenuBar /> 
    )
    }
    </>
  );
};

export default App;

import React from 'react';
import Category from './components/category/Category';
import Footer from './components/Footer/Footer';
import ListArticle from './components/listArticle/ListArticle';
import MenuActive from './components/menu/MenuActive';
import Navbar from './components/navbar/Navbar';
import { useGLobalContext } from './contextApp';

const App = () => {
  const { isMenuOpen } = useGLobalContext();
  return (
    <>
      <Navbar />
      <Category />
      <ListArticle />
      <Footer />
      { isMenuOpen && (
        <MenuActive />
      )}
    </>
  );
};

export default App;

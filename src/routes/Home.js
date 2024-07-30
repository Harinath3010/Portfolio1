import React from 'react';
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Work from "../components/Work";
const Home = () => {
  return (
    <h3>
      <Navbar/>
      <Heroimg />
      <Work />
      <Footer />
    </h3>
  );
};

export default Home;

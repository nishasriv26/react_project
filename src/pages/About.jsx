import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1>About Us</h1>
        <p>Learn more about our mission and team.</p>
      </main>
      <Footer />
    </>
  );
}

export default About;

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <nav>
        <button className="web-button" onClick={() => window.location.href = '/'}>
          <img src="/src/assets/me.jpg" alt="Logo" /> Abisheck
        </button>
        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/Aboutus">ABOUT US</Link>
          <Link to="/Contactus">CONTACT US</Link>
        </div>
      </nav>
      <section>
        <h1 
        >Welcome to the Home Page</h1>
        <p>
          Welcome to our platform! At Abisheck's Services, we are committed to delivering 
          top-quality solutions tailored to meet your specific needs. Our mission is to 
          help businesses thrive by providing innovative products and exceptional customer support.
        </p>
        <p>
          Explore our services to discover how we can help you streamline your operations and 
          achieve your goals. With a focus on integrity, innovation, and excellence, we strive 
          to exceed expectations in every project we undertake.
        </p>
        <p>
          Feel free to navigate through the website to learn more about us. Whether you’re here 
          to explore, inquire, or connect, we’re delighted to have you.
        </p>
        <p>
          Start by visiting our <Link to="/Aboutus">About Us</Link> page to learn more about our journey. 
          Need assistance? Head over to the <Link to="/Contactus">Contact Us</Link> page to get in touch.
        </p>
      </section>
      <footer>&copy; Abisheck's product</footer>
    </div>
  );
}

export default Home;
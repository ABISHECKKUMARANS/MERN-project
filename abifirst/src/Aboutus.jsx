import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Aboutus() {
  return (
    <div className="container">
      <nav>
      <button className="web-button" onClick={() => window.location.href = '/'}>
  <img src="/src/assets/me.jpg" alt="Logo" /> WEB
</button>

        <div className="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/Aboutus">ABOUT US</Link>
          <Link to="/Contactus">CONTACT US</Link>
        </div>
      </nav>
      <section>
        <h1>
   About us Page.
        </h1>
        <p>
            Our company has been a leader in the industry for over a decade. 
            We are committed to providing top-quality services and products to our customers.
            Our team of dedicated professionals works tirelessly to ensure customer 
            satisfaction and to uphold our values of integrity, excellence, and innovation.
            We believe in continuous improvement and strive to exceed expectations in everything we do.
            Thank you for taking the time to learn more about us.
        </p>
      </section>
      <footer>
        &copy; Abisheck's product
      </footer>
    </div>
  );
}

export default Aboutus;
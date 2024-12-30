import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Contactus() {
  return (
    <div className="container">
      <nav>
      <button className="web-button" onClick={() => window.location.href = '/'}>
  <img src="/src/assets/me.jpg" alt="Logo" /> WEB
</button>

        <div className="nav-links">
          <Link to="/"> HOME</Link>
          <Link to="/Aboutus">ABOUT US</Link>
          <Link to="/Contactus">CONTACT US</Link>
        </div>
      </nav>
      <section>
        <h1>
            Contact us Page.
        </h1>
            <p>
                If you have any questions or need further information, please feel free to reach out to us. 
                You can contact us via email at contact@abisheck.com or call us at +123 456 7890. 
                We are here to assist you and ensure you have the best experience with our services.
            </p>
        
      </section>
      <footer>
        &copy; Abisheck's product
      </footer>
    </div>
  );
}

export default Contactus;

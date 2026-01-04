import React from "react";

const Nav = () => {
  return (
    <nav>
      <h1>Horizon Courts</h1>

      <ul>
        <li>About Us</li>
        <li className="list">Services</li>
        <li className="list">Coaches</li>
        <li className="list">Events</li>
        <li className="list">Contacts</li>
      </ul>

      <p>
        Book now <i className="ri-arrow-right-up-long-line"></i>
      </p>
    </nav>
  );
};

export default Nav;

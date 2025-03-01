import { useState } from "react";

const Header = () => {
  return (
    <div>
      <h3>Cart React</h3>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div>🛒</div>
      </nav>
    </div>
  );
};

export default Header;

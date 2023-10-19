import { Link } from "react-router-dom";
const Navbarr = () => {
  return (
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Shop</a>
      </li>
    </ul>
  );
};
export default Navbarr;

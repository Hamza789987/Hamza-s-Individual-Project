import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <p style={{ color: "white" }}>
        Hamza's Individual Project: 27th November 2023
      </p>
      <Link style={{ color: "white" }} to='/about'>
        about
      </Link>
    </footer>
  );
};

export default Footer;

import Button from "./Button";
import "./header.css";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>

      {/* if im on the home page then show the button otherwise dont */}
      {location.pathname === "/" && (
        <Button
          onClick={onAdd}
          color={showAdd ? "red" : "green"}
          text={showAdd ? `Close` : `Add`}
        />
      )}
    </header>
  );
};

export default Header;

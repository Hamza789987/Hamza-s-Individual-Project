import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h4 style={{ color: "white" }}>Version 1.0.0</h4>
      <Link style={{ color: "white" }} to='/'>
        Go Back
      </Link>
      <h3 className='thanks'>Thanks for viewing my individual project!</h3>
    </div>
  );
};

export default About;

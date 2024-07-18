import "./index.scss";


interface IProp {
  companyName: string;
  AboutUs: string;
  isLogeed: boolean;
  setIsLoggedIn: (val: boolean) => void;
}

const Navbar = ({ companyName, AboutUs, isLogeed, setIsLoggedIn }: IProp) => {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <a href="#">{companyName}</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">{AboutUs}</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <button
        className="btn"
          style={{ color: "white" ,  marginTop: "5px", padding: "0.6em 1.2em"}}
          onClick={() => {
            setIsLoggedIn(!isLogeed);
          }}
        >
          {isLogeed ? "Logout" : "Login"}
        </button>
      </ul>
    </nav>
  );
};
export default Navbar;

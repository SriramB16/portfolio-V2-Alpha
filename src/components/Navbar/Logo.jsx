import { useLocation } from "react-router-dom";
import navLogo from "../../assets/logos/Navlogo.png";

const Logo = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <a
      href="/"
      className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12"
    >
      <img
        src={navLogo}
        alt="SR Logo"
        className="w-full h-full object-contain dark:invert transition-all duration-300"
      />
    </a>
  );
};

export default Logo;

import { type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVBAR_LINKS } from "../../data/navbarLinks";
import { ROUTES } from "../../data/routes";
import styles from './Navbar.module.css';


const Navbar: FC = () => {


  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);


  return (
    <nav className={styles.navbar}>

      {/* Branding */}
      <Link to={ROUTES.Home.path} className={styles.navbar_brand}>
        MATTHEW BOWMAN
      </Link>

      {/* Links */}
      <ul className={styles.navbar_links}>
        {NAVBAR_LINKS.map(({ label, path }) =>
          path ? (
            <li key={path} className={styles.navbar_linkWrapper}>
              <Link to={path} className={`${styles.navbar_linkItem} ${currentPath === path ? styles.navbar_linkItemSelected : ''}`}>
                {label}
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

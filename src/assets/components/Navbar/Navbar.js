import styles from "./Navbar.module.scss";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  // const menuRef = useRef(null);

  const viewMenu = () => {
    console.log("showMenu", showMenu);
    setShowMenu(!showMenu);
  };

  // const handleClickOutside = (event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setShowMenu(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);


  return (
    <nav className="df jcsb">
      <ul className={`df fr aic jcsa ${styles.desktopNavbar}`}>
        <li className={styles.button2}>
          <span>
            <NavLink to="/">Cours</NavLink>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <NavLink to="/infos">Infos</NavLink>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <NavLink to="/events">Evenements</NavLink>
          </span>
        </li>
        <li className={styles.button2}>
          <span>
            <NavLink to="/contact">Contact</NavLink>
          </span>
        </li>
      </ul>
      {/* <i onClick={viewMenu} className={`fas fa-bars mr10 ${styles.mobileNavbar}`}></i> */}
      <div onClick={viewMenu} className={`burger-menu ${showMenu ? 'active' : ''}`}>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
      {
        showMenu && (
          <>
            <div>
              {/* <div ref={menuRef}> */}
              <MobileMenu setShowMenu={setShowMenu} />
            </div>
          </>
        )
      }
    </nav>
  );
}

export default Navbar;
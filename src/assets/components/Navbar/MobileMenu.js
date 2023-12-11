import styles from "./MobileMenu.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context";

export default function MobileMenu({ setShowMenu }) {
    const { user, logout } = useContext(AuthContext);

    const handleMenuItemClick = () => {
        setShowMenu(false);
    };

    const handleLogoutClick = () => {
        handleMenuItemClick(); 
        logout(); 
    };

    return (
        <>
            {user ? (
                <>
                    <ul className={`card p20 ${styles.menuContainer}`}>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <NavLink to="/">Cours</NavLink>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <NavLink to="/infos">Infos</NavLink>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <NavLink to="/events">Evenements</NavLink>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <NavLink to="/contact">Contact</NavLink>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleMenuItemClick}>
                                <NavLink to="/profile">Profil</NavLink>
                            </span>
                        </li>
                        <li>
                            <span onClick={handleLogoutClick}>
                                <NavLink to="/">Déconnexion</NavLink>
                            </span>
                        </li>
                        {/* <li>
                            <span onClick={handleMenuItemClick}>
                                <NavLink to="/delete">Suppression</NavLink>
                            </span>
                        </li> */}
                    </ul>
                </>
            ) : (

                <ul className={`card p20 ${styles.menuContainer}`}>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <NavLink to="/">Cours</NavLink>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <NavLink to="/infos">Infos</NavLink>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <NavLink to="/events">Evenements</NavLink>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <NavLink to="/contact">Contact</NavLink>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <NavLink to="/createAccount">Inscription</NavLink>
                        </span>
                    </li>
                    <li>
                        <span onClick={handleMenuItemClick}>
                            <NavLink to="/Login">Connexion</NavLink>
                        </span>
                    </li>
                </ul>
            )}
        </>
    );
}
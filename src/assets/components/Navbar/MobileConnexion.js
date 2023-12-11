// import styles from "./MobileConnexion.module.scss";
// import { Link } from "react-router-dom";

// function MobileConnexion({ user, logout }) {
//   return (
//     <ul className={`card p20 ${styles.menuContainer}`}>
//       {user ? (
//         <>
//           <button onClick={logout} className={`btn btn-primary`}>
//             <Link to="/">
//               Logout
//             </Link>
//           </button>
//           <button
//             className={`btn btn-primary-reverse`}>
//             <Link to="/Profile">
//               Profile
//             </Link>
//           </button>
//           <button
//             className={`btn btn-primary`}>
//             <Link to="/Delete">
//               Suppression
//             </Link>
//           </button>
//         </>
//       ) : (
//         <>
//           <button className={`btn btn-primary`}>
//             <Link to="/Register">
//               Inscription
//             </Link>
//           </button>
//           <button
//             className={`btn btn-primary-reverse`}>
//             <i className="fas fa-right-to-bracket mr5"></i>
//             <Link to="/Login">
//               Connexion
//             </Link>
//           </button>
//         </>
//       )}
//     </ul>
//   );
// }

// export default MobileConnexion;
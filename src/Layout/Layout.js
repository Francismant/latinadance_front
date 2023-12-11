// import { Routes, Route } from "react-router-dom";
// import Header from "../Pages/HeaderFooter/Header";
// import Footer from "../Pages/HeaderFooter/Footer";
// import Home from "../Pages/Cours/Home";
// import Infos from "../Pages/Infos/Infos";
// import Register from "../Pages/Forms/Register/Register";
// import Login from "../Pages/Forms/Login/Login";
// import Profile from "../Pages/Profile/Profile";
// import { useState } from "react";
// import MobileMenu from "../assets/components/Navbar/MobileMenu";
// // import MobileConnexion from "../assets/components/Navbar/MobileConnexion";
// import Events from "../Pages/Events/Events";
// import Contact from "../Pages/Contact/Contact";
// import ConditionsGénérales from "../assets/components/ConditionsGénérales/ConditionsGénérales";
// import Delete from "../Pages/DeleteAccount/Delete";

// function Layout() {
//   const [user, setUser] = useState(null);

//   console.log("user", user);

//   function logout() {
//     setUser(null);
//   }

//   function getUser(userLogged) {
//     setUser(userLogged);
//   }

//   return (
//     <>
//       <Header user={user} logout={logout} />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/Infos" element={<Infos />}></Route>
//         <Route path="/Register" element={<Register />}></Route>
//         <Route path="/Login" element={<Login getUser={getUser} />}></Route>
//         <Route path="/Profile" element={<Profile user={user} />}></Route>
//         <Route path="/MobileMenu" element={<MobileMenu />}></Route>
//         {/* <Route
//           path="/MobileConnexion"
//           element={<MobileConnexion user={user} logout={logout} />}
//         ></Route> */}
//         <Route path="/Events" element={<Events user={user} />}></Route>
//         <Route path="/Contact" element={<Contact />}></Route>
//         <Route path="/Conditions" element={<ConditionsGénérales />}></Route>
//         <Route path="/Delete" element={<Delete user={user} logout={logout} />}></Route>
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default Layout;

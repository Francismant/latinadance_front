import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../context";
import { signin } from "../../../apis/users";
import { signout } from "../../../apis/users";
// import { getInfosCours } from "../../../apis/infos" 

export default function AuthProvider({ children }) {
  const userConnect = useLoaderData();
  const [user, setUser] = useState(userConnect);
  console.log(user);
  // const [infos, setInfos] = useState([]);

  async function login(values) {
    const newUser = await signin(values);
    setUser(newUser);
  }

  async function logout(values) {
    const newUser = await signout(values);
    setUser(newUser);
  }

  // async function getInfos(values) {
  //   const newInfos = await getInfosCours(values)
  //   setInfos(newInfos)
  // }



  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        // getInfos,
        // infos
      }}>
      {children}
    </AuthContext.Provider>
  );
}
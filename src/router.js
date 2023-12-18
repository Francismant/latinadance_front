import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { userLoader } from "./loaders/userLoader";
import {
  ProtectedProfileRoute,
  ProtectedRegisterRoute,
  ProtectedPasswordRoute,
} from "./assets/components/ProtectedRoute/ProtectedRoute";
import { lazy } from "react";
const Home = lazy(() => import("./Pages/Homepage/Home.js"));
const Infos = lazy(() => import("./Pages/Infos/Infos.js"));
const Register = lazy(() => import("./Pages/Forms/Register/Register"));
const Login = lazy(() => import("./Pages/Forms/Login/Login"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Events = lazy(() => import("./Pages/Events/Events.js"));
const Delete = lazy(() => import("./Pages/Delete/Delete.js"));
const ConditionsGénérales = lazy(() =>
  import("./assets/components/ConditionsGénérales/ConditionsGénérales.js")
);
const Mentions = lazy(() => import("./assets/components/Mentions/Mentions.js"));
const ForgotPassword = lazy(() => import("./Pages/Security/ForgotPassword.js"));
const ResetPassword = lazy(() => import("./Pages/Security/ResetPassword.js"));
const CreateAccount = lazy(() => import("./Pages/Security/CreateAccount.js"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: userLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "register",
        element: (
          <ProtectedRegisterRoute>
            <Register />
          </ProtectedRegisterRoute>
        ),
      },
      {
        path: "conditions",
        element: <ConditionsGénérales />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "infos",
        element: <Infos />,
      },
      {
        path: "profile",
        element: (
          <ProtectedProfileRoute>
            <Profile />
          </ProtectedProfileRoute>
        ),
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "delete",
        element: <Delete />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "mentions",
        element: <Mentions />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "resetPassword",
        element: (
          <ProtectedPasswordRoute>
            <ResetPassword />,
          </ProtectedPasswordRoute>
        ),
      },
      {
        path: "createAccount",
        element: <CreateAccount />,
      },
    ],
  },
]);

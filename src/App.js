import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthProvider from "../src/assets/components/AuthProvider/AuthProvider";
import Footer from "./Pages/HeaderFooter/Footer";
import Header from "./Pages/HeaderFooter/Header";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Suspense>
          <Outlet />
        </Suspense>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;

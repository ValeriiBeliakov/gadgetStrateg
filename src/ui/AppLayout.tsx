import { Outlet } from "react-router";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import React from "react";

const AppLayout: React.FC = () => {
  return (
    <div className="container">
      <div className="content">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;

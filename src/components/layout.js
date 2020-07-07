import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <>
    <Header />

    <main className="pb-20">
      {children}
    </main>

    <Footer />
  </>
);

export default Layout;

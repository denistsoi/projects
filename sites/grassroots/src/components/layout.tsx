import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex-wrap mx-auto">
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

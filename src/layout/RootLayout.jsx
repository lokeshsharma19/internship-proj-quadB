import React from "react";
import { Link, Outlet, useNavigation } from "react-router-dom";
import Heading from "../components/Heading";

function RootLayout() {
  return (
    <>
      <nav>
        <Link to="/">
          <Heading />
        </Link>
      </nav>
      <main>
        {navigation.state === "loading" ? (
          <>
            <p>loading</p>
          </>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
}

export default RootLayout;

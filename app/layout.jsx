// import React from 'react';
import "@/styles/global.css";
// import { Children } from 'react';
import Nav from "@/components/nav";
import Provider from "@/components/provider";
export const metadata = {
  title: "Promptia",
  description: "Discover and share ai prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
          {/* <h1>Hello</h1> */}
        </main>
      </body>{{}}
    </html>
  );
};
/*  */
export default RootLayout;

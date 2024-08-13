// import react from "react";

// import React from 'react';
import feed from "@/components/feed"
import Nav from "@/components/nav"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        {/* <Nav /> */}
        <h1 className="head_text text-center">
            Discover & Share

            <br className="max-md:hidden" />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>

        </h1>
        <p className="desc text-center">
            Prompt is an open source project
        </p>
{/* feeds  */}
<feed />

    </section>
  )
}

export default Home

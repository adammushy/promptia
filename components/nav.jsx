"use client";

// import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth";

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className=" flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <img
          src="/assets/images/logo.svg"
          alt="promptia Logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptia</p>
      </Link>
      {/* Desktop navigatio */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              {" "}
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              signOut
            </button>
            <Link href="/profile">
              <img
                src="/assets/images/profile.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;

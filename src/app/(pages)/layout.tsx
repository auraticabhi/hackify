"use client"
import Navbar from "@/layouts/Navbar";
import React from "react";
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from "@/context/AuthProvider";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <AuthProvider>
      <NextTopLoader color="purple"/>
      <Navbar />
      {children}
      </AuthProvider>  
    </>
  );
};

export default layout;

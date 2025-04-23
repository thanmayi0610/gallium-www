"use client";

import { betterAuthClient } from "@/lib/integrations/better-auth";
import React from "react";

const NavigationBar = () => {
  const { data } = betterAuthClient.useSession();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-between">
        <span>Gallium</span>
        {data?.user ? (
          <button
            onClick={() => {
              betterAuthClient.signOut();
            }}
          >
            Sign Out
          </button>
        ) : (
          <div className="flex flex-row items-center gap-4">
            <button
              onClick={() => {
                betterAuthClient.signIn.email({
                  email: "thanmayi@gmail.com",
                  password: "HelloWorld@123",
                });
              }}
            >
              Log In
            </button>
            <button
              onClick={() => {
                betterAuthClient.signUp.email({
                  name: "thanmayi",
                  email: "thanmayi@gmail.com",
                  password: "HelloWorld@123",
                });
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
 "client";
import { getToken } from "@/lib/auth";
import { jwtDecode } from "jwt-decode";
import React from "react";

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const token = getToken();
  let username = "Guest";

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (decoded.username) {
        username = decoded.username;
      }
    } catch (e) {
      console.error("Token decoding failed:", e);
    }
  }

  return (
    <div
      className="
        min-h-screen 
        w-full 
        flex 
        flex-col 
        items-center 
        justify-center 
        bg-cover 
        bg-center 
        p-6
      "
      style={{
        backgroundColor: "#0f172a", 
      }}
    >
      <div className="bg-white backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xl w-full">
        <h2 className="text-4xl text-slate font-bold mb-4">
          Welcome, {username}
        </h2>

        {token && (
          <>
            <p className="text-slate font-medium">Your Bearer Token:</p>
            <pre className="p-3 text-xs mt-2 whitespace-normal break-all bg-slate-500 rounded-md">
              {token}
            </pre>
          </>
        )}
      </div>
    </div>
  );
}

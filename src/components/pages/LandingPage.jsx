import { Link } from "react-router-dom";
import { useState } from "react";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to Resume Maker</h1>
      <div className="space-x-4">
        <Link
          to="./signIn"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Sign In
        </Link>
        <Link
          to="./signUp"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

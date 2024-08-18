"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      >
        Sign out
      </button>
    );
  }
  return (
    <div className="space-y-4">
      <button
        onClick={() => signIn("google")}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full flex items-center justify-center"
      >
        <img src="/google-icon.png" alt="Google" className="w-6 h-6 mr-2" />
        Sign in with Google
      </button>
      <button
        onClick={() => signIn("kakao")}
        className="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded shadow w-full flex items-center justify-center"
      >
        <img src="/kakao-icon.png" alt="Kakao" className="w-6 h-6 mr-2" />
        Sign in with Kakao
      </button>
    </div>
  );
}

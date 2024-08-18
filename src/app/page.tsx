import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/utils/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to Next.js Social Login
        </h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {session ? (
            <div className="text-center">
              <p className="text-2xl font-semibold text-gray-700">
                Welcome, {session.user?.userName}!
              </p>
              <p className="mt-2 text-gray-500">You are signed in.</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-xl text-gray-700">You are not signed in.</p>
              <Link
                href="/auth/login"
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Go to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = await auth();

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-red-900 to-black text-white">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">
        <div>
          <h1 className="text-3xl font-bold">
            Motion<span className="text-red-500">Studio</span>
          </h1>
          <p className="text-sm text-gray-400">
            Week 3 • Authentication Assignment
          </p>
        </div>

        {userId ? (
          <UserButton />
        ) : (
          <div className="flex gap-3">
            <Link
              href="/sign-in"
              className="px-5 py-2 rounded-lg border border-red-500 hover:bg-red-500 transition"
            >
              Login
            </Link>

            <Link
              href="/sign-up"
              className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition"
            >
              Become a Member
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Side */}
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-red-600/20 text-red-300 border border-red-500 mb-6">
            Nexora Cyber Tech • Week 3 Assignment
          </span>

          <h2 className="text-6xl font-extrabold leading-tight">
            Login to
            <span className="text-red-500"> MotionStudio </span>
            as a Member
          </h2>

          <p className="text-gray-300 text-lg mt-8 leading-8">
            This project demonstrates a secure authentication system built with
            Next.js and Clerk. Members can create an account, sign in securely,
            access protected routes, use protected API endpoints, and manage
            their profile through a secure dashboard.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            {!userId ? (
              <>
                <Link
                  href="/sign-in"
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Login
                </Link>

                <Link
                  href="/sign-up"
                  className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Become a Member
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Open Dashboard
                </Link>

                <Link
                  href="/api/profile"
                  className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Protected API
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Right Side Card */}
        <div className="rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 p-8 shadow-2xl">

          <h3 className="text-3xl font-bold mb-8">
            Authentication Features
          </h3>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="text-3xl">👤</div>
              <div>
                <h4 className="font-semibold text-lg">
                  Member Registration
                </h4>
                <p className="text-gray-300">
                  Create a MotionStudio member account securely using Clerk.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">🔑</div>
              <div>
                <h4 className="font-semibold text-lg">
                  Secure Login
                </h4>
                <p className="text-gray-300">
                  Authenticate members with secure Clerk sessions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">🛡️</div>
              <div>
                <h4 className="font-semibold text-lg">
                  Protected Dashboard
                </h4>
                <p className="text-gray-300">
                  Only authenticated users can access protected content.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h4 className="font-semibold text-lg">
                  Protected API
                </h4>
                <p className="text-gray-300">
                  API routes are secured using Clerk authentication.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">📄</div>
              <div>
                <h4 className="font-semibold text-lg">
                  User Information
                </h4>
                <p className="text-gray-300">
                  Display member profile details after successful login.
                </p>
              </div>
            </div>

          </div>

          {/* Assignment Status */}
        
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400">
        <p className="text-lg font-semibold">
          MotionStudio Authentication System
        </p>

        <p className="mt-2">
          Week 3 Assignment • Next.js • Clerk Authentication • Tailwind CSS
        </p>

        <p className="mt-1 text-sm">
          Nexora Cyber Tech •  Web Development Internship
        </p>
      </footer>
    </main>
  );
}
"use client";
import Image from "next/image";
import { FaBars } from "react-icons/fa"
import data from "../data.json";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative flex items-center bg-gray-200 px-4 py-2 w-full shadow">
        {/* Toggle Sidebar Button */}
        <button
          className="mr-4 px-1 py-1 text-black rounded hover:bg-gray-300 transition shadow"
          aria-label="Toggle Sidebar"
          onClick={() => setSidebarOpen((open) => !open)}
        >
          <FaBars className="w-6 h-6" />       
          </button>
        <h1 className="text-black font-bold text-xl mx-auto">{data.name}</h1>
      </header>
      {/* Body: Sidebar + Main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-52 bg-gray-200 p-4 shadow transition-all duration-300">
            <Image
              src={data.logo}
              alt="Logo"
              width={60}
              height={60}
              className="rounded mb-4"
            />
            <nav>
              <ul>
                <li className="mb-4">
                  <a
                    href="#"
                    className="text-gray-700 font-semibold"
                  >
                    Sales Dashboard
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-gray-700">
                    Bonus Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700">
                    Sales Tracker
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
        )}
        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Your main content goes here */}
          <p>Welcome to the Employee Hub!</p>
        </main>
      </div>
    </div>
  );
}

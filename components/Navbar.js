"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession();
    const [showDropdown, setshowDropdown] = useState(false)

    return (
        <nav className='sticky top-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/10 text-white flex justify-between items-center px-6 h-16'>

            {/* LOGO */}
            <Link href={"/"}>
                <div className='font-extrabold text-lg tracking-wide hover:opacity-80 transition'>
                    GetMeAChai ☕
                </div>
            </Link>

            {/* RIGHT SIDE */}
            <div className='relative flex items-center gap-4'>

                {session && (
                    <>
                        {/* USER BUTTON */}
                        <button
                            onClick={() => setshowDropdown(!showDropdown)}
                            onBlur={() => setTimeout(() => setshowDropdown(false), 200)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-300 text-sm cursor-pointer"
                        >
                            <span className="hidden sm:block">
                                {session.user.email}
                            </span>

                            {/* AVATAR */}
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-xs font-bold ">
                                {session.user.email?.[0]?.toUpperCase()}
                            </div>

                            <svg className="w-4 h-4 opacity-70" viewBox="0 0 24 24" fill="none">
                                <path stroke="currentColor" strokeWidth="2" d="m19 9-7 7-7-7" />
                            </svg>
                        </button>

                        {/* DROPDOWN */}
                        <div className={`absolute right-0 top-14 w-48 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg p-2 transition-all duration-300 ${showDropdown ? "opacity-100 visible" : "opacity-0 invisible"}`}>

                            <Link href="/dashboard" className="block px-3 py-2 rounded-md hover:bg-white/10 transition">
                                Dashboard
                            </Link>

                            <Link href={`/${session.user.name}`} className="block px-3 py-2 rounded-md hover:bg-white/10 transition">
                                Your Page
                            </Link>

                            <button
                                onClick={() => signOut()}
                                className="w-full text-left px-3 py-2 rounded-md hover:bg-red-500/20 text-red-400 transition cursor-pointer"
                            >
                                Sign out
                            </button>

                        </div>
                    </>
                )}

                {!session && (
                    <Link href={"/login"}>
                        <button className='px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:scale-105 transition duration-300 shadow-lg text-sm cursor-pointer'>
                            Login
                        </button>
                    </Link>
                )}

            </div>
        </nav>
    )
}

export default Navbar
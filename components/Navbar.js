"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
    const { data: session } = useSession();
    const [showDropdown, setshowDropdown] = useState(false)

    return (
        <nav className='bg-blue-950 text-white flex justify-between h-16 items-center px-4'>
            <Link href={"/"}>
                <div className='logo font-black'>
                    <h2>GetMeAChai</h2>
                </div>
            </Link>

            <div className='relative'>

                {session && (
                    <>
                        <button onClick={() => setshowDropdown(!showDropdown)} onBlur={()=>setTimeout(() => {
                            setshowDropdown(false)
                        }, 300)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className=" inline-flex items-center justify-center text-white bg-blue-500 box-border border border-transparent hover:cursor-pointer bg-brand-strong  shadow-xs font-medium leading-5 rounded-lg text-sm px-4 py-2.5 focus:outline-none" type="button">
                            Welcome {session.user.email}
                            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                        </button>

                        <div id="dropdown" className={`z-10 ${showDropdown ? "" : "hidden"} outline-0 bg-slate-500 border border-default-medium rounded-base shadow-lg w-44 ml-3 absolute right-0 mt-2`}>
                            <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <Link href="/dashboard" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Profile</Link>
                                </li>
                                <li>
                                    <Link onClick={()=> signOut()} href="/login" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</Link>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </div>

            {!session && (
                <Link href={"/login"}>
                    <button type='button' className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover: cursor-pointer bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-1.5 text-center leading-5 rounded-md'>
                        Login
                    </button>
                </Link>
            )}

        </nav>

    )
}

export default Navbar
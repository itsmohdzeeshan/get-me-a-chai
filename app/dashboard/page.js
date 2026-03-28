"use client"
import React, { useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {

    const inputStyle = "w-[500px] px-4 py-2 bg-slate-600 text-white rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
    const classicButton = "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover: cursor-pointer bg-gradient-to-bl  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-6 py-2 text-center leading-5 rounded-xl w-[500px]"

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [router, session])

    return (
        <>
            <div className='text-center'>
                <h3 className='font-bold text-3xl my-6 text-white'>
                    Welcome to your Dashboard
                </h3>
            </div>

            <div className='flex flex-col gap-5 items-center'>

                {/* Name */}
                <input className={inputStyle} type="text" placeholder='Name' />
                <input className={inputStyle} type="text" placeholder='Email' />
                <input className={inputStyle} type="text" placeholder='username' />
                <input className={inputStyle} type="text" placeholder='Profile picture' />
                <input className={inputStyle} type="text" placeholder='Cover picture' />
                <input className={inputStyle} type="text" placeholder='RazorPay Credentials' />

                <button type='button' className={`${classicButton}`}>
                    Save
                </button>


            </div>
        </>
    )
}

export default Dashboard
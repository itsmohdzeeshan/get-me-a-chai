"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { updateProfile, fetchUser } from '@/actions/useractions'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import { motion } from 'framer-motion'

const Dashboard = () => {

    const [form, setform] = useState({})
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push('/login')
        } else {
            getData()
        }
    }, [router, session])

    const getData = async () => {
        let user = await fetchUser(session.user.name)
        setform(user || {})
    }

    const handleSubmit = async () => {
        await updateProfile(form, session.user.name)

        toast('Profile has been updated!', {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <>
            <ToastContainer />

            {/* PAGE ANIMATION */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white px-4 py-10"
            >

                {/* TITLE */}
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className='font-bold text-2xl sm:text-3xl text-center mb-10'
                >
                    Welcome to your Dashboard 🚀
                </motion.h3>

                {/* FORM CARD */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg"
                >

                    <form action={handleSubmit} className="flex flex-col gap-5">

                        {/* INPUT COMPONENT */}
                        {[
                            { label: "Name", key: "name" },
                            { label: "Username", key: "username" },
                            { label: "Profile Picture", key: "profilepic" },
                            { label: "Cover Picture", key: "coverpic" },
                            { label: "Razorpay Id", key: "razorpayid" },
                            { label: "Razorpay Secret", key: "razorpaysecret" },
                        ].map((field, i) => (
                            <motion.div
                                key={field.key}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                            >
                                <label className="block mb-1 text-sm text-gray-300">
                                    {field.label}
                                </label>

                                <input
                                    value={form?.[field.key] || ""}
                                    onChange={(e) => setform({ ...form, [field.key]: e.target.value })}
                                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 transition"
                                    placeholder={field.label}
                                />
                            </motion.div>
                        ))}

                        {/* EMAIL (READONLY) */}
                        <div>
                            <label className="block mb-1 text-sm text-gray-300">Email</label>
                            <input
                                readOnly
                                value={form.email || ""}
                                className="w-full px-4 py-2 bg-gray-700/40 border border-white/10 rounded-lg"
                            />
                            <p className="text-xs text-yellow-400 mt-1">
                                ⚠️ Email cannot be changed
                            </p>
                        </div>

                        {/* BUTTON */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="mt-4 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg"
                        >
                            Save Changes
                        </motion.button>

                    </form>
                </motion.div>

            </motion.div>
        </>
    )
}

export default Dashboard
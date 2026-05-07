"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn } from "next-auth/react"
import { useRouter, useSearchParams } from 'next/navigation'

const providers = [
    { id: "google", label: "Continue with Google" },
    { id: "github", label: "Continue with Github" },
]

const Page = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    const [activeProvider, setActiveProvider] = useState("")

    useEffect(() => {
        document.title = "Login - Get me a chai"
        if (session) {
            router.push("/dashboard")
        }
    }, [session, router])

    const handleSignIn = async (providerId) => {
        setActiveProvider(providerId)
        const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"
        await signIn(providerId, { callbackUrl })
        setActiveProvider("")
    }

    return (
        <div className='container mx-auto py-14 text-white flex flex-col items-center'>
            <h3 className='text-center font-bold text-3xl '>Login to get Started</h3>

            <div className="flex flex-col gap-3 p-10 w-full max-w-xs">
                {providers.map((provider) => (
                    <button
                        key={provider.id}
                        onClick={() => handleSignIn(provider.id)}
                        disabled={activeProvider === provider.id}
                        className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {activeProvider === provider.id ? "Redirecting..." : provider.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Page

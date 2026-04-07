import React from 'react'

import PaymentPage from '@/components/PaymentPage'
import connectDB from '@/db/connectDB'
import { notFound } from 'next/navigation'
import User from '@/models/User'

const Username = async ({ params }) => {
    const { username } = await params

    await connectDB()
    const u = await User.findOne({ username: username })
    if (!u) {
        return notFound()
    }

    return (
        <>
            <PaymentPage username={username} />
        </>
    )
}

export default Username

export async function generateMetadata({ params }) {
    const {username} = await params
    return {
        title: `Support ${username} - Get me a chai`
    }
}
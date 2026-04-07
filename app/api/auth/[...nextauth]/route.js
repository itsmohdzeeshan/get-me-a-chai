import mongoose from 'mongoose'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

// imports regarding databases
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDB'

const handler = NextAuth({

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],

    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {
                await connectDB()
                // Check if the user already exists in the database
                const currentUser = await User.findOne({ email: user.email })

                if (!currentUser) {
                    // create a new user
                    const newUser = await new User({
                        email: user.email,
                        username: user.email.split("@")[0]
                    })

                    await newUser.save()
                }
                return true
            }
        },

        async session({ session, user, token }) {
            // while querring to the database we have to use await
            const dbUser = await User.findOne({ email: session.user.email })
            session.user.name = dbUser.username
            return session
        },
    }
})


export { handler as GET, handler as POST }

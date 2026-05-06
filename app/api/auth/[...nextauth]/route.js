import mongoose from 'mongoose'
import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

// imports regarding databases
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDB'

export const authoptions = NextAuth({

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    // prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
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
            } else if (account.provider == "google") {
                await connectDB()

                let currentUser = await User.findOne({ email: user.email })
                console.log("Current user: ", currentUser)
                if (!currentUser) {
                    //create a new user
                    currentUser = await new User({
                        email: user.email,
                        username: user.email.split("@")[0],
                        profilepic: user.image
                    });
                }

                console.log("refresh token: ", account.refresh_token)
                if (account.refresh_token) {
                    currentUser.googleRefreshToken = account.refresh_token
                }

                await currentUser.save()

                return true;
            }
        },

        async session({ session, user, token }) {
            // while querring to the database we have to use await
            await connectDB()
            const dbUser = await User.findOne({ email: session.user.email })
            session.user.name = dbUser.username
            return session
        },
    }
})


export { authoptions as GET, authoptions as POST }

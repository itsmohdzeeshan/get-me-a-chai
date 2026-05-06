import connectDB from "@/db/connectDB";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import { authoptions } from "../../auth/[...nextauth]/route";
import { getNewAccessToken } from "@/utils/googleAuth";

export async function GET(req) {

    await connectDB()

    const session = await getServerSession(authoptions);

    if (!session) {
        return new Response("Unauthorized", { status: 401 })
    }
    const sessionUserEmail = session.user.email

    const dbUser = await User.findOne({ email: sessionUserEmail })

    if (!dbUser || !dbUser.googleRefreshToken) {
        return new Response("No refresh token found", { status: 401 });
    }

    // Now means user have refresh token now we have to check for access token if its exist or not ?
    try {
        // refresh only if needed
        if (!dbUser.googleAccessToken || dbUser.googleAccessTokenExpiry < Date.now()) {
            // now we have to built 
            const newAccessToken = await getNewAccessToken(dbUser);
            dbUser.googleAccessToken = newAccessToken;
            dbUser.googleAccessTokenExpiry = Date.now() + 3600 * 1000;
            await dbUser.save();
        }

        //now do thing
        const accesstoken = dbUser.googleAccessToken
        return new Response(JSON.stringify({ accesstoken }), { status: 200 })
    }
    catch (err) {
        return new Response("Access token refresh failed ", { status: 500 })
    }
}
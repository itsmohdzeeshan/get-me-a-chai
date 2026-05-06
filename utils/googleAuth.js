// utils/googleAuth.js
import { google } from "googleapis";

export async function getNewAccessToken(user) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  oauth2Client.setCredentials({
    refresh_token: user.googleRefreshToken
  });

  const { token } = await oauth2Client.getAccessToken();
  return token;
}

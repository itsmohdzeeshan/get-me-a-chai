import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true },
    username: { type: String },
    profilepic: { type: String },
    coverpic: { type: String },
    razorpayid: {type: String},
    razorpaysecret: {type: String}
}, { timestamps: true })

const User = mongoose.models.User || model("User", UserSchema)
export default User
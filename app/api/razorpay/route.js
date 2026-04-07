import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import connectDB from "@/db/connectDB";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import User from "@/models/User";


export const POST = async (req) => {

    await connectDB()

    let body = await req.formData()
    body = Object.fromEntries(body)


    //check if razorpay orderID is present on the server or not 
    // check “Ye order humne banaya tha ya fake hai?”
    let p = await Payment.findOne({ oid: body.razorpay_order_id })


    if (!p) {
        return NextResponse.json({ success: false, message: "OrderID is not found" })
    }

    const user = await User.findOne({ username: p.to_user })
    const secret = user.razorpaysecret

    //verify the payment 
    let verify = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)


    // if verified then only update the payment status 
    if (verify) {
        // in param=> {new: true} means return the updated document 
        let updatedPayment = await Payment.findOneAndUpdate({
            oid: body.razorpay_order_id
        }, { done: true }, { new: true })

        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    } else {
        return NextResponse.json({ success: false, message: "Payment Verification Failed" })
    }

}
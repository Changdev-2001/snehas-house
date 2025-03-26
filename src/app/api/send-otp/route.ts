import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const redis = new Redis({ url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN });

if (!accountSid || !authToken || !twilioPhone) {
  throw new Error("Twilio environment variables are not set");
}

const client = twilio(accountSid, authToken);

export async function POST(req: NextRequest) {
  try {
    const { mobile } = await req.json();

    // Validate mobile number
    if (!mobile || !/^\+\d{10,15}$/.test(mobile)) {
      return NextResponse.json({ message: "Invalid mobile number format" }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
 // Custom OTP message
 const message = `Your Sneha's House OTP is: ${otp}. It expires in 10 minutes. Do not share it with anyone.`;
     // Store OTP in Redis with a 5-minute expiration
     await redis.setex(`otp:${mobile}`, 300, otp);
     console.log(`OTP for ${mobile}:`, otp); // Debugging
    // Send OTP via Twilio
    await client.messages.create({
      body: message,
      from: twilioPhone,
      to: mobile,
    });

    return NextResponse.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({ message: "Failed to send OTP" }, { status: 500 });
  }
}

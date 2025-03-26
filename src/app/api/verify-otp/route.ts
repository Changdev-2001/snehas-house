import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({ url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN });

export async function POST(req: NextRequest) {
  try {
    const { mobile, otp } = await req.json();

    if (!mobile || !otp) {
      return NextResponse.json({ message: "Mobile and OTP are required" }, { status: 400 });
    }

    const storedOtp = await redis.get(`otp:${mobile}`);

    console.log(`Stored OTP: ${storedOtp}, Inserted OTP: ${otp}`);

    if (storedOtp == otp) {
      await redis.del(`otp:${mobile}`); // Delete OTP after successful verification
      return NextResponse.json({ message: "OTP verified" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

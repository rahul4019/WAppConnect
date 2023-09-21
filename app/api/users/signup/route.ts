import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/db";
import User from "@/models/user";
import { errorHandler } from "@/middlewares/error";

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { name, email, password, pic } = reqBody

        if (!name || !email || !password) {
            return errorHandler(400, "Name, email and password are required")
        }

        // check if user already exist
        const userExist = await User.findOne({ email })
        if (userExist) {
            return errorHandler(400, 'Email already registered')
        }

        // if everything is fine
        const user = await User.create({ name, email, password, pic })

        user.password = undefined;

        return NextResponse.json({ message: 'User registered', success: true, user }, { status: 201 })
    } catch (error) {
        return errorHandler()
    }
}
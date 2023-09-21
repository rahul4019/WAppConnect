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

        const user = await User.create({ name, email, password, pic })

        // if everything is fine generate token from user methods and set cookies
        const token = user.getJwttoken()

        user.password = undefined

        const response = NextResponse.json({ message: 'Login successfull', user, success: true }, { status: 201 })
        response.cookies.set('token', token, { httpOnly: true })
    } catch (error) {
        return errorHandler()
    }
}
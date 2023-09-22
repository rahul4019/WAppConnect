import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/db";
import User from "@/models/user";
import { errorHandler } from "@/middlewares/error";
import jwt from 'jsonwebtoken'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        if (!email || !password) {
            return errorHandler(400, "Email and password are required")
        }

        // check if user exist
        const user = await User.findOne({ email })
        if (!user) {
            return errorHandler(400, 'User does not exist')
        }

        // check for password
        const passwordValidated = await user.isValidatePassword(password)

        if (!passwordValidated) {
            return errorHandler(400, 'Incorrect email or password')
        }

        // create token data
        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
            expiresIn: process.env.JWT_EXPIRY!,
        });

        user.password = undefined

        const response = NextResponse.json({ message: 'Login successfull', user, success: true }, { status: 200 })
        response.cookies.set('token', token, { httpOnly: true })

        return response
    } catch (error) {
        return errorHandler()
    }
}
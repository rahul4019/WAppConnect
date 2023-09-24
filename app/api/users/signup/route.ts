import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/db";
import User from "@/models/user";
import { errorHandler } from "@/middlewares/error";
import jwt from 'jsonwebtoken'

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

        const response = NextResponse.json({ message: 'Signup successfull', user, success: true }, { status: 201 })
        response.cookies.set('token', token, { httpOnly: true })

        return response
    } catch (error) {
        return errorHandler()
    }
}
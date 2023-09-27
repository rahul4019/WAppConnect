import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/db";
import User from "@/models/user";
import { errorHandler } from "@/middlewares/error";
import jwt from 'jsonwebtoken';

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();

        if (reqBody === undefined || !reqBody) {
            return errorHandler(400, "Email and password are required");
        }

        const { email, password } = reqBody;

        if (!email || !password) {
            return errorHandler(400, "Email and password are required");
        }

        // check if user exist
        const user = await User.findOne({ email }).select('-createdAt -updatedAt -__v'); 
        if (!user) {
            return errorHandler(400, 'User does not exist');
        }

        // check for password
        const passwordValidated = await user.isValidatePassword(password);

        if (!passwordValidated) {
            return errorHandler(400, 'Incorrect email or password');
        }

        // create token data
        const tokenData = {
            id: user._id,
            name: user.name,
            email: user.email
        };

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
            expiresIn: process.env.JWT_EXPIRY!,
        });

        user.password = undefined;

        const response = NextResponse.json({ message: 'Login successfull', user, success: true }, { status: 200 });
        response.cookies.set('token', token, { httpOnly: true });

        return response;
    } catch (error) {
        // Handle the unexpected end of JSON input error
        if (error instanceof SyntaxError && error.message === 'Unexpected end of JSON input') {
            return errorHandler(400, 'Invalid JSON request body');
        }
        return errorHandler();
    }
}
import { NextResponse } from "next/server";
import { connect } from "@/config/db";
import { errorHandler } from "@/middlewares/error";

connect();
export async function GET() {
    try {
        const response = NextResponse.json({ message: 'Logout successful', success: true });
        // remove the token from the cookie
        response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });
        return response;
    } catch (error) {
        return errorHandler();
    }
}
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/db";
import { errorHandler } from "@/middlewares/error";
import User from "@/models/user";
import { getDataFromToken } from "@/helpers/getUserFromToken";

connect()

// Returns all users except the loggedin user
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const searchQuery = searchParams.get('search')

        const LoggedInUser = getDataFromToken(request)

        // if user not authorized
        if (!LoggedInUser) {
            return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 })
        }

        // query that searches for name and email field with case insensetivity 
        const keyword = searchQuery ? { $or: [{ name: { $regex: searchQuery, $options: "i" } }, { email: { $regex: searchQuery, $options: "i" } }] } : {}


        // all users except loggedin user
        const users = await User.find(keyword).find({ _id: { $ne: LoggedInUser.id } })

        return NextResponse.json(
            { users, success: true },
            {
                status: 200,
            },
        );
    } catch (error) {
        errorHandler()
    }
}
import { getDataFromToken } from "@/helpers/getUserFromToken";
import { errorHandler } from "@/middlewares/error";
import Chat from "@/models/chat";
import { NextRequest, NextResponse } from "next/server";

//Add user to group
export async function PUT(request: NextRequest) {
    try {
        const LoggedInUser = getDataFromToken(request)

        // if user not authorized
        if (!LoggedInUser) {
            return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 })
        }

        const reqBody = await request.json()
        const { chatId, userId } = reqBody;

        // push user id in the chat's user array
        const updatedChat = await Chat.findByIdAndUpdate(chatId, { $push: { users: userId } },
            { new: true })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")

        if (!updatedChat) {
            return errorHandler(404, 'Chat not found')
        }

        return NextResponse.json({ updatedChat, success: true }, { status: 200 })
    } catch (error) {
        // Handle the unexpected end of JSON input error
        if (error instanceof SyntaxError && error.message === 'Unexpected end of JSON input') {
            return errorHandler(400, 'Invalid JSON request body')
        }
        return errorHandler()
    }

}
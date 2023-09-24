import { getDataFromToken } from "@/helpers/getUserFromToken";
import { errorHandler } from "@/middlewares/error";
import Chat from "@/models/chat";
import { NextRequest, NextResponse } from "next/server";

// Rename group
export async function PUT(request: NextRequest) {
    try {
        const LoggedInUser = getDataFromToken(request)

        // if user not authorized
        if (!LoggedInUser) {
            return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 })
        }

        const reqBody = await request.json()
        const { chatId, chatName } = reqBody;

        if (!chatId || !chatName) {
            return errorHandler(400, 'Please provide chat id and name')
        }

        // update chat 
        const updatedChat = await Chat.findByIdAndUpdate(chatId, { chatName }, { new: true })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")

        if (!updatedChat) {
            return errorHandler(404, 'Chat not found')
        }

        return NextResponse.json({ updatedChat, success: true }, { status: 200 })
    } catch (error) {
        return errorHandler()
    }

}
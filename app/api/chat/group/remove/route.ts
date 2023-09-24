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

        // pull user id in the chat's user array
        const updatedChat = await Chat.findByIdAndUpdate(chatId, { $pull: { users: userId } },
            { new: true })
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
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/db";
import { errorHandler } from "@/middlewares/error";
import User from "@/models/user";
import { getDataFromToken } from "@/helpers/getUserFromToken";
import Message from "@/models/message";
import Chat from "@/models/chat";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { content, chatId } = reqBody;

        if (!content || !chatId) {
            return errorHandler(400, "Content or chat is missing");
        }

        const LoggedInUser = getDataFromToken(request);

        // if user not authorized
        if (!LoggedInUser) {
            return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 });
        }

        let newMessage = {
            sender: LoggedInUser.id,
            content,
            chat: chatId
        };

        let message = await Message.create(newMessage);

        message = await message.populate("sender", "name pic");
        message = await message.populate("chat");
        message = await User.populate(message, {
            path: 'chat.users',
            select: 'name, pic, email'
        });

        await Chat.findByIdAndUpdate(chatId, {
            latestMessage: message,
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
        console.log('Error: ', error.message);
        return errorHandler(400, error.message);
    }
}
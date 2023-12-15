import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/config/db";
import { errorHandler } from "@/middlewares/error";
import User from "@/models/user";
import { getDataFromToken } from "@/helpers/getUserFromToken";
import Message from "@/models/message";
import Chat from "@/models/chat";

connect();

// 
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        console.log('Chat Id: ', new URL(request.url));
        const chatId = searchParams.get('chatId');

        return NextResponse.json(
            { chatId }, { status: 200 }
        );
        // const messages = Message.find()
    } catch (error: any) {
        console.log('Error: ', error.message);
        return errorHandler(400, error.message);
    }
}
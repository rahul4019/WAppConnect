import { NextRequest, NextResponse } from "next/server";
import Chat from "@/models/chat";
import User from "@/models/user";
import Message from "@/models/message";
import { getDataFromToken } from "@/helpers/getUserFromToken";
import { errorHandler } from "@/middlewares/error";


// Access or create one-to-one chat
export async function POST(request: NextRequest) {
    try {
        const LoggedInUser = getDataFromToken(request);
        // if user not authorized
        if (!LoggedInUser) {
            return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 });
        }

        const reqBody = await request.json();
        const { userId } = reqBody;

        // if chat exist find the chat populate desired fields 
        let isChatExist = await Chat.find({
            isGroupChat: false,
            $and: [{ users: { $elemMatch: { $eq: LoggedInUser.id } } }, // check for loggedin user
            { users: { $elemMatch: { $eq: userId } } }] // check for user came in params
        })
            .populate("users", "-password") // populate user field which is referenced, without password
            .populate("latestMessage"); // populate latest message


        // get latest message and sender's name, pic and profile
        isChatExist = await User.populate(isChatExist, {
            path: 'latestMessage.sender',
            select: "name pic email",
        });

        // send the latest message
        if (isChatExist.length > 0) {
            return NextResponse.json(
                { latestMessage: isChatExist[0], success: true },
                {
                    status: 200,
                },
            );
        }
        // otherwise create a new chat
        else {
            const chatData = {
                chatName: "sender",
                isGroupChat: false,
                users: [LoggedInUser.id, userId]
            };

            const createdChat = await Chat.create(chatData);

            const fullChat = await Chat.findOne({ _id: createdChat._id }).populate("users", "-password");

            return NextResponse.json(
                { fullChat, success: true },
                {
                    status: 200,
                },
            );
        }

    } catch (error) {
        // Handle the unexpected end of JSON input error
        if (error instanceof SyntaxError && error.message === 'Unexpected end of JSON input') {
            return errorHandler(400, 'Invalid JSON request body');
        }
        return errorHandler();
    }
}

// Fetch all the chats of a user
export async function GET(request: NextRequest) {
    try {
        const LoggedInUser = getDataFromToken(request);

        // if user not authorized
        if (!LoggedInUser) {
            return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 });
        }

        // get allchats of user and populate desired fields
        let allChats = await Chat.find({ users: { $elemMatch: { $eq: LoggedInUser.id } } })
            .populate("users", "-password") // users of the chat
            .populate("groupAdmin", "-password") // group admin of the chat
            .populate("latestMessage") // latest message
            .sort({ updatedAt: -1 }); // sort it by the latest 
        // populate fields from User 
        allChats = await User.populate(allChats, {
            path: 'latestMessage.sender',
            select: "name pic email"
        });

        return NextResponse.json({ allChats, success: true }, { status: 200 });
    } catch (error) {
        // Handle the unexpected end of JSON input error
        if (error instanceof SyntaxError && error.message === 'Unexpected end of JSON input') {
            return errorHandler(400, 'Invalid JSON request body');
        }
        console.log('Error: ', error);
        return errorHandler();
    }
}
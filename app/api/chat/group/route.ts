import { getDataFromToken } from "@/helpers/getUserFromToken";
import { errorHandler } from "@/middlewares/error";
import Chat from "@/models/chat";
import { NextRequest, NextResponse } from "next/server";

// Create group chat
export async function POST(request: NextRequest) {
    try {
        const LoggedInUser = getDataFromToken(request)

        // if user not authorized
        if (!LoggedInUser) {
            return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 })
        }

        const reqBody = await request.json();
        const { name, users } = reqBody;
        if (!name || !users) {
            return errorHandler(400, "Please provide name and users of the group")
        }

        // users will come as a string array. So, we need to parse it
        let parsedUsers = JSON.parse(users)

        if (parsedUsers.length < 2) {
            return NextResponse.json({ message: "At least 2 users are required to form a group", sucess: false }, { status: 400 })
        }

        // push the loggedIn user in the parsedUsers Array
        parsedUsers.push(LoggedInUser.id)


        // Create group chat
        const groupChat = await Chat.create({
            chatName: name,
            users: parsedUsers,
            isGroupChat: true,
            groupAdmin: LoggedInUser.id,
        })

        // Populate users and groupAdming field of the newly created group chat 
        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")

        return NextResponse.json({ fullGroupChat, success: true }, { status: 200 })
    } catch (error) {
        // Handle the unexpected end of JSON input error
        if (error instanceof SyntaxError && error.message === 'Unexpected end of JSON input') {
            return errorHandler(400, 'Invalid JSON request body')
        }
        return errorHandler()
    }

}
import { getDataFromToken } from "@/helpers/getUserFromToken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const LoggedInUser = getDataFromToken(request)

    // if user not authorized
    if (!LoggedInUser) {
        return NextResponse.json({ success: false, message: "Not authorized" }, { status: 401 })
    }

}
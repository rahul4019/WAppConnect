import { NextResponse } from "next/server"

export const errorHandler = (statusCode = 500, message = 'Internal server Error') => {
    return NextResponse.json(
        { message, success: false },
        {
            status: statusCode,
        },
    );
}


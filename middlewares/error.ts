export const errorHandler = (res, statusCode = 500, message = 'Internal server Error') => {
    return res.status(statusCode).json({
        success: false,
        message
    })
}

export const asyncError = (func) => (req, res) => {
    return Promise.resolve(func(req, res)).catch((error) => errorHandler(res, 500, error.message))
}
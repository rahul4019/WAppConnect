import { asyncError, errorHandler } from "@/middlewares/error";
import User from "@/models/user";
import { connectDB } from "@/utils/features";
import bcrypt from 'bcrypt';

const handler = asyncError(async (req, res) => {
    const { name, email, password, pic } = req.body

    if (!name || !email || !password) return errorHandler(req, 400, 'Name, Email and Password are required!')

    const userExist = await User.findOne({ email });

    if (userExist) {
        return errorHandler(req, 400, 'Email already registered!')
    }

    const user = User.create({ name, email, password: await bcrypt.hash(password, 10) }, pic)

    res.status(201).json({

    })
})
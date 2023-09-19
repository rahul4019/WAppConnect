import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
      default:
        'https://res.cloudinary.com/rahul4019/image/upload/v1695059345/avatar_xf4t46.png',
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

// encrypt password before saving it in the DB
userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

// validate the password with passed on user password
userSchema.methods.isValidatePassword = async function (userSentPassword: string) {
  return await bcrypt.compare(userSentPassword, this.password);
};

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;

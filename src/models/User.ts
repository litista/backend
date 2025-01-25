import mongoose, { Schema, Document, Model } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser extends Document {
  username: string;
  email: string;
  passwordHash: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  hashPassword(password: string): Promise<void>;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
      select: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.hashPassword = async function (
  password: string
): Promise<void> {
  this.passwordHash = await bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = async function (
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

const User = mongoose.model<IUser>('User', userSchema);

export default User;
export { IUser };

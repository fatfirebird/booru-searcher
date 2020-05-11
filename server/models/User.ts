import mongoose, {Document, Schema} from 'mongoose';
import bcrypt from 'bcrypt'

export interface IUser extends Document{
  login: string,
  password: string,
  comparePassword: (password: string) => Promise<boolean>
}

const UserSchema: Schema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre<IUser>('save', async function(next: any) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.comparePassword = async function(comparedPassword: string) {
  return await bcrypt.compare(comparedPassword, this.password)
}

const UserModel = mongoose.model<IUser>('User', UserSchema);
export default UserModel;



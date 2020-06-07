import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const UserSchema = new mongoose.Schema({
  username: String,
  password: {
    type: String,
    select: false,
  },
  writer: Boolean,
  headline: String,
  admin: {
    type: Boolean,
    default: false,
  },
  hours: Number,
  verified: Boolean,
  created: { type: Date, default: Date.now},
});


UserSchema.pre('save', async function(next: mongoose.HookedNextFunction){
  try{
    if(!this.isModified('password')){
      return next();
    }
    const hashed = await bcrypt.hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  }catch(err){
    return next(err)
  }
})
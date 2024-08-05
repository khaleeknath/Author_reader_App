import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

 const Schema = mongoose.Schema;

 export  const userSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
  
    authContact: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        set (value: string) {
            let hashedPassword = bcrypt.hashSync(value, 10);
            console.log(`Hashed Password: ${hashedPassword}`); // Add this line to log the hashed password
            return hashedPassword;
        }
    },
    token: {
        type: String,
        required: false
    },
    roleId: {
        type: Schema.Types.ObjectId,
        ref: 'Roles',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});





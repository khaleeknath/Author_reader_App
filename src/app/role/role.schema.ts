import mongoose from 'mongoose';

 const Schema = mongoose.Schema;

 export const roleSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    }
});





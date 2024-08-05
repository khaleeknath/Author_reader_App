import mongoose from 'mongoose';


 const Schema = mongoose.Schema;

 export  const bookScheme = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: false
    },
    cover: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    tags: {
        type: String,
        required: false
    },
    isPublished: {
        type: Number,
        required: false
    },
    rating: {
        type: Number,
        required: true
    },
    publishDate: {
        type: Date,
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





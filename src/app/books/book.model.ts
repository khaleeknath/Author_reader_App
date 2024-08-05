
import mongoose from 'mongoose';
import { bookScheme } from './book.schema';

export class BookModel {
    private static instance: BookModel;
     public book: any;

    private constructor() {

    }

    public static getInstance(): BookModel {
        if (!BookModel.instance) {
            BookModel.instance = new BookModel();
        }
        return BookModel.instance;
    }

    public async initializeModel(): Promise<void> {
        try {
        
         this.book = mongoose.model('Books', bookScheme);
  
          
        } catch (error) {
            console.error('Error initializing the model:', error);
            throw error;
        }
    }


   
}

import { UserModel } from "../users/user.model";
import { BookModel } from "./book.model";
import { RoleModel } from "../role/role.model";

const ENVConfig = require(`../../config/${process.env.NODE_ENV}.json`);
export class BookService {

  private readonly userModel: UserModel;
  private readonly bookModel : BookModel;
  private readonly RoleModel : RoleModel;


  constructor() {
    this.userModel = UserModel.getInstance();
    this.bookModel = BookModel.getInstance();
    this.RoleModel = RoleModel.getInstance();

  }




   
  public async createBook(book): Promise<any> {
    try {
      const createBook = new this.bookModel.book(book);
      await createBook.save();

      return createBook;

    } catch (error) {
      throw error;
    }
  }


  public async updateBook(book, bookId): Promise<any> {
    try {

      const updatedBook = await this.bookModel.book.updateOne(
        { _id: bookId },
        { $set: { cover  : book.cover ,  title: book.title,  description : book.description, genre : book.genre, publishDate : book.publishDate, price :book.price, tags : book.tags, rating : book.rating} } // Update the token field
      );

      const books = await this.bookModel.book.findOne(
        { _id: bookId }
      );
      return books;
    } catch (error) {
      throw error;
    }
  }


  public async changeBookStatus(bookId): Promise<any> {
    try {

      const bookData = await this.bookModel.book.findOne({_id : bookId})
   

      
      const updatedBook = await this.bookModel.book.updateOne(
        { _id: bookId },
        { $set: { isPublished : bookData.isPublished == 1 ? 0 : 1} } 
      );

      const books = await this.bookModel.book.findOne(
        { _id: bookId }
      );
    return books;
    } catch (error) {
      throw error;
    }
  }

  public async getBookList(userData, searchData): Promise<any> {
    try {
      
      let bookList;
      if (searchData != undefined && searchData != '') {


         bookList = await this.bookModel.book.find({ isPublished: 1 , authorId : userData._id,   title: { $regex: searchData, $options: 'i' }});
         
      }else 
      {

        bookList = await this.bookModel.book.find({ isPublished: 1 , authorId : userData._id});
      }

   
     return bookList;
    
    } catch (error) {
      throw error;
    }
  }


  public async getAuthorList(): Promise<any> {
    try {


      let role = await this.RoleModel.role.findOne({ name: "Author"});
      
      // let bookList;
      // if (searchData != undefined && searchData != '') {


      //    bookList = await this.bookModel.book.find({ isPublished: 1 , authorId : userData._id,   title: { $regex: searchData, $options: 'i' }});
         
      // }else 
      // {

      let authorList = await this.userModel.user.find({ roleId : role._id});
      
      // }

   
     return authorList;
    
    } catch (error) {
      throw error;
    }
  }


  public async getBookListByAuthorId(authorId): Promise<any> {
    try {
      

        let bookList = await this.bookModel.book.find({  authorId : authorId, isPublished : 1 });
        
   
    return bookList;
    
    } catch (error) {
      throw error;
    }
  }


  public async getBookDetails(bookId): Promise<any> {
    try {
      

        let bookDetails = await this.bookModel.book.find({  _id : bookId });
        
   
    return bookDetails;
    
    } catch (error) {
      throw error;
    }
  }



}

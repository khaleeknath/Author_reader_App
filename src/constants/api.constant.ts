/** API constants to be defined here */
export class AppApiConstant {
  public static API = {
    CONTENT: "/content/v1",
    REGISTER :"/register",
    LOGIN : "/login",
    LOGOUT :'/logout',
    CREATE_BOOK : "/create_book",
    UPDATE_BOOK : "/update_book",
    BOOKID :"/bookId",
    BOOK_ID:"/:bookId",
    AUTHORID : "/authorId",
    AUTHOR_ID : "/:authorId",
    CHANGE_PUBLISH_STATUS: "/change_publish_status",
    BOOK_LIST : "/bookList",
    AUTHOR_LIST : "/authorList",
    GET_BOOKS_BY_AUTHOR_ID : "/get_books_by_author_id",
    GET_BOOK_DETAILS : "/get_book_details"
   

  };

  public static PAGE = {
    LOGIN: "/",
   
  };
  public static APP_SERVER = "WELCOME TO TASK MANGEMENT PROJECT";
  public static ERROR_MESSAGES = {
    ERROR_INVALID_INPUT: "Invalid input data",
  };
}

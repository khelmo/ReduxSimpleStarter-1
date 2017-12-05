export function selectBook(book) {
   // console.log('book selected: ',book.title)

    //selectBook is an actionCreator, it needs to return an action, an object with a type property and payload (piece of data)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}
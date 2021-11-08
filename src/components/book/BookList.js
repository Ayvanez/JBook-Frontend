import BookItem from "./BookItem";

const BookList = ({books}) => {
    console.log({books})

    const addBook = (i) => {
        const newBooks = [...books]
        newBooks[i].name = 'hueufhwiyrwrv'
    }

    return (
        <div className={'book-wrapper'}>
            <div>Books:</div>
            <div className={'book-list'}>
                {books.map((book, index) => <BookItem book={book} index={index} addBook={addBook}/>)}
            </div>
        </div>

    )
}
export default BookList
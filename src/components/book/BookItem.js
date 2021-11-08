import '../../static/main.css'
import {Link} from "react-router-dom";
import {HOST} from "../../api/urls";
import './BookItem.css'
const BookItem = ({book, addBook, index}) => {

    return (
        <Link to={`/${book.id}`}>
            <div className={'book-item'}>
                <div className={'book-text'}>Название книги: {book.title}</div>
                <div className={'book-text'}>Описание: {book.description}</div>
                <div className={'book-text'}>Издательство: {book.publisher ? book.publisher.name : 'Отсутствует'}</div>
            </div>
        </Link>
    )
}
export default BookItem

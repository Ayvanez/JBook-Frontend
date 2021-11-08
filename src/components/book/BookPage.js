import {useEffect, useState} from "react";
import {Select} from "antd";
import BookList from "./BookList";
import {getBook} from "../../api/book";
import {useParams} from "react-router-dom"

export const BookPage = () => {
    const { book_id } = useParams();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])
    const [authors, setAuthors] = useState([])
    const [publisher, setPublisher] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        getBook(book_id)
            .then(book => {
                setTitle(book.title)
                setDescription(book.description)
                setCategories(book.categories)
                setAuthors(book.authors)
                setPublisher(book.publisher)
                setLoading(false)
                setError(false)
            })
            .catch(err => {
                    console.log({err})
                    setError(true)
                    setLoading(false)
                }
            )
    }, [book_id])

    return (
        <div>
            {error ? <div>Error loading book</div> : ''}
            {loading ? <div>Loading...</div> : ''}
            {!error && !loading ?
                <div>
                    <div>
                        <h1>{title}</h1>
                    </div>
                    <div>
                        {description}
                    </div>
                    <div>
                        publisher: {publisher.name}
                    </div>
                    <div>
                        categories: {categories.map(category => {
                        return <div>{category.name}</div>
                    })}
                    </div>
                    <div>
                        authors: {authors.map(author => {
                        return <div>{author.name}</div>
                    })}
                    </div>
                </div>
                : ''
            }
        </div>
    )
}
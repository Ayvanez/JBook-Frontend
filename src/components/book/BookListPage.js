import React from 'react';
import {useEffect, useState} from "react";
import {getBooks, getCategories} from "../../api/book";
import BookList from "./BookList";
import {Select,} from 'antd';

const BookListPage = () => {

    const [books, setBooks] = useState([])
    const [loadBooks, setLoadBooks] = useState(true)
    const [errorBooks, setErrorBooks] = useState(false)
    const [chosenCategories, setChosenCategories] = useState([])
    const [categoryOptions, setCategoryOptions] = useState([])

    useEffect(() => {
            getBooks({})
                .then(_books => {
                    console.log({_books})
                    setBooks(_books)
                    setLoadBooks(false)
                    setErrorBooks(false)
                })
                .catch(err => {
                    console.log({err})
                    setErrorBooks(true)
                    setLoadBooks(false)
                })
        }, []
    )
    useEffect(() => {
        let _options = []
        getCategories().then(_categories => {
                _categories.forEach(item => {
                    _options.push(<Select.Option key={item.id}>{item.name}</Select.Option>)
                })
                setCategoryOptions(_options)
            }
        )
    }, [])

    const handleCategoryChange = (ids) => {
        setChosenCategories(ids)
    }

    const filterBooks = () => {
        setLoadBooks(true)
        getBooks({categories:chosenCategories}).then(_books => {
                setBooks(_books)
                setLoadBooks(false)
                setErrorBooks(false)
            }
        ).catch(err => {
            setErrorBooks(true)
            setLoadBooks(false)
        })
    }

    return (
        <div>
            <div>
                <h1>Header</h1>
            </div>
            <div>
                <Select
                    mode="multiple"
                    placeholder="Please select"
                    onChange={handleCategoryChange}
                    style={{width: '30%'}}
                >
                    {categoryOptions}
                </Select>
                <button onClick={filterBooks}>Filter</button>
            </div>
            {errorBooks ? <div>Error loading data</div> : ''}
            {loadBooks ? <div>Loading...</div> : ''}
            {!loadBooks && !errorBooks ? <BookList books={books} error={errorBooks}/> : ''}
        </div>
    )
}
export default BookListPage
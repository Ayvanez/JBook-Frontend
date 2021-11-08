import axios from "axios";
import {HOST} from "./urls";

export const getBooks = async ({categories = []}) => {

    let queries = []
    let queryString = ''
    if (categories.length > 0) {
        let categoriesQueryValue = categories.join(',')
        queries.push(`categories=${categoriesQueryValue}`)
    }
    if (queries.length > 0) {
        queryString = `?${queries.join('&')}`
    }
    console.log({queryString})
    return (await axios.get(`${HOST}/api/books${queryString}`)).data
}
export const getCategories = async () => {
    return (await axios.get(`${HOST}/api/books/categories`)).data
}
export const getBook = async (id) => {
    return (await axios.get(`${HOST}/api/books/${id}`)).data
}
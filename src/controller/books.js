const modelBooks = require("../model/books.js");
const commonHelper = require("../helper/common");

const getBooks = async (req, res, next) => {
    try {
        const result = await modelBooks.getBooks()
        commonHelper.response(res, result, 200, "List of books has been successfully loaded")
        console.log(req.headers['user-id']);
    } catch (error) {
        const errorRes = new Error("Internal Server Error")
        errorRes.status = 500
        console.log(error)
        next(errorRes)
    }
}

const postBooks = async (req, res, next) => {
    try {
        const {title, author} = req.body
        const data = {
            title, author
        }
        const result = await modelBooks.postBooks(data)
        commonHelper.response(res, result, 200, "Book has been successfully inserted")
    } catch (error) {
        const errorRes = new Error("Internal Server Error")
        errorRes.status = 500
        console.log(error)
        next(errorRes)
    }
}

module.exports = {
    getBooks,
    postBooks
}
const connection = require("../config/db");

const getBooks = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM books", (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const postBooks = (data) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO books SET ? ", data, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}


module.exports = {
    getBooks,
    postBooks
}
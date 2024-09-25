const express = require('express')
const router = express.Router()
const Book = require('../models/book.model')

//GET all books

router.get('/', async (req, res) => {

    try {
        const books = await Book.find()
        res(books)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})
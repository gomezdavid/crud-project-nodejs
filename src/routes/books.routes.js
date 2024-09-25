const express = require('express')
const router = express.Router()
const Book = require('../models/book.model')

//MIDDLEWARE para obtener un libro individual



//GET ALL books

router.get('/', async (req, res) => {

    try {
        const books = await Book.find()
        console.log("GET ALL", books)
        if (books.length == 0) {
            return res.status(204).json([])
        }
        res(books)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

//Crear un nuevo libro (RECURSO)
router.post('/', async (req, res) => {

    const { title, author, genre, released_date } = req?.body
    if (!title || !author || !genre || !released_date) {
        return res.status(400).json({
            message: 'The fields title, author, genre and released date are obligatory'
        })
    }

    const book = new Book(

        {
            title: title,
            author: author,
            genre: genre,
            released_date: released_date
        }

    )

    try {
        const newBook = await book.save()
        console.log(newBook)
        res.status(201).json(newBook)
    } catch (error) {

        res.status(400).json({
            message: error.message
        })

    }


})

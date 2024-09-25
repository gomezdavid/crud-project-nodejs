const moongose = require('mongoose')

const bookSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        released_date: String,
    }
)

//se exporta de otra forma porque es un mongomodel.
module.exports = mongoose.model('Book', bookSchema)
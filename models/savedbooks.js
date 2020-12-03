const mongoose = require('mongoose');
const { Schema } = mongoose;

const savedbooksSchema = new Schema({
    title : String,
    authors : [String],
    description : String,
    image : String,
    link : String
})

module.exports = savedbooksSchema;
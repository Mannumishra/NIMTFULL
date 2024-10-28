const mongoose = require("mongoose")

const NewsSchema = new mongoose.Schema({
    newsHeading: {
        type: String,
        required: true
    },
    newsDetails: {
        type: String,
        required: true
    },
    newsDate: {
        type: String,
        required: true
    },
    newsImage: {
        type: String,
        required: true
    },
    newsShowInhomePage: {
        type: String,
        default: "False"
    }
})

const News = mongoose.model("News", NewsSchema)

module.exports = News
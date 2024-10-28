const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "Pending"
    },
    message: {
        type: String,
        required: true
    }
}, { timestamps: true })

const contact = mongoose.model("contact", contactSchema)

module.exports = contact
const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({
    courseCtegory: {
        type: mongoose.Schema.ObjectId,
        ref: "CourseCategory",
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseTopic: {
        type: [String],
        required: true
    },
    courseDuration: {
        type: Number,
        required: true
    },
    courseEnrollment: {
        type: Number,
        default: 0,
    },
    image: {
        type: String,
        required: true
    },
    showinHomePage: {
        type: Boolean,
        default: false
    }
})

const course = mongoose.model("course", CourseSchema)

module.exports = course
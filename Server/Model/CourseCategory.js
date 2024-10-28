const mongoose = require("mongoose")

const courseCategorySchema = new mongoose.Schema({
    courseCategoryName: {
        type: String,
        required: true
    }
}, { timestamps: true })



const categoryCourse = mongoose.model("CourseCategory" , courseCategorySchema)

module.exports = categoryCourse
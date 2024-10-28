const mongoose = require("mongoose")

const courseDetailsSchema = new mongoose.Schema({
    courseName: {
        type: mongoose.Schema.ObjectId,
        ref: "course",
        required: true
    },
    introduction: {
        type: String,
        required: true
    },
    objectives: {
        type: String,
        required: true
    },
    briefContents: {
        type: String,
        required: true
    },
    courseProject: {
        type: String,
        required: true
    },
    certificate: {
        type: String,
        required: true
    },
    audience: {
        type: String,
        required: true
    },
    trainingMethodology: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })

const courseDetails = mongoose.model("courseDetails", courseDetailsSchema)

module.exports = courseDetails
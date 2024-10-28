const { createCategory, getAllCouserCategory, getSingleCouserCategory, deleteCouserCategory, updateCouserCategory } = require("../Controllers/CategoryCourse")

const CourseCategoryRouter = require("express").Router()


CourseCategoryRouter.post("/create-course-category", createCategory)
CourseCategoryRouter.get("/get-course-category", getAllCouserCategory)
CourseCategoryRouter.get("/get-single-course-category/:name", getSingleCouserCategory)
CourseCategoryRouter.put("/update-course-category/:name", updateCouserCategory)
CourseCategoryRouter.delete("/delete-course-category/:name", deleteCouserCategory)

module.exports = CourseCategoryRouter

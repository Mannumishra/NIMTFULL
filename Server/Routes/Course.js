const { createCourse, getAllCourse, deleteCourse, getSingleCourse, updateCourse, getCourseAfterDetails } = require("../Controllers/Course")
const upload = require("../MiddleWare/Multer")

const CourseRouter = require("express").Router()

CourseRouter.post("/create-course",upload.single("image") ,createCourse)
CourseRouter.put("/update-course/:id",upload.single("image") ,updateCourse)
CourseRouter.get("/get-all-course" ,getAllCourse)
CourseRouter.get("/get-all-filter-course" ,getCourseAfterDetails)
CourseRouter.get("/get-single-course/:id" ,getSingleCourse)
CourseRouter.delete("/delete-course/:id" ,deleteCourse)

module.exports = CourseRouter
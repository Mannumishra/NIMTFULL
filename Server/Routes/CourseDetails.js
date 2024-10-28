const { createCourseDetails, updateCourseDetails, getAllCourseDetails, getCourseDetailsById, deleteCourseDetails, getCourseDetailsByName } = require("../Controllers/CourseDetails")
const upload = require("../MiddleWare/Multer")

const CourseDetailsRouter = require("express").Router()

CourseDetailsRouter.post("/create-course-details",upload.single("image") ,createCourseDetails)
CourseDetailsRouter.put("/update-course-details/:id",upload.single("image") ,updateCourseDetails)
CourseDetailsRouter.get("/get-course-details" ,getAllCourseDetails)
CourseDetailsRouter.get("/get-single-course-details/:id" ,getCourseDetailsById)
CourseDetailsRouter.get("/get-single-course-details-by-name/:name" ,getCourseDetailsByName)
CourseDetailsRouter.delete("/delete-course-details/:id" ,deleteCourseDetails)


module.exports = CourseDetailsRouter
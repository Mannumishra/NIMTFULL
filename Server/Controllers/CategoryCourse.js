const course = require("../Model/Course");
const categoryCourse = require("../Model/CourseCategory")

const createCategory = async (req, res) => {
    try {
        const { courseCategoryName } = req.body
        if (!courseCategoryName) {
            return res.status(400).json({
                success: false,
                message: "Course Category Name is must required"
            })
        }
        const changeUppercase = courseCategoryName.toUpperCase();
        const exitName = await categoryCourse.findOne({ courseCategoryName: changeUppercase })
        if (exitName) {
            return res.status(400).json({
                success: false,
                message: "This Name already exists"
            })
        }
        const data = new categoryCourse({ courseCategoryName: changeUppercase })
        await data.save()
        res.status(200).json({
            success: true,
            message: "Course Category Created Successfully",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


const getAllCouserCategory = async (req, res) => {
    try {
        const data = await categoryCourse.find()
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Record Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Record Found Successfully",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getSingleCouserCategory = async (req, res) => {
    try {
        const { name } = req.params
        console.log(name)
        const chnageUpperCase = name.toUpperCase()
        const data = await categoryCourse.findOne({ courseCategoryName: chnageUpperCase })
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Record Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Record Found Successfully",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


const updateCouserCategory = async (req, res) => {
    try {
        const { name } = req.params;
        console.log(name)
        const { courseCategoryName } = req.body;

        if (!courseCategoryName) {
            return res.status(400).json({
                success: false,
                message: "New Course Category Name is required"
            });
        }

        const chnageUpperCase = name.toUpperCase();
        const changeUppercaseNew = courseCategoryName.toUpperCase();

        const data = await categoryCourse.findOne({ courseCategoryName: chnageUpperCase });
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Record Not Found"
            });
        }

        const existName = await categoryCourse.findOne({ courseCategoryName: changeUppercaseNew });
        if (existName) {
            return res.status(400).json({
                success: false,
                message: "This New Course Category Name already exists"
            });
        }

        data.courseCategoryName = changeUppercaseNew || data.courseCategoryName;
        await data.save();

        res.status(200).json({
            success: true,
            message: "Course Category Updated Successfully",
            data: data
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};



const deleteCouserCategory = async (req, res) => {
    try {
        const { name } = req.params
        const chnageUpperCase = name.toUpperCase()
        const data = await categoryCourse.findOne({ courseCategoryName: chnageUpperCase })

        const relatedCourses = await course.find({ courseCtegory: data._id });
        console.log(relatedCourses)
        if (relatedCourses.length > 0) {
            // If there are related courses, send a response indicating deletion is not allowed
            return res.status(400).json({
                success: false,
                message: "This category cannot be deleted because there are related courses."
            });
        }
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Record Not Found"
            })
        }
        await data.deleteOne()
        res.status(200).json({
            success: true,
            message: "Record Deleted Successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}



module.exports = {
    createCategory, getAllCouserCategory, getSingleCouserCategory, updateCouserCategory, deleteCouserCategory
}
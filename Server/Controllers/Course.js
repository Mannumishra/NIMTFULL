const course = require('../Model/Course');
const courseDetails = require('../Model/CourseDetails');
const { uploadImage, deleteImage } = require('../Utils/Cloudnary');
const mongoose = require("mongoose")

const createCourse = async (req, res) => {
    try {
        const { courseCtegory, courseName, courseTopic, courseDuration, showinHomePage, courseEnrollment } = req.body;
        const errorMessages = [];
        if (!courseCtegory) {
            errorMessages.push("Course Category ID is required.");
        }
        if (!courseName) {
            errorMessages.push("Course Name is required.");
        }
        if (!courseTopic || !Array.isArray(courseTopic) || courseTopic.length === 0) {
            errorMessages.push("At least one Course Topic is required.");
        }
        if (!courseDuration) {
            errorMessages.push("Course Duration is required.");
        }
        if (errorMessages.length > 0) {
            return res.status(400).json({ message: 'Validation errors', errors: errorMessages.join(",") });
        }
        if (!req.file) {
            return res.status(400).json({ message: 'Image file is required.' });
        }
        const folderName = 'NIMT';
        const imageUrl = await uploadImage(req.file.path, folderName);

        const upperCaseName = courseName.toUpperCase();
        const exitName = await course.findOne({ courseName: upperCaseName });
        if (exitName) {
            return res.status(400).json({
                success: false,
                message: "This course name already exists."
            });
        }

        const courseData = {
            courseCtegory,
            courseName: upperCaseName,
            courseTopic,
            courseDuration,
            courseEnrollment,
            image: imageUrl,
            showinHomePage: showinHomePage
        };

        const newCourse = new course(courseData);
        await newCourse.save();

        res.status(200).json({ message: 'Course created successfully!', data: newCourse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating course', error: error.message });
    }
};




// Other functions remain unchanged...

// Delete a course by ID
const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await course.findById(id);

        const relatedRecord = await courseDetails.find({ courseName: id })
        // console.log(relatedRecord)
        if (relatedRecord.length > 0) {
            return res.status(400).json({
                success: false,
                message: "This course name cannot be deleted because there are related course details."
            });
        }

        if (!data) {
            return res.status(404).json({ message: 'Course not found.' });
        }
        const publicId = data.image.split('/').pop().split('.')[0]; // Extract public ID from the image URL
        await deleteImage(publicId); // Delete image from Cloudinary

        await course.deleteOne(); // Pass the correct parameter to delete the course
        res.status(200).json({ message: 'Course deleted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting course', error: error.message });
    }
};

const getAllCourse = async (req, res) => {
    try {
        const data = await course.find().populate("courseCtegory")
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Record Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Record Found Successfullt",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error creating course', error: error.message });
    }
}

const getCourseAfterDetails = async (req, res) => {
    try {
        const allCourseDetails = await courseDetails.find().populate('courseName');
        const data = await course.find().populate("courseCtegory");
        const filterData = data.filter(courseItem =>
            !allCourseDetails.some(courseDetail => courseDetail.courseName._id.equals(courseItem._id))
        );
        if (filterData.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No records found."
            });
        }

        // Respond with filtered data
        res.status(200).json({
            success: true,
            message: "Records found successfully.",
            data: filterData
        });
    } catch (error) {
        console.error(error); // Improved error logging
        res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
}



const getSingleCourse = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const data = await course.findById(id).populate("courseCtegory")
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Record Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Record Found Successfullt",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error creating course', error: error.message });
    }
}


const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("UpdateID")
        console.log(req.body)
        const { courseCtegory, courseName, courseTopic, courseDuration, courseEnrollment, showinHomePage } = req.body;

        const courseToUpdate = await course.findById(id);
        if (!courseToUpdate) {
            return res.status(404).json({ message: 'Course not found.' });
        }

        // Validate course category
        if (courseCtegory && !mongoose.Types.ObjectId.isValid(courseCtegory)) {
            return res.status(400).json({ message: 'Invalid course category ID.' });
        }

        // Check if the course name is unique
        const upperCaseName = courseName.toUpperCase();
        const existingCourse = await course.findOne({ courseName: upperCaseName });
        if (existingCourse && existingCourse._id.toString() !== id) {
            return res.status(400).json({ message: 'This course name already exists.' });
        }

        // Handle image update if a new file is provided
        let imageUrl = courseToUpdate.image;
        if (req.file) {
            const publicId = courseToUpdate.image.split('/').pop().split('.')[0]; // Extract public ID
            await deleteImage(publicId); // Delete old image from Cloudinary

            const folderName = 'NIMT';
            imageUrl = await uploadImage(req.file.path, folderName); // Upload new image
        }

        // Prepare updated data
        const updatedData = {
            courseCtegory,
            courseName: upperCaseName,
            courseTopic,
            courseDuration,
            courseEnrollment,
            image: imageUrl,
            showinHomePage
        };

        // Update the course
        await course.findByIdAndUpdate(id, updatedData, { new: true });

        res.status(200).json({ message: 'Course updated successfully!', data: updatedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating course', error: error.message });
    }
};


// Export the controller methods
module.exports = {
    createCourse,
    deleteCourse, getAllCourse, getSingleCourse, updateCourse, getCourseAfterDetails
};

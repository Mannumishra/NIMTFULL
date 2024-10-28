const fs = require('fs');
const { getPublicIdFromUrl, uploadImage, deleteImage } = require('../Utils/Cloudnary');
const courseDetails = require('../Model/CourseDetails');

// Create new Course Details
exports.createCourseDetails = async (req, res) => {
    try {
        // Upload the image to Cloudinary
        const localPath = req.file.path;
        const cloudinaryImage = await uploadImage(localPath, 'course-images');

        // Remove the image from local storage after Cloudinary upload
        fs.unlinkSync(localPath);

        const courseDetailsData = {
            courseName: req.body.courseName,
            introduction: req.body.introduction,
            objectives: req.body.objectives,
            briefContents: req.body.briefContents,
            courseProject: req.body.courseProject,
            certificate: req.body.certificate,
            audience: req.body.audience,
            trainingMethodology: req.body.trainingMethodology,
            image: cloudinaryImage // Use the Cloudinary URL for the image
        };

        const newCourseDetails = await courseDetails.create(courseDetailsData);

        res.status(201).json({
            success: true,
            data: newCourseDetails,
            message: 'Course details created successfully!'
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Update Course Details by ID
exports.updateCourseDetails = async (req, res) => {
    try {
        console.log(req.body)
        let updatedData = {
            courseName: req.body.courseName,
            introduction: req.body.introduction,
            objectives: req.body.objectives,
            briefContents: req.body.briefContents,
            courseProject: req.body.courseProject,
            certificate: req.body.certificate,
            audience: req.body.audience,
            trainingMethodology: req.body.trainingMethodology
        };

        // If a new image is uploaded, upload it to Cloudinary and update the image field
        if (req.file) {
            const localPath = req.file.path;
            const cloudinaryImage = await uploadImage(localPath, 'course-images');

            // Remove the image from local storage after uploading to Cloudinary
            fs.unlinkSync(localPath);

            updatedData.image = cloudinaryImage;
        }

        const updatedCourseDetails = await courseDetails.findByIdAndUpdate(req.params.id, updatedData, {
            new: true,
            runValidators: true
        });

        if (!updatedCourseDetails) {
            return res.status(404).json({ success: false, message: 'Course details not found' });
        }

        res.status(200).json({
            success: true,
            data: updatedCourseDetails,
            message: 'Course details updated successfully!'
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Delete Course Details
exports.deleteCourseDetails = async (req, res) => {
    try {
        const data = await courseDetails.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ success: false, message: 'Course details not found' });
        }
        const publicId = getPublicIdFromUrl(data.image);
        await deleteImage(publicId);
        await courseDetails.deleteOne();
        res.status(200).json({
            success: true,
            message: 'Course details and associated image deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message ,message:"Internal Server Error" });
    }
};


// Get all Course Details
exports.getAllCourseDetails = async (req, res) => {
    try {
        const allCourseDetails = await courseDetails.find().populate('courseName'); // Populate 'courseName' with actual course details
        res.status(200).json({ success: true, data: allCourseDetails });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// Get a single Course Details by ID
exports.getCourseDetailsById = async (req, res) => {
    try {
        const courseId = req.params.id; // Extract the ID from the request parameters
        console.log("Course ID:", courseId);

        // Find the course details by course ID and populate the related course data
        const courseData = await courseDetails.findOne({ courseName: courseId }).populate('courseName');
        console.log(courseData, "Fetched Course Data");

        // Handle case if no data is found
        if (!courseData) {
            return res.status(404).json({ success: false, message: 'Course details not found' });
        }

        // Success response
        res.status(200).json({ success: true, data: courseData }); // Return courseData directly instead of wrapping it in an array
    } catch (error) {
        // Error handling
        console.error("Error fetching course details:", error); // Log the error for debugging
        res.status(500).json({ success: false, message: 'Error fetching course details', error: error.message });
    }
};


exports.getCourseDetailsByName = async (req, res) => {
    try {
        const courseName = req.params.name; // Extract the course name from the request parameters
        // Correct the query structure based on your data model
        const data = await courseDetails.findOne({ "courseName.courseName": courseName }).populate('courseName');
        
        if (!data) {
            return res.status(404).json({ success: false, message: 'Course details not found' });
        }
        
        res.status(200).json({ success: true, data: data });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};


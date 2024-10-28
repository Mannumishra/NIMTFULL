const Gallery = require("../Model/GalleryModel");
const { uploadImage, getPublicIdFromUrl, deleteImage } = require("../Utils/Cloudnary");



// Create a new gallery image
const createGalleryImage = async (req, res) => {
    try {
        const { showinHomePage } = req.body;
        const file = req.file; // The uploaded file

        // Upload image to Cloudinary
        const imageUrl = await uploadImage(file.path, 'gallery'); // Adjust the folder name as needed

        // Create a new Gallery record
        const newGalleryImage = new Gallery({
            image: imageUrl,
            showinHomePage,
        });

        await newGalleryImage.save();
        res.status(201).json({ message: 'Image uploaded successfully', newGalleryImage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to upload image' });
    }
};

// Get all gallery images
const getGalleryImages = async (req, res) => {
    try {
        const galleryImages = await Gallery.find();
        res.status(200).json({
            success: true,
            message: "Record Found Successfully",
            data: galleryImages
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve images' });
    }
};


const getGallerySingle = async (req, res) => {
    try {
        const galleryImages = await Gallery.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Record Found Successfully",
            data: galleryImages
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to retrieve images' });
    }
};
const updateGalleryImage = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Fetch the existing gallery image record from the database
        const galleryImage = await Gallery.findById(id);
        if (!galleryImage) {
            return res.status(404).json({ message: 'Image not found' });
        }

        // If a new file is uploaded, delete the old image from Cloudinary
        if (req.file) {
            const oldImagePublicId = getPublicIdFromUrl(galleryImage.image); // Extract public ID from old image URL
            await deleteImage(oldImagePublicId); // Delete old image from Cloudinary

            // Upload the new image and update the image URL in updateData
            const newImageUrl = await uploadImage(req.file.path, 'gallery');
            updateData.image = newImageUrl;
        }

        // Update the record in the database with the new data
        const updatedImage = await Gallery.findByIdAndUpdate(id, updateData, { new: true });
        res.status(200).json({ message: 'Image updated successfully', updatedImage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update image' });
    }
};


// Delete a gallery image
const deleteGalleryImage = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the gallery image by ID
        const galleryImage = await Gallery.findById(id);
        if (!galleryImage) {
            return res.status(404).json({ message: 'Image not found' });
        }

        // Get the public ID from the image URL and delete the image from Cloudinary
        const publicId = getPublicIdFromUrl(galleryImage.image);
        await deleteImage(publicId);

        // Delete the gallery image from the database
        await Gallery.findByIdAndDelete(id);
        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete image' });
    }
};

module.exports = {
    createGalleryImage,
    getGalleryImages,
    updateGalleryImage,
    deleteGalleryImage,
    getGallerySingle
};

const News = require("../Model/NewsModel");
const { getPublicIdFromUrl, deleteImage, uploadImage } = require("../Utils/Cloudnary");


// Create News Item
const createNews = async (req, res) => {
    try {
        const { newsHeading, newsDetails, newsDate, newsShowInhomePage } = req.body;
        
        // Upload image to Cloudinary
        const newsImage = await uploadImage(req.file.path, 'news');

        // Create and save news item
        const news = new News({
            newsHeading,
            newsDetails,
            newsDate,
            newsImage,
            newsShowInhomePage: newsShowInhomePage || "False"
        });
        await news.save();

        res.status(201).json({ message: 'News item created successfully', news });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create news item' });
    }
};

// Get All News Items
const getAllNews = async (req, res) => {
    try {
        const newsItems = await News.find();
        res.status(200).json(newsItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch news items' });
    }
};

// Get Single News Item
const getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'News item not found' });

        res.status(200).json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch news item' });
    }
};

// Update News Item
const updateNews = async (req, res) => {
    try {
        const { id } = req.params;
        const { newsHeading, newsDetails, newsDate, newsShowInhomePage } = req.body;

        // Find existing news item
        const news = await News.findById(id);
        if (!news) return res.status(404).json({ message: 'News item not found' });

        // Check if a new image file is uploaded
        if (req.file) {
            const oldImagePublicId = getPublicIdFromUrl(news.newsImage);
            await deleteImage(oldImagePublicId); // Delete old image from Cloudinary

            // Upload new image to Cloudinary
            const newImageUrl = await uploadImage(req.file.path, 'news');
            news.newsImage = newImageUrl;
        }

        // Update fields
        news.newsHeading = newsHeading || news.newsHeading;
        news.newsDetails = newsDetails || news.newsDetails;
        news.newsDate = newsDate || news.newsDate;
        news.newsShowInhomePage = newsShowInhomePage || news.newsShowInhomePage;

        // Save updates
        await news.save();
        res.status(200).json({ message: 'News item updated successfully', news });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update news item' });
    }
};

// Delete News Item
const deleteNews = async (req, res) => {
    try {
        const { id } = req.params;

        // Find existing news item
        const news = await News.findById(id);
        if (!news) return res.status(404).json({ message: 'News item not found' });

        // Delete image from Cloudinary
        const imagePublicId = getPublicIdFromUrl(news.newsImage);
        await deleteImage(imagePublicId);

        // Delete the news item from the database
        await News.findByIdAndDelete(id);
        res.status(200).json({ message: 'News item deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete news item' });
    }
};

// Export all controller functions
module.exports = {
    createNews,
    getAllNews,
    getNewsById,
    updateNews,
    deleteNews
};

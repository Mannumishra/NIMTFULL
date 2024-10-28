const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SCRITE
})

const uploadImage = async (file, folderName) => {
    try {
        const imageUrl = await cloudinary.uploader.upload(file, {
            folder: folderName
        })
        return imageUrl.secure_url
    } catch (error) {
        console.log(error)
    }
}

const deleteImage = async (path) => {
    try {
        await cloudinary.uploader.destroy(path)
        console.log("Image Delete Form Cloudnary Successfully")
    } catch (error) {
        console.log(error)
    }
}

const getPublicIdFromUrl = (url) => {
    const parts = url.split('/');
    const folderAndPublicId = parts.slice(-2).join('/'); // Include folder path if any
    return folderAndPublicId.split('.')[0]; // Remove the extension
};

module.exports = {
    uploadImage, deleteImage, getPublicIdFromUrl
}
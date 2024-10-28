const { createGalleryImage, getGalleryImages, getGallerySingle, updateGalleryImage, deleteGalleryImage } = require("../Controllers/GalleryController")
const upload = require("../MiddleWare/Multer")

const GalleryRouter = require("express").Router()


GalleryRouter.post("/create-gallery", upload.single("image"), createGalleryImage)
GalleryRouter.get("/get-gallery", getGalleryImages)
GalleryRouter.get("/get-single-gallery/:id", getGallerySingle)
GalleryRouter.put("/update-gallery/:id", upload.single("image"), updateGalleryImage)
GalleryRouter.delete("/delete-gallery/:id", deleteGalleryImage)

module.exports = GalleryRouter
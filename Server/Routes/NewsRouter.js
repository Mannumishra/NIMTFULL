const { createNews, getAllNews, getNewsById, updateNews, deleteNews } = require("../Controllers/NewsController")
const upload = require("../MiddleWare/Multer")

const NewsRouter = require("express").Router()

NewsRouter.post("/create-news", upload.single("newsImage"), createNews)
NewsRouter.get("/get-news", getAllNews)
NewsRouter.get("/get-single-news/:id", getNewsById)
NewsRouter.put("/update-news/:id", upload.single("newsImage"), updateNews)
NewsRouter.delete("/delete-news/:id", deleteNews)

module.exports = NewsRouter
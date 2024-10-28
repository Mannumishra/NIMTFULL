const { createContact, getContacts, updateContactStatus } = require("../Controllers/QueryController")

const QueryRouter = require("express").Router()

QueryRouter.post("/send-query" ,createContact)
QueryRouter.get("/get-queryes" ,getContacts)
QueryRouter.put("/update-status/:id" ,updateContactStatus)

module.exports = QueryRouter
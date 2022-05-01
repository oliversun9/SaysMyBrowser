const express = require("express")

const handler = require("./request-handler")

const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")
app.set("views", "views")
app.get("/", handler)

app.listen("3000")
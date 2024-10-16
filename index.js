import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let blogs = []; // Use an array to store multiple blog entries

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/create", (req, res) => {
    res.render("createBlog");
});

app.get("/view", (req, res) => {
    res.render("viewBlog", { count: blogs.length, blogs: blogs });
});

app.post("/submit", (req, res) => {
    const newBlog = {
        authorName: req.body.name,
        authorEmail: req.body.email,
        blogTitle: req.body["blog-title"],
        blogText: req.body["blog-text"]
    };

    blogs.push(newBlog);

    res.redirect("/view");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


import express from "express"
import bodyParser from "body-parser"


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public")); 

app.get("/", (req, res) => {
    res.render("index.ejs"); 
});
  

app.post("/create", (req, res) => {
    res.render("CreateBlog.ejs")
});

app.post("/view", (req, res) => {
    res.render("viewBlog.ejs")
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// 1. Import express,body-parser,axios
import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));



app.get("/", (req, res) => {
   
        res.render("index.ejs");
  });




// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
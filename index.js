// 1. Import express,body-parser,axios
import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// 3. Use the public folder for static files.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/search-name", async(req,res) =>{
    const pokeName = req.body.PokemonName;
    console.log(req.body)
    try {
        const result = await axios.get(apiUrl + pokeName);
        console.log(result.data)
        res.render("index.ejs", { content: result.data });
      } catch (error) {
        res.render("index.ejs", { content: error.response.data });
      }
    
  
});
  




// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
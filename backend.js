let express = require("express");
let app = express();
let cors = require('cors');
app.use(cors());
app.get('/',async(req,res)=>{
    let response = await fetch("https://fakestoreapi.com/products");
    let api_data = await response.json();
    console.log(api_data);
    res.send(api_data)
})
let port = 3003;
app.listen(port,()=>{
    console.log("server started");
})
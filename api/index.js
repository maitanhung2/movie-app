const express = require("express");
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const dotenv = require("dotenv")

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("DB conntection Sucessfully"))
.catch(err => console.log(err));

app.listen(port, () => {
    console.log(`BE server running is  ${port} `)
})
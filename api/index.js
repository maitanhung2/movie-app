const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
const db = 'mongodb+srv://root:1234@cluster0.eibio.mongodb.net/netflix?retryWrites=true&w=majority'
//mongoose.connect(process.env.MONGO_URL,{
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
}).then(() => console.log("DB success connect "))
.catch(err => console.log(err));

app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)

app.listen(port, () => {
    console.log(`BE server running is  ${port} `)
})
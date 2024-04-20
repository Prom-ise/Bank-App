const express = require('express');
const app = express();
require('dotenv').config();
let port = process.env.PORT || 7000;
const userRouter = require('./Routes/user.Route');

let cors = require('cors');
let uri = 'mongodb+srv://emmanuelpromise456:Psquad456@cluster0.94uxmpw.mongodb.net/Psquad_db?retryWrites=true&w=majority&appName=Cluster0';
const mongoose = require('mongoose');
app.use(cors())
app.use(express.json({limit: "50mb"}));
app.use("/bank", userRouter);
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.listen(port, () => {
    mongoose.connect(uri)
    .then(()=>{
        console.log(`Server is running on port ${port} and Connected to MongoDB`);
    })
    .catch((err)=>{
        console.log(
            err
        )
    })
})
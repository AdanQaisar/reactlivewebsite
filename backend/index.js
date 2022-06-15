import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import myapproutes from './routes/myapproutes.js'


const app = express();


const url= "mongodb+srv://adanqaisar:adanaman1@cluster0.bcxrw9z.mongodb.net/test";


mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true}).then(()=> {console.log("Connected")})

app.listen(5000);

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));


app.use('/Register', myapproutes );


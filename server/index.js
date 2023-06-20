import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true}));

//bodyparser is a npm module used to process data sent in http request.when client sends request to server it might contain data or files 

//in the body in the form json /binary thats converted into json and size is 30mb extension is also true

app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
//now app.use which is initialising the bodyparser.urlencoded as middleware function its use is to parse the objects or data
//sent in url encoded request basically https request set it to body.request and body.response

app.use(cors());
// const MURL="mongodb+srv://login:login@123@cluster0.j7txqpx.mongodb.net/"

app.get("/",(req,res)=>{
    res.send("hello world")
})
const PORT=process.env.PORT||9000;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>
    console.log(`Server is running on port ${PORT}`))
}).catch((error)=>{
    console.log(`Server is not connected to ${PORT}`)
})
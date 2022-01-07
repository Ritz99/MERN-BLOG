require('dotenv').config(); //looking for .env file in your root folder
const mongoose=require('mongoose');
const app =require('./app');


mongoose.connect(process.env.MONGO_URL).then(data=>{

    console.log("connected to db");

    app.listen(process.env.PORT,()=>{
        console.log("server running")
    })
}).catch(err=>{
    console.log(err)
})
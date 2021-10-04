// const createError=require("http-errors");   
const express = require("express");
const app = express()
const books=require('../Services/services/books');
app.use(express.json());

var routes = require("./routes/allroutes");
app.use("/", routes);

// app.use((req, res, next)=>{
//     // const error=new Error('Not Found');
//     // error.status=404;
//     // next(error);
//     next(createError(404,"Not Found"));
// })
// app.use((error,res,req,next)=>{
//     res.status(error.status || 500);
//     res.send({
//         error:{
//             status:error.status||500,
//             message:error.message
//         }
//     });
// });

app.listen(8000,()=>{
    console.log('listening to port 8000');
})
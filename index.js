// //requiring modules
// const bodyParser = require("body-parser");
// const express = require("express");
// // const res = require("express/lib/response");

// //friring express app
// const app=express();
//  const users=[
//     {id:1, name: 'Ali'},
//     { id:2, name: 'Usman'},
//     { id:3, name: 'Muhammad Usman'}
// ];

// app.use(bodyParser.urlencoded({extended:false}));
// // parse appliction/json
// app.use(bodyParser.json());

// // app.use()
// var router=express.Router();

// const adminMiddleware=(req,res,next)=>{
//     console.log('admin middleware',req.headers);
//     if(req.headers.role==='admin'){
//         return next();
//     }
//     res.status(403).send({status:200,message:"Access not allowed"})
//  };
 
//  router.get("/admin", adminMiddleware,(req,res)=>{
//     console.log('Roter get Working');
//     res.send({status:200,message:'Response from admin route'})
//  });

//  const userMiddleware=(req,res,next)=>{
//     console.log('user middleware',req.headers);
//     if(req.headers.role==='user'){
//         return next();
//     }
//     res.status(403).send({status:200,message:"Access not Allowed "})
//  };
//  router.get("/user", userMiddleware,(req,res)=>{
//     console.log('Roter get Working');
//     res.send({status:200,message:'Response from user route'})
//  });
// //Routes
// // router.get("/users", (req,res)=>{
// //     res.json({
// //         status:'success',
// //         users,
// //     });
// // });

// // router.get("/users/:id", (req,res)=>{
// //     res.json({
// //         status:'success',
// //         user: users.find((el)=>el.id==req.params.id),
// //     });
// // });
// // router.delete('/users/:myId',(req,res)=>{
// //     res.json({
// //         status: 'success',
// //         user:users.find((el)=>(el.id!==req.params.id)),
// //     });
// // });

// // router.post('/users',(req,res)=>{
// // console.log('req.body');
// //     res.json({
// //         status: 'success',
// //         user:users.push(req.body),
// //     });
// // });

// // router.get("/users/:id", (req,res)=>{
// //     console.log('req.body');
// //     const {id}=req.params;
// //     res.json({
// //         status:'success',
// //         user: users.map((el)=>(el.id==id?req.body:el)),
// //     });
// // });





// app.use(router);

// app.all('*',(req,res)=>
// {
//     res.status(404).json(
//         {
//             status:'faild',
//             message:`cant find ${req.orignalurl} on this server`,
//         }
//     )
// })

// //starting server
// app.listen(5000,()=>{
//     console.log('Server listening at port')
// })



var express = require('express');
var bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');

const PORT = 3000;
var app = express();
app.use(express.json());

app.use('/users',userRouter);


app.all('*', (req, res) => {
  res.status(404).json({
    status: 'failed',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

app.use((err, req, res, next) => {
  console.log('err ');
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log('Server listening on PORT', PORT);
});


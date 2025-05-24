const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel= require('./models/users');
const UserModel = require("./models/users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.get('/users' , (req, res) =>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})
app.get('/getUser/:id' , (req, res) =>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, req.body, { new: true })
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(() => res.json({ message: "User deleted" }))
    .catch(err => res.status(500).json({ error: err }));
});

app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err =>res.json(err))
})



app.listen(3001, ()=>{
    console.log("Server is Running");
})


// BUILD YOUR SERVER HERE
const User = require('./users/model');

const express = require('express');

const server= express();

server.use(express.json());


server.post('api/users', async (req, res) => {
 const user = req.body;

 if (!user.name || !user.bio) {
  res.status(400).json({ message: 'must include name and bio' })

 }else {
  try {
   const newCreatedUser = await User.create(user)

   res.status(200).json(newCreatedUser)
  } catch (err) {

   res.status(500).json({ error: err.message })
  }
 }
})

server.get('api/users', async (req, res) => {
 
 try{
  const users =  await User.findAll()
  res.status(200).json(users)
 } catch (err) {
  res.status(500).json({ error: err.message})
 }
})

module.exports = server; // EXPORT YOUR SERVER instead of {}

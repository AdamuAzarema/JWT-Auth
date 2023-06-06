const express = require('express')
const { route } = require('../authentication')
const router = express.Router()

const userController = require('./userController')

router.get('/',(req,res)=>{
    try{
      const userdata = req.claims
      console.log(userdata)
      if(!userdata.email){
          return res.status(400).send('User Email is not available!!')
      }
      userController.findUser(userdata.email,(err,result)=>{
          if(err){
              res.status(400).send(err)
          }
          else{
              res.status(200).send(result)
          }
      })
    }catch(err){
        console.log(err)
      res.status(500).send(err)
    }
})

module.exports = router;
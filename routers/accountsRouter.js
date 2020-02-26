const express = require('express');

const db = require('../data/dbConfig');
const router = express.Router();

router.get('/', async (req, res, next) => {

 try{
   const accounts = await db.select("*").from("accounts");
   res.status(200).json(accounts)
 }catch(err) {
    next(err)
 }
})

router.get('/:id', async (req, res, next) => {

    try{
      const account = await db.first("*").from("accounts").where({id:req.params.id});
      res.status(200).json(account)
    }catch(err) {
       next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const payload = {
            name: req.body.name,
            budget: req.body.budget
        }
      const [id] = await db('accounts').insert(payload)
      const newAcc = await db('accounts').where("id",id).first()
      res.status(201).json(newAcc);
    }catch(err) {
       next(err)
    }
})

router.put('/:id', async (req,res,next) => {
    try{
        const payload = {
            name: req.body.name,
            budget: req.body.budget
        }
      await db('accounts').where("id", req.params.id).update(payload);
      const account = await db('accounts').where("id", req.params.id).first()
      res.json(account)
      
      res.json(newAcc);
    }catch(err) {
       next(err)
    }
})

router.delete('/:id', async (req,res,next) => {
    try{
      await db('accounts').where("id", req.params.id).del()
      res.status(204).end();
    }catch(err) {
       next(err)
    }
})



module.exports = router;
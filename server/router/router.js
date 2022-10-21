import express from 'express'
import hakem from '../db/kimlik.js'

const router = express.Router()
 // 'localhost: 5000'

 router.get('/',async (req,res)=>{
   try{
      const allPosts = await hakem.find()
      console.log(allPosts)
      res.json(allPosts)
   }
   catch(error){
      console.log(error)
   }
 })

 router.get('/:id',async (req,res)=>{
    res.json({message : 'bu bir get isteği2'})
 })

 router.post('/',async (req,res)=>{
    try{
      const post = req.body
      const createdPost = await hakem.create(post)
      res.status(201).json(createdPost)
    }
    catch (error){
      console.log(error)
    }
 })

 router.put('/:id',async (req,res)=>{
    res.json({message : 'bu bir update isteği'})
 })

 router.delete('/:id',async (req,res)=>{
    res.json({message : 'bu bir delete isteği'})
 })

 export default router
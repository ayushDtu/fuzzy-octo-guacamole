require('dotenv').config()
const express = require('express')
// can use import express from 'express'

const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/portfolio', (req, res) => {
    res.send('<a>https://whimsicalayush.netlify.app</a>')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/login', (req,res) =>{
    res.send('<h1>Pleas login at website</h1>')
})

app.get('/install', (req,res) => {
    res.send('Installing')
})
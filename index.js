// //const http = require('http')
// import http from 'http'

// //const gfName = require('./features')

// //import {gfName2,gfName3} from './features.js'
// //import * as myObj from './features.js'
// //console.log(generateLovePercent())
// //console.log(myObj)
// // import fs from 'fs'
// // const home = fs.readFileSync('./index.html')

// import { generateLovePercent } from './features.js'

// const server = http.createServer((req, res) => {
//     console.log(req.method)
//   if (req.url === '/about') {
//     res.end(`<h1>Love is ${generateLovePercent()}</h1>`)
//   } else if (req.url === '/') {
//     res.end('home')
//   } else if (req.url === '/contact') {
//     res.end('<h1>contact page</h1>')
//   } else {
//     res.end('<h1>page not found</h1>')
//   }
// })

// server.listen(5000, () => {
//   console.log('Server is working')
// })

import express from 'express'
import path from 'path'

const app = express()

const users = []

//using middlewares
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.urlencoded({ extended: true }))

//Setting up view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  //const pathlocation = (path.resolve())
  //res.sendFile(path.join(pathlocation,'./index.html'))

  //res.sendFile('index')

  res.render('index', { name: 'chayan' })
})

app.post('/', (req, res) => {
  users.push({ username: req.body.name, email: req.body.email })
  res.render('success')
})

app.listen(5000, () => {
  console.log('Server is working')
})

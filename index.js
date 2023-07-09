import express from 'express'
import path from 'path'
import mongoose from 'mongoose'

mongoose
  .connect('mongodb://127.0.0.1:27017', {
    dbName: 'backend',
  })
  .then(() => console.log('Database Connected'))
  .catch((e) => console.log(e))

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
})

const Message = mongoose.model('Message', messageSchema)

const app = express()

//using middlewares
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.urlencoded({ extended: true }))

//Setting up view engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', { name: 'chayan' })
})

app.get('/success', (req, res) => {
  res.render('success')
})

app.post('/contact', async (req, res) => {
  const { name, email } = req.body
  await Message.create({ name, email })
  res.redirect('/success')
})

app.get('/users', (req, res) => {
  res.json({
    users,
  })
})

app.listen(5000, () => {
  console.log('Server is working')
})

const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const routes = require('./routes/route.js')

const PORT = process.env.PORT || 3000
const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))

app.use(routes)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://andrey:1q2w3e@cluster0.8jrfp.mongodb.net/testDB', {
            useNewUrlParser: true,
            useFindAndModify: false
        })

        app.listen(PORT, () => {
            console.log('Server has been started...')
        })

    } catch (e) {
        console.log(e)
    }
}

start()

app.get('/', function (req, res) {
    res.render('index')
    // res.send('Hello world!')
})
const model = require('../models/model')
const {Router} = require('express')
const router = Router()

router.get('/', async (req, res) => {
    const users = await model.find({}).lean()
    res.render('index',  {
        title: 'Main page',
        users
    })
})

router.post('/', async(req, res) => {
    const user = new model({
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    await user.save()
    res.redirect('/')
})

module.exports = router
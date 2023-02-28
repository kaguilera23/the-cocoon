const User = require("../models/User")

module.exports = {
    getUsers(req, res) {
        User.find({})
        .then((data) => {
            res.json(data)
        })
    },

    createUser(req, res) {
        User.create(req.body)
        .then((newUser) => {
            res.json(newUser)
        })
    }
}
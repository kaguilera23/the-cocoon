const User = require("../models/User")

module.exports = {
    getUsers(req, res) {
        User.find({})
        .select("-__v")
        .then((data) => {
            res.json(data)
        })
    },

    createUser(req, res) {
        User.create(req.body)
        .then((newUser) => {
            res.json(newUser)
        })
    },

    getSingleUser(req, res) {
        User.findOne({
            _id: req.params.userId
        })
        .populate({path: "thoughts"})
        .populate({path: "friends"})
        .select("-__v")
        .then((data) => {
            res.json(data)
        })
    },

   async updateUser (req, res) {
        const updateUser = await User.findOne({
            _id: req.params.userId
        })
        console.log(updateUser)
        updateUser.username = (req.body.username)
        updateUser.save().then((data) => {
            res.json(data)
        })
    },

    deleteUser(req, res) {
        User.findOneAndDelete({
            _id: req.params.userId
        }).then((data) => {
            res.json(data)
        }
        )
    }
}
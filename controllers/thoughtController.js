const Thought = require("../models/Thought")
const User = require("../models/User")

module.exports = {
    getThoughts(req, res) {
        Thought.find({})
        .select("-__v")
        .then((thoughts) => {
            res.json(thoughts)
        })
    },

    postThoughts(req, res) {
        Thought.create(req.body)
        .then((newThought) => {
            res.json(newThought)
        })
    },

    getSingleThought(req, res) {
        Thought.findOne({
            _id: req.params.thoughtId
        }).then((thought) => {
            res.json(thought)
        })
    },

    async updateThought(req, res) {
        const updatedThought = await Thought.findOne({_id: req.params.thoughtId})

        updatedThought.thoughtText = req.body.thoughtText;
        updatedThought.save().then(
            res.json(updatedThought)
        )
    },

    deleteThought(req, res) {
        Thought.deleteOne({
            _id: req.params.thoughtId
        }).then((deletedThought) => {
            res.json(deletedThought)
        })
    }
}
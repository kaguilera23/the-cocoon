const router = require("express").Router();
const {
    getThoughts,
    postThoughts,
    getSingleThought,
    updateThought,
    deleteThought
} = require("../../controllers/thoughtController")

// /api/thoughts
router.route("/").get(getThoughts).post(postThoughts)

// GET a thought by its _id
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id
router.get("", (req, res) => {
    res.send(`Get a specific thought with id ${req.params.thoughtId}`)
})

router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value

router.get("/:thoughtId/reactions", (req, res) => {
    res.send(`You'll create a new reaction with thought Id of ${req.params.thoughtId}`)
})

module.exports = router;
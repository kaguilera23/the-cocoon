const router = require("express").Router();

// /api/thoughts
// GET all thoughts
// POST a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.get("/", (req, res) => {
    res.send("Get All Thoughts")
})

// GET a thought by its _id
// PUT to update a thought by its _id
// DELETE to remove a thought by its _id
router.get("/:thoughtId", (req, res) => {
    res.send(`Get a specific thought with id ${req.params.thoughtId}`)
})

// /api/thoughts/:thoughtId/reactions
// POST to create a reaction stored in a single thought's reactions array field
// DELETE to pull and remove a reaction by the reaction's reactionId value

router.get("/:thoughtId/reactions", (req, res) => {
    res.send(`You'll create a new reaction with thought Id of ${req.params.thoughtId}`)
})

module.exports = router;
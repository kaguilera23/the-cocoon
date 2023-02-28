const router = require("express").Router();
const {
    getUsers,
    createUser
} = require("../../controllers/userController")
// /api/users/all-users
// GET all users
// POST a new user

router.route("/").get(getUsers).post(createUser)

// GET a user by _id and populated thought and friend data
// PUT to update a user by its _id
// DELETE to remove a user by its _id
router.get("/:userId/", (req, res) => {
    res.send(`You requested a user with ID of ${req.params.userId}`)
})



// /api/users/:userID/friends/:friendId
router.get("/:userId/friends/:friendId", (req, res) => {
    res.send(`you're looking at ${req.params.userId}'s friends, specifically ${req.params.friendId}`)
})


module.exports = router;
const router = require("express").Router();
const {
    getUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser
} = require("../../controllers/userController")

// /api/users/
router.route("/").get(getUsers).post(createUser)

// /api/users/:userId
// GET a user by _id and populated thought and friend data
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser)

// /api/users/:userID/friends/:friendId
router.get("/:userId/friends/:friendId", (req, res) => {
    res.send(`you're looking at ${req.params.userId}'s friends, specifically ${req.params.friendId}`)
})

module.exports = router;
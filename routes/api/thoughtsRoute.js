const router = require("express").Router();

router.use("/", (req, res) => {
    res.send("Thoughts Home Slash Works!")
})

module.exports = router;
express = require("express");

const Posts = require("./db");

const router = express.Router();

// GET ROUTES
router.get("/", (req, res) => {
  Posts.find()
    .then(posts => {
      res.status(200).json({
        success: true,
        posts
      });
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        error: "The posts information could not be retrieved"
      });
    });
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;

  Posts.findById(userId)
    .then(post => {
      // console.log(post[0].id);

      if (post.length === 0) {
          return res.status(404).json({
          error: "The user with the specified ID does not exist"
        });
      } else {
         res.status(200).json({ post });
      }
    })
    .catch(err => {
      res.status(500).json({
        success: false,
        error: "The post information could not be retrieved."
      });
    });
});

module.exports = router;

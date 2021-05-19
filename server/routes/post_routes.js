const router = require("express").Router();

router.get("/posts", (req, res) => {
  // res.send("user GET Endpoint Reached");
});

router.post("/posts", (req, res)=>{
    // res.json({msg: "User POST Endpoint Reached"})
})

module.exports = router
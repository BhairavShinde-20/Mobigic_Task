const express = require("express");
const router = express.Router();

//for creating data use post metod
router.post("/",require("./../controllers/user").createUser);

// for gating data used get of all user
router.get("/",require("./../controllers/user").getAllUser);

// for  a gatting  spacific user data we use /:userID   
router.get("/:userID",require("./../controllers/user").getUser);

//for delete data we use delete data with help of userID 
router.delete("/:userID",require("./../controllers/user").deleteUser);

// for updating data we use put method with help of userID
router.put("/:userID",require("./../controllers/user").updateUser);

// export module.exports = router;
module.exports= router;
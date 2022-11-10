const express = require("express");
const router = express.Router();

//for creating data use post metod
router.post("/",require("./../controllers/loginuser").createLoginUser);

// for gating data used get of all user
router.get("/",require("./../controllers/loginuser").getAllLoginUser);

// for  a gatting  spacific user data we use /:userID   
router.get("/:userID",require("./../controllers/loginuser").getLoginUser);

//for delete data we use delete data with help of userID 
router.delete("/:userID",require("./../controllers/loginuser").deleteLoginUser);

// for updating data we use put method with help of userID
router.put("/:userID",require("./../controllers/loginuser").updateLoginUser);

// export module.exports = router;
module.exports= router;
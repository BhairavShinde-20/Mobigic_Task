const userModel = require("./../models/user");
// create new user 
exports.createUser = async (req, res) => {
    try {
        const users = await new userModel(req.body).save();
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}
// get a user using get methon for read data
exports.getAllUser = async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}
exports.getUser = async (req, res) => {
    try {
        const users = await userModel.find({ _id:req.params.userID });
        res.json(users);
    } catch (err) {
        res.json({ err });
    }
}
// delete a spacific user using delete method
exports.deleteUser = (req, res) => {
    userModel.findOneAndDelete({ _id:req.params.userID }, (err, data) => {
        if (err) {
            res.json({ err });
        }
        else {
            res.json(data);
        }
    });
}
// update a spacific user using put method
exports.updateUser = (req, res) => {
    userModel.findOneAndUpdate({ _id: req.params.userID },req.body,{new:true}, (err, data) => {
        if (err) {
            res.json({ err });
        }
        else {
            res.json(data);
        }
    });
}
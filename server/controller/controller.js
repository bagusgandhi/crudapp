let Userdb = require('../model/model');

//create save new user
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message:'Content can not be empty'});
        return;
    }

    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    });

    //save user into database
    user.save(user).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:err.message || "Some error occured while creating a create operations"
        });
    });
}

// retrive and return all users/single user
exports.find = (req, res) => {
    Userdb.find().then(user => {
        res.send(user)
    }).catch(err => {
        res.status(500).send({
            message:err.message || "Error Occured while retrieving user information"
        });
    });
}

//update user
exports.update = (req, res) => {

}

//delete user
exports.delete = (req, res) => {

}
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
        // res.send(data)
        res.redirect('/add-user');
    }).catch(err => {
        res.status(500).send({
            message:err.message || "Some error occured while creating a create operations"
        });
    });
}

// retrive and return all users/single user
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id).then(
            data => {
                if(!data){
                    res.status(404).send({message:"Not found"})
                }else{
                    res.send(data)
                }
            }
        ).catch(err => {
            res.status(500).send({
                message:"error retrieving"
            })
        });


    }else{
        Userdb.find().then(user => {
            res.send(user)
        }).catch(err => {
            res.status(500).send({
                message:err.message || "Error Occured while retrieving user information"
            });
        });
    }

}

//update user
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message:"Data to update cannot be empty" 
        })
    }

    // params :id
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(
        data => {
            if(!data){
                res.status(404).send({message:`Cannot Update user with ${id}.`})
            }else{
                res.send(data)

            }
        }
    ).catch(err => {
        res.status(500).send({
            message:"Error Update user information"
        })
    });
}

//delete user
exports.delete = (req, res) => {
    // params :id
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(400).send({message:`Cannot Delete user with id ${id}`})
        }else{
            res.send({
                message:"User was deleted successfully"
            })
        }
    }).catch(err => {
        res.status(500).send({
            message:"could not delete user with id "+id
        })
    });
}
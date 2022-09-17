const User = require('../model/user.model');

// create new user
exports.createUser = async (req,res)=>{
    try{
        let {name,introduction,eduDetail} = req.body;
        const newUser = await User.create({name,introduction,eduDetail});
        res.status(201).json(newUser);
    }
    catch(e){
        console.log(e.message)
    }
}

exports.userList = async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(e){
        console.log(e.message)
    }

}

exports.userInfo = async (req,res)=>{
    try{
        const id = req.params.id;
        const info = await User.findById(id);
        res.status(200).json(info);
    }
    catch(e){
        console.log(e.message)
    }

}


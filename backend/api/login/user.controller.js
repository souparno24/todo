let userModel = require('../../models/user.model')

module.exports = {
    signup: async (req, res) => {
        dbResult=await userModel.insertMany(
            [
                {
                    "userId":req.body.userid,
                    "userName":req.body.username,
                    "password":req.body.password,

                    " signedUpOn": new Date()
                }
            ]
        )
        let m={
            status:true,
            dbdata:dbResult
        }
        if(dbResult)
        res.send(m)
        else
        res.send({status:false})
        },
    login: async (req,res)=>{
       let result= await userModel.find({userName:req.body.username,password:req.body.password})
      
       let m={
        status:true,
        dbdata:result
    }
       if(result.length>0)
       res.json(m)
       else
       res.send({status:false})

    }

}
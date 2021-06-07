let listModel = require('../../models/list.model')

module.exports = {
    makeuser: async (req,res)=>{
        dbResult=await listModel.insertMany(
            [
                {
                    items:[],
                      
                    createdBy:req.body.createdby,
                    createdOn:new Date(),

                    
                }
            ]
        )
        if(dbResult)


        res.send({ dbData: dbResult})
        else
        res.send({error:'DB ERROR'})
    },
    
    
    add: async (req, res) => {
       dbResult=await listModel.findOneAndUpdate({
        createdBy:req.body.createdby
       },{
        $addToSet:{
            items:req.body.item
        }
       })
      if(dbResult)
      res.send('todo added')
      else
      res.send('db error')
        },
    fetch:  async (req,res)=>{
        let result= await listModel.find({createdBy:req.query.userid},{"items":1,"_id":0})

        res.json(result[0].items)

    }

}
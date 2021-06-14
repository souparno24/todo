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
      res.send(dbResult.items)
      else
      res.send('db error')
        },
    fetch:  async (req,res)=>{
        let result= await listModel.findOne({createdBy:req.query.userid})

        res.json(result.items)

    },
    remove: async(req,res)=>{
        let result= await listModel.findOne({createdBy:req.query.userid})
        result.items =   result.items.filter(
            (e) => e!== req.query.item
          );
 
          await result.save();
          if(result)
          res.send(result.items)
          else
          res.send('db error')
    }
   
} 
const express=require('express');
 const router = express.Router();
  const todoModel = require('../models/todoModel');
const Data = require('../models/todoModel');
 router.use(express.json());
 router.use(express.urlencoded({extended:true}));



//  GET OPERATION
router.get('/', async (req, res) => {
      try {
            const Data = await todoModel.find(); 
        res.status(200).json(Data); 
       } catch (error) {
          console.error('Error in fetch :', error);
          res.status(500).send('Error');
        }
    });
  
// POST OPERATION
router.post('/add',async(req,res)=>{
       try {
           var item = req.body;
            const data1 = new todoModel(item);
           const saveddata = await data1.save();
            res.status(200).send('Post Successful');
    
        } catch (error) {
                 res.status(404).send('Post Unsuccessful');  
           }
        });

        // ADD operation
        
        router.put('/edit/:id',async(req,res)=>{
                try {
                   const id = req.params.id;
                   const data = await todoModel.findByIdAndUpdate(id,req.body);
                   res.status(200).send('Update successful');
               } catch (error) {
              res.status(404).send(error); 
               }
             })
        //   DELETE OPERATION
        
router.delete('/deleTE/:id',async(req,res)=>{
   try {
        const id = req.params.id;
        const data = await todoModel.findByIdAndDelete(id);
         res.status(200).send('Delete successful')
    } catch (error) {
       res.status(404).send('Delete Unsuccessful');
    }
})


module.exports=router
































































































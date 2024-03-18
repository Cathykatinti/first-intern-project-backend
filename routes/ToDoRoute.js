const {Router}= require("express")
const {getToDo,saveToDo,updateToDo,deleteToDo} = require('../controller/ToDoControllers');
const router = Router()

// router.get('/',(req,res)=>{
//     res.json({message:"hi there"})
//     })
router.get('/',getToDo)
// router.get('/_id', getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)
//export module
module.exports = router;
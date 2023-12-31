const express = require('express');
const router = express.Router();
const {getToDo,saveToDo,updateToDo,deleteToDo}=require("../controller/ToDoController");
router.get('/',getToDo);
router.post('/save',saveToDo);
router.post('/update',updateToDo);
router.post('/delete',deleteToDo);

module.exports=router;
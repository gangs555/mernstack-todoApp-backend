const { Router } = require("express");
const {
  getTodo,
  saveToDo,
  deleteToDo,
  updateTodo,
} = require("../controllers/toDoController");

const router = Router();

router.get("/", getTodo);
router.post("/save", saveToDo);
router.post("/update", updateTodo);
router.post("/delete", deleteToDo);

module.exports = router;

const ToDoModel = require("../models/ToDoModel");

module.exports.getTodo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  console.log("text", req);

  ToDoModel.create({ text }).then((data) => {
    console.log("added data");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateTodo = async (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then((data) => {
      console.log("updated data", data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then((data) => {
      console.log("data", data);
      res.send("deleted data");
    })
    .catch((err) => console.log(err));
};

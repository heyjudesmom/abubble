const ToDo = require('../../models/todo');

module.exports = {
    getAll,
    create,
    delete: deleteToDo,
}

async function getAll(req, res) {
    const todos = await ToDo.find({
        user: req.user._id
    });
    res.json(todos);
}

async function create(req, res) {
    req.body.user = req.user._id;
     const todo = await ToDo.create(req.body);
    res.json(todo);
}

async function deleteToDo(req, res, next) {
    try {
        const deletedToDo = await ToDo.findOneAndDelete({'_id': req.params.id, 'user': req.user._id});
        res.json(deletedToDo);
    } catch (err) {
        return next(err);
    }
}

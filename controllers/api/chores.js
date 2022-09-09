const Chore = require('../../models/chore');

module.exports = {
    getAll,
    create,
    delete: deleteChore,
    // update: updateChore,
}

async function getAll(req, res) {
    const chores = await Chore.find({
        user: req.user._id
    });
    res.json(chores);
}

async function create(req, res) {
    req.body.user = req.user._id;
     const chore = await Chore.create(req.body);
    res.json(chore);
}

async function deleteChore(req, res, next) {
    try {
        const deletedChore = await Chore.findOneAndDelete({'_id': req.params.id, 'user': req.user._id});
        res.json(deletedChore);
    } catch (err) {
        return next(err);
    }
}

// async function updateChore(req, res) {
//     console.log("req:",req)
//     const chore = await Chore.findByIdAndUpdate({'_id': req.params.id});
//     console.log("chore:",chore)
//     res.json(chore);
// }
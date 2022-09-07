const Chore = require('../../models/chore');

module.exports = {
    getAll,
    create,
    delete: deleteChore,
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

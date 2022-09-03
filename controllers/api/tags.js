const Tag = require('../../models/tag');

module.exports = {
    getAll,
    create,
}

async function getAll(req, res) {
    const tags = await Tag.find({
        user: req.user._id
    });
    res.json(tags);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const tag = await Tag.create(req.body);
    res.json(tag);
}

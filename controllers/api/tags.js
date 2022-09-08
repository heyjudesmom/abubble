const Tag = require('../../models/tag');

module.exports = {
    getAll,
    create,
    delete: deleteTag,
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

async function deleteTag(req, res, next) {
    try {
        const deletedTag = await Tag.findOneAndDelete({'_id': req.params.id, 'user': req.user._id});
        res.json(deletedTag);
    } catch (err) {
        return next(err);
    }
}
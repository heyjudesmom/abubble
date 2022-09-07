const Appointment = require('../../models/appointment');
const Tag = require('../../models/tag');

module.exports = {
    getAll,
    create,
}

async function getAll(req, res) {
    const appts = await Appointment.find({
        user: req.user._id
    });
    res.json(appts);
}

async function create(req, res) {
    req.body.user = req.user._id;
     const appt = await Appointment.create(req.body);
    res.json(appt);
}

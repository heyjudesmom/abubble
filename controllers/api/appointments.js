const Appointment = require('../../models/appointment');

module.exports = {
    getAll,
    create,
    delete: deleteAppt,
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

async function deleteAppt(req, res, next) {
    try {
        const deletedAppt = await Appointment.findOneAndDelete({'_id': req.params.id, 'user': req.user._id});
        res.json(deletedAppt);
    } catch (err) {
        return next(err);
    }
}

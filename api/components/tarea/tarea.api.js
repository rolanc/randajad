const TareaModel = require('./tarea.model');

module.exports.registerTarea = (req, res) => {
    console.log(req);
    var newTarea = Object.assign(new TareaModel(), req.body);

    newTarea.save((err) => {
        if (err) {
            res.json({ success: false, msj: 'Ha ocurrido un error en el registro de usuarios' + err });
        } else {
            res.json({ success: true, msj: 'Se registró el usuario correctamente' });
        }
    });
};

module.exports.listTarea = (req, res) => {
    TareaModel.find().then((tareas) => {
        res.send(tareas);
    });
};

module.exports.updateTarea = (req, res) => {
    TareaModel.findByIdAndUpdate(req.body._id, { $set: req.body }, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'No se ha actualizado.' + handleError(err) });

        } else {
            res.json({ success: true, msg: 'Se ha actualizado correctamente.' + res });
        }
    });
};
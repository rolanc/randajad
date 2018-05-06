const express = require('express'),
      router = express.Router(),
      hotels = require('./tarea.api');

router.param('id', (req, res, next, id) => {
  req.body._id = id;
  next();
});

router.route('/save_tarea')
  .post((req, res) => {
    hotels.registerTarea(req,res);
});

router.route('/get_all_tareas')
  .get((req, res) => {
    tareas.listTarea(req,res);
});

router.route('/update_tarea')
  .put((req, res) => {
    tareas.updateTarea(req,res);
});

module.exports = router;
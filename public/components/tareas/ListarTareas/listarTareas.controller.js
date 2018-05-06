(() => {
  'use strict';
  angular
    .module('randajad')
    .controller('controladorListarTarea', controladorListarTarea);

    controladorListarTarea.$inject = ['$http', '$stateParams', '$state', 'ServicioTarea']; 

  function controladorListarTarea($http, $stateParams, $state, ServicioTarea) {
    let vm = this;

   
    vm.listaTareas = ServicioTarea.getTareas();

    vm.filtarListaPorTIpo = (tipoTarea) => {
      vm.listaTarea = ServicioTarea.getTareasPorTipo(tipoTarea);
    }

    vm.verTarea = (tarea) => {
      $state.go('main.verTarea', {idTarea: tarea.getId()})
    }

    vm.editar = (tarea) => {
      $state.go('main.modificarTareas', {idTarea: tarea.getId()})
    }
    
  }
})();
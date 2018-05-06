(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('ControladorRegistrarTarea', ControladorRegistrarTarea);

        ControladorRegistrarTarea.$inject = ['$http', 'NgMap', 'ServicioTarea'];

    function ControladorRegistrarTarea($http, NgMap, ServicioTarea) {
        const vm = this;

     
     
        vm.nuevoTarea = {};

     

        
        vm.registerTarea = (pnuevoTarea) => {
            pnuevoTarea._id = 0;
            

            console.log(pnuevoTarea);

            let nuevoTarea = Object.assign(new Tarea(), pnuevoTarea);

            console.log(nuevoTarea);

            let success = ServicioTarea.setTarea(nuevoTarea);

            if (success == true) {
                swal({
                    title: "Registro exitoso",
                    text: "El usuario se ha registrado correctamente",
                    icon: "success",
                    button: "Aceptar"
                });
                vm.nuevoTarea = null;
            } else {
                swal({
                    title: "Registro fallido",
                    text: "Ha ocurrido un error, inténtelo nuevamente más tarde",
                    icon: "error",
                    button: "Aceptar"
                });
            }
        }

    }
})();
(() => {
    'use strict';
    angular
        .module('randajad')
        .controller('controladorModificarTarea', controladorModificarTarea);

    controladorModificarTarea.$inject = ['$http', '$stateParams', '$state', 'NgMap', 'ServicioTarea'];

    function controladorModificarHotel($http, $stateParams, $state, NgMap, ServicioTarea) {
        const vm = this;

       
        let hotelPorEditar = ServicioHotel.getHotelPorId($stateParams.idHotel);

        vm.rellenarCantones(hotelPorEditar.getProvincia()._id);
        vm.rellenarDistrito(hotelPorEditar.getCanton()._id);

        vm.hotelPorModificar = {
            tipoHotel : hotelPorEditar.getTipoHotel(),
            nombreHotel : hotelPorEditar.getNombreHotel(),
            foto : hotelPorEditar.getFoto(),
            latitud : hotelPorEditar.latitud,
            longitud : hotelPorEditar.longitud,
            provincia : hotelPorEditar.getProvincia(),
            canton : hotelPorEditar.getCanton(),
            distrito : hotelPorEditar.getDistrito(),
            direccion : hotelPorEditar.getDireccion(),
            telefonoServicioCliente : hotelPorEditar.getTelefonoServicio(),
            correoServicioCliente : hotelPorEditar.getCorreoServicio(),
            telefonoReservacion : hotelPorEditar.getTelefonoReservacion(),
            correoReservacion : hotelPorEditar.getCorreoReservacion()
        }

        vm.cloudObj = servicioImagen.getConfiguration();

        vm.modificarHotel = (pnuevoHotel) => {
            pnuevoHotel._id = hotelPorEditar.getId();

            let nuevoHotel = Object.assign(new Hotel(), pnuevoHotel);

            let success = ServicioHotel.updateHotel(nuevoHotel);

            if (success == true) {
                swal({
                    title: "Registro exitoso",
                    text: "El usuario se ha registrado correctamente",
                    icon: "success",
                    button: "Aceptar"
                });
                vm.hotelPorModificar = null;
                $state.go('main.listarHotel');
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
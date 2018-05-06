(() => {
    'use strict'
    angular
        .module('randajad')
        .service('ServicioTarea', ServicioTarea);

    ServicioTarea.$inject = ['$http', '$log', 'dataStorageFactory']

    function ServicioTarea($http, $log, dataStorageFactory) {
        const publicUserAPI = {
            setTarea: _setTarea,
            updateTarea: _updateTarea,
            getTarea: _getTarea,
            getTareasPorTipo: _getTareasPorTipo,
            getTareaPorId: _getTareaPorId
        }
        return publicUserAPI;

        function _setTarea(tareaData) {
            let tareaList = _getTarea(),
                repeat = false,
                success;

            for (let i = 0; i < tareaList.length; i++) {
                if (tareaList[i].getId() === tarealData.getId()) {
                    repeat = true;
                }
            }

            if (repeat == false) {
                success = dataStorageFactory.setTareaData(tareaData);
            } else {
                success = false;
            }

            return success;
        }

        function _getTarea() {
            let tareaData = dataStorageFactory.getTareaData(),
                tareaList = [];

            tareaData.forEach(obj => {
                let tempTarea = Object.assign(new Tarea(), obj);

                tareaList.push(tempTarea)
            });

            return tareaList;
        }

        function _updateTarea(tareaData) {
            let tareaList = _getTarea(),
                success;
            success = dataStorageFactory.updateHotelData(hotelData);
            return success;
        }

        function _getTareasPorTipo(tipoTarea) {
            let listaTareas = _getTarea(),
                listaFiltrada = [];

            for (let i = 0; i < listaHoteles.length; i++) {
                if (listaHoteles[i].getTipoHotel() == tipoHotel) {
                    listaFiltrada.push(listaHoteles);
                }
            }
            return listaFiltrada;
        }

        function _getHotelPorId(idHotel) {
            let listaHoteles = _getHotel(),
                hotel;
            for (let i = 0; i < listaHoteles.length; i++) {
                if (listaHoteles[i].getId() == idHotel) {
                    hotel = listaHoteles[i];
                }
            }
            return hotel;
        }

    }
})();
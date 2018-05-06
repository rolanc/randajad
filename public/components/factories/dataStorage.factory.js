(()=>{
    'use strict';
    angular
    .module ('randajad')
    .factory ('dataStorageFactory', dataStorageFactory);

    function dataStorageFactory(){
        const dataAPI = {
            setUserData : _setUserData,
            getUserData : _getUserData,
            setSession: _setSession,
            closeSession: _closeSession,
            getSession: _getSession
        }

        return dataAPI;

        function _setUserData(userData) {
            let response;

            let request = $.ajax({
                url: 'http://localhost:4000/api/save_user',
                type: 'post',
                contentType: 'application/x-www-form-urlencoded; charset=utf-8',
                dataType: 'json',
                async: false,
                data: {
                    'primerNombre' : userData.primerNombre, 
                    'segundoNombre' : userData.segundoNombre, 
                    'primerApellido' : userData.primerApellido,  
                    'segundoApellido' : userData.segundoApellido, 
                    'cedula' : userData.cedula, 
                    'correo' : userData.correo, 
                    'contrasenna' : userData.contrasenna, 
                    'rol' : userData.rol,
                    'edad' : userData.edad,
                    'telefono' : userData.telefono
                }
            });

            request.done((res) => {
                response = res.success;
                console.log(res.msj);
            });
            request.fail((error) => {
                response = error;
                console.log('Ocurrió un error');
            });

            return response;
        }

        function _getUserData (){
            let listaUsuarios = [];
            
            let request = $.ajax({
                url: 'http://localhost:4000/api/get_all_users',
                type: 'get',
                contentType: 'aplication/x-www-form-urlencoded;charset=utf-8',
                dataType: 'json',
                async: false,
                data: {}
            });

            request.done ((userListBD) => {
                listaUsuarios = userListBD;
            })

            request.fail(()=> {
                listaUsuarios = [];
                console.log ('Ocurrió un error');
            });
            return listaUsuarios; 
        }

       


        function _setSession(value) {
            let response = true;
            sessionStorage.setItem('session', JSON.stringify(value));
            return response;
        }

        function _closeSession() {
            let response = true;
            sessionStorage.removeItem('session');
            return response;
        };

        function _getSession() {
            let sessionActive = JSON.parse(sessionStorage.getItem('session'));
            return sessionActive;
        }
    }
})();

(() => {
    angular
        .module('randajad')
        .controller('inicioSesion', inicioSesion);

        inicioSesion.$inject = ['$state', 'loginService'];

    function inicioSesion($state, loginService) {
        const vm = this;

        vm.datos = {};

        vm.type = 'password';

        vm.changeType = (checked) => {
            if(checked == true){
                vm.type = 'text';
            }else{
                vm.type = 'password';
            }
        }

        vm.inicioSesion = (datos) => {
            let success = loginService.logIn(datos);

            if (success == true) {
                $state.go('main.home');
            } else {
                swal({
                    title: "Inicio de sesión fallido",
                    text: "Los datos ingresados son incorrectos",
                    icon: "error",
                    button: "Aceptar",
                });
            }
        }
    }
})();
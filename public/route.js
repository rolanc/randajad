(() => {
    'use strict'
    angular
        .module('appRoutes', ['ui.router', 'oc.lazyLoad', 'uiRouterTitle'])
        .config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routing($stateProvider, $urlRouterProvider, $oclazyLoad) {
        $stateProvider
            .state('landingPage', {
                url: '/',
                templateUrl: './components/landingPage/landingPage.view.html',
                data: {
                    pageTitle: 'Randajad'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/landingPage/landingPage.controller.js')
                    }]
                },
                controller: 'landingPageController',
                controllerAs: 'vm'
            })

            .state('inicioSesion', {
                url: '/login',
                templateUrl: './components/InicioSesion/inicioSesion.view.html',
                data: {
                    pageTitle: 'Inicio de Sesión'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/InicioSesion/inicioSesion.controller.js')
                    }]
                },
                controller: 'inicioSesion',
                controllerAs: 'vm'
            })

            .state('registroUsuarios', {
                url: '/registerUser',
                templateUrl: './components/usuarios/Cliente/registrarCliente/registrarCliente.view.html',
                data: {
                    pageTitle: 'Registro de usuarios | Randajad'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/registrarCliente/registrarCliente.controller.js')
                    }]
                },
                controller: 'controladorRegistrarCliente',
                controllerAs: 'vm'
            })

            .state('main', {
                url: '/main',
                templateUrl: './components/main/main.view.html',
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/main/main.controller.js')
                    }]
                },
                controller: 'controladorMain',
                controllerAs: 'vm'
            })

            .state('main.home', {
                url: '/home',
                templateUrl: './components/main/principal.main/home.view.html',
                data: {
                    pageTitle: 'Pagina principal'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/main/main.controller.js')
                    }]
                },
                controller: 'controladorMain',
                controllerAs: 'vm'
            })

            .state('main.registrarTarea', {
                url: '/registerTarea',
                templateUrl: './components/tareas/registrarTarea/registrarTarea.view.html',
                data: {
                    pageTitle: 'Registro de Tareas | Randajad'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/tareas/registrarTarea/registrarTarea.controller.js')
                    }]
                },
                controller: 'ControladorRegistrarTarea',
                controllerAs: 'vm'
            })

            .state('main.listarTarea', {
                url: '/listTarea',
                templateUrl: './components/tareas/ListarTarea/listarTarea.view.html',
                data: {
                    pageTitle: 'Lista de Tareas'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/taras/ListarTarea/listarTarea.controller.js')
                    }]
                },
                params: {
                    idTarea: ''
                },
                controller: 'controladorListarTarea',
                controllerAs: 'vm'
            })

            .state('main.listarUsuarios', {
                url: '/listUsers',
                templateUrl: './components/usuarios/Cliente/listarCliente/listarCliente.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/listarCliente/listarCliente.controller.js')
                    }]
                },
                params: {
                    idCliente: ''
                },
                controller: 'controladorListaUsuarios',
                controllerAs: 'vm'
            })




            .state('modificarTarea', {
                url: '/modificarTarea',
                templateUrl: './components/tareas0/modificarTarea/modificarTarea.view.html',
                data: {
                    pageTitle: 'Inicio de Sesión'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/tareas/modificarTarea/modificarTarea.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })



            .state('modificarClientes', {
                url: '/modificarClientes',
                templateUrl: './components/usuarios/Cliente/ModificarCliente/modificarCliente.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
                resolve: {
                    load: ['$ocLazyLoad', ($ocLazyLoad) => {
                        return $ocLazyLoad.load('./components/usuarios/Cliente/ModificarCliente/modificarCliente.controller.js')
                    }]
                },
                controller: '',
                controllerAs: 'vm'
            })

            .state('perfilCliente', {
                url: '/perfilCliente',
                templateUrl: './components/usuarios/Cliente/PerfilCliente/perfilCliene.view.html',
                data: {
                    pageTitle: 'Listar Clientes'
                },
            })



        $urlRouterProvider.otherwise('/');
    }

})();
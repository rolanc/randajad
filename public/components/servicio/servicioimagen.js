(() => {
    'use strict';
    angular
    .module('randajad')
    .service('servicioImagen', servicioImagen);
  
    servicioImagen.$inject = ['$http'];
  
    function servicioImagen($http){
      const cloudObj = {
        url:'https://api.cloudinary.com/v1_1/dc38rw6m7/image/upload',
        data:{
          upload_preset: 'randajad',
          tags:'Any',
          context:'photo=test'
        }
      };
  
      const uploadAPI = {
        getConfiguration : _getConfiguration
      };
      return uploadAPI;
  
      function _getConfiguration() {
        return cloudObj;
      }
    };
  })();
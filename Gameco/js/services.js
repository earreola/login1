angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])
.factory('MostrarLocales', ['$http', function($http){
	return {
		mostrar : function(){
		return $http.post('http://sistema.controldemaquinas.com/maquinas/locales/buscar');
		}
	}
}])

.factory('EntraGo', ['$http', function($http){
	return {
		entra : function($data){
			var entro = "";
		return $http.post('http://sistema.controldemaquinas.com/sistema/usuarios/login',{nick: $data.email, pass: $data.password},
			function(response){
	 	console.log(response);
		 var res = angular.fromJson(response);
		 console.log(res);
			return res;
		})
	 }
	}
}])

.factory('LoginService', ['$http', function($http){
  return {
		login : function($data){
			console.log($data);
		     var response = {};
		 $http.post('http://localhost/sistema_orca/sistema/usuarios/login',{nick: $data.email, pass: $data.password})
          .success(function(data) {
              data = response;
          })
          .error(function(err) {
              defered.reject(err)
          });
		    return response; 
	     }
         
	}
}])

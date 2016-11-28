angular.module('app.controllers', [])
  
.controller('gamecoAppCtrl', ['$scope', '$stateParams', '$http','MostrarLocales',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$http,MostrarLocales) {
	$scope.datos = [];
	
   MostrarLocales.mostrar()
   .success(function(data,status,headers,config){
   	$scope.datos = data.rows;
   	console.log(data);
   })

   .error(function(data,status,headers,config){

   });
  
	$scope.showSelectValue = function(mySelect) {
	   locales = mySelect;

	    console.log(prueba);
	}

}])  
.controller('maquinasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	    $scope.local = "";
		  $scope.showSelectValue = function(mySelect) {
		   local = mySelect;
		   console.log(local);
		}

}])
   
.controller('totalLocalCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('prestamosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('avisosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('gastosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('recaudarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('resumenCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('averiasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('moverMaquinaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('notasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('proporcioneSusDatosCtrl', ['$scope', '$stateParams','LoginService','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,LoginService,$state) {
	$scope.login = {};
 
	$scope.Entrar = function(){
		 
	     var $data = {};
	     $data = $scope.login;
        $.post('http://sistema.controldemaquinas.com/sistema/usuarios/login', {nick: $data.email, pass: $data.password},
         function(response){
	 	console.log(response);
		 var res = angular.fromJson(response);
		 console.log(res);
			if (res.success == true) {
		 		$state.go('gamecoApp');
		 		console.log('entra');
		 	}else{
		 		console.log('.!.');
		 	}
			 })
		}
        
      //   function(response) {
	 //	console.log(response);
		//var res = angular.fromJson(response);
	/*	console.log(res);
		 	if (res == true) {
		 		$state.go('gamecoApp');
		 		console.log('entra');
		 	}else{
		 		console.log(' .!. ');
		 	}*/
		// }); 
	/* $.ajax({
	 	url: 'http://localhost/sistema_orca/sistema/usuarios/login',
	 	type: 'POST',
	 	data: { 
			nick: $data.email, pass: $data.password			
		}
	 })

	
	  .done(function(response) {
	 	console.log(response);
		var res = angular.fromJson(response);
	 	if (res.success == true) {
	 		$state.go('gamecoApp');
	 		console.log('entra');
	 	}else{
	 		console.log(' .!. ');
	 	}
	 }); */
	 
	//  LoginService.login($data).success(function(data){
     //   	console.log(data);
      //  });
	//$http.post('http://localhost/sistema_orca/sistema/usuarios/login', $data);	
	

//	$scope.login = function($data){
//		var data2 = {};
//	     data2 = {data: $data};
//	 		LoginService.login(data2).success(function(data){
  //        console.log('entra')
   //})
   //  }
	//$http.post('http://localhost/sistema_orca/sistema/usuarios/login',$data);
	

}])



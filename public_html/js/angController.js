app.controller("angController", ['$rootScope',  '$scope' ,
				function($rootScope,   $scope) {
					
 $scope.cars = ["Audi", "Impala", "BMW", "Ford"];
					
	$scope.clickMeToSeeMyName = function (){  
		$scope.myName = "MY NAME IS ARTEMIS";
	} 
}
]);

app.controller("homeController", ['$rootScope','$http', '$scope' ,
				function($rootScope, $http, $scope) {
 		
	$scope.$watch('email', function(newValue, oldValue){
		 
			console.log('this is' +  $scope.homeForm.emailName.$error);
	});
	
	$scope.$watch('homeForm', function(form) {
			if(form) {
			  // your code...
			}
	});				

	 $scope.doNothing = function(){
		 debugger;
		 console.log($scope.homeForm);
		 
	 }
					
		
		
	$http.get('json/cars.json').then(function (resp) {
 			$scope.cars = resp.data.cars;
			fixColoring();
		});
		
	$scope.font = "";
	function fixColoring(){
		for (var i=0; i<$scope.cars.length; i++){
		      if (_.has($scope.cars[i],'backgroundColor') ){
				 if($scope.cars[i].backgroundColor === 'black') {
					 $scope.color = 'white';
				  }
				else if($scope.cars[i].backgroundColor === 'white') {
					 $scope.color = 'green';
				}
				else if($scope.cars[i].backgroundColor === 'orange') {
					$scope.color = 'green';
				}
				else if($scope.cars[i].backgroundColor === 'red') {
					$scope.color = 'white';
				}
				else if($scope.cars[i].backgroundColor === 'green') {
					$scope.color = 'white';
				}
				else if($scope.cars[i].backgroundColor === 'silver') {
					$scope.color = 'white';
				} 
				$scope.cars[i].color = {};
				$scope.cars[i].color =  $scope.color;
		    
			} 
		    
		}
		 console.log($scope.cars);
	 }
		 
		
  } ]);

app.controller("aboutController", ['$rootScope',  '$scope' ,
				function($rootScope,   $scope) {
   
 					
}
]);
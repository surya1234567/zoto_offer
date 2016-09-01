/**
 * Created by Admin on 6/1/2016.
 */
app.controller('checkexistence',function($scope,$state,$http){
    //$scope.isfocus=false;
  $scope.checkuser=function(){
      var check=false;
      $http.get("data.json")
          .then(function(response) {
              angular.forEach(response.data,function(value,key){
                  if($scope.emailid===value.name){
                      $scope.emailid="";
                      $scope.logid=value.name;
                      check=true;
                      //   $scope.isfocus=false;
                      // document.getElementById("email-sign-in-2").focus;
                  }

              })
              if(!check){$state.go('registration.loginfirststep',{loginid:$scope.emailid});}

          });

  };
   // $scope.checkuser();






});


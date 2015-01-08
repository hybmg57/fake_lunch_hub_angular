
'use strict';

angular.module('fakeLunchHubApp')
  .controller('UserRegistrationCtrl', ['$scope', '$location', '$auth', function ($scope, $location, $auth) {
    $scope.$on('auth:registration-email-error', function(ev, reason) {
      $scope.errors = reason.errors.full_messages;
      console.log(reason.errors)
    });
    $scope.handleRegBtnClick = function() {
      $auth.submitRegistration($scope.registrationForm)
        .then(function() {
          $auth.submitLogin({
            email: $scope.registrationForm.email,
            password: $scope.registrationForm.password
          });
        });
    };
  }]);

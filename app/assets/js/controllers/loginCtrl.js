app.controller('loginCtrl', function($scope, $http, $filter, ngDialog){

  $scope.showLoginForm = false;

  $scope.openModalLogin = function () {
    ngDialog.open({ template: '_box_login.html', className: 'modal' });
  };

});
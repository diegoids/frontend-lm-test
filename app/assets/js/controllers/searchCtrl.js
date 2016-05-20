app.controller('searchCtrl', function($scope, $http, $filter){

  $scope.showAc = false;
  $scope.completing = false;

  $scope.terms = {
    results: [
      {
        id: 20835,
        name: "Diebold",
        slug: "diebold",
        title: "Diebold",
        type: "company"
      }, {
        id: 5056,
        name: "DIA",
        slug: "dia",
        title: "DIA",
        type: "company"
      }, {
        id: 20515,
        name: "Dicico",
        slug: "dicico",
        title: "Dicico",
        type: "company"
      }
    ]
  };

  $scope.acSearch = function(term){
    var acUrl = 'https://www.lovemondays.com.br/pesquisa/empresa/autocomplete';

    if (term == ""){

      $scope.completing = false;

    }else{

      $scope.completing = true;

      // This is the ajax to call API for terms but due to API doesn't allow cross domain request

      // $http({
      //   method: 'GET',
      //   url: acUrl,
      //   headers: {"Content-Type": "application/json"},
      //   params: {q: term}
      // }).success(function(response){
      //   showACTerms(response);
      // }).error(function(error){
      //   console.info(error);
      //   console.info('Erro, tente mais tarde!');
      // });

    }
  };

  function showACTerms(data){
    $scope.terms = data.results;
    $scope.completing = true;
  };

});
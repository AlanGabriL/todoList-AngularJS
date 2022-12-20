angular.module("learning", []);
angular.module("learning").controller("Controller", function ($scope) {
  $scope.title = "Todo list";

  $scope.list = [
    { name: "Lavar a louça", ready: true },
    { name: "Jogar bola", ready: false },
    { name: "ler um livro", ready: false },
  ];

  $scope.newItem = "";

  $scope.addItem = () => {
    $scope.list.push({ name: $scope.newItem, ready: false });
    $scope.newItem = "";
  };

  $scope.deleteItem = (DeleteItem) => {
    $scope.list.forEach((element) => {
      if (DeleteItem.name == element.name) {
        return $scope.list.splice($scope.list.indexOf(element), 1);
      }
    });
  };
});

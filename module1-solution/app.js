(function () {
  "use strict";

  angular
    .module("LunchCheck")
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";

    $scope.checkLunch = function () {
      // Split the input into an array based on commas
      var items = $scope.lunchItems.split(",");

      // Remove any empty items (optional bonus feature)
      items = items.filter(function (item) {
        return item.trim() !== "";
      });

      // Check the number of items and set the message
      if (items.length === 0) {
        $scope.message = "Please enter data first";
      } else if (items.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }
})();

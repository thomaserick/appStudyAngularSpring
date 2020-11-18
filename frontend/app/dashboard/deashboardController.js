(function () {
    "use strict";
  
    angular
      .module("App")
      .controller("DashboardCtrl", ["$http", DashboardController]);
  
    function DashboardController($http) {
      const _self = this;
      _self.getSummary = function () {
        const url = `http://localhost:3003/billingSummary`;
        $http.get(url).then(function (response) {
          const { credit = 0, debt = 0 } = response.data;
          _self.credit = credit;
          _self.debt = debt;
          _self.total = credit - debt;
        });
      };
  
      _self.getSummary();
    }
  })();
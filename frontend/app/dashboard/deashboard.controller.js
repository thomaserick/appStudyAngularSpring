(function () {
    "use strict";
  
    angular
      .module("App")
      .controller("DashboardCtrl", DashboardController);

      DashboardController.$inject = ['dashboardService'];
  
    function DashboardController(dashboardService) {
      const _self = this;
      _self.getSummary = function () {

        dashboardService.getBillingSummary()
        .then(function(data)
        {          
            const { credit = 0, debt = 0 } = data;
            _self.credit = credit;
            _self.debt = debt;
            _self.total = credit - debt;      
       
        });
      };
  
      _self.getSummary();
    }
  })();
(function () {
  angular.module("App").controller("billingCycleCtrl", billingCycleController);

  billingCycleController.$inject = [
    "billingCycleService",
    "msgsToastr",
    "tabs",
  ];

  function billingCycleController(billingCycleService, msgsToastr, tabs) {
    const _self = this;

    _self.refresh = function () {
      billingCycleService.getAllBillingCyle().then((data) => {
        _self.billingCycle = { credits: [{}], debts: [{}] };
        _self.listBillingCycle = data;
        _self.calculateValues();
        tabs.show(_self, { tabList: true, tabCreate: true });
      });
    };

    _self.save = function () {
      billingCycleService
        .saveBillingCycle(_self.billingCycle)
        .then(function (data) {
          _self.refresh();
          msgsToastr.addSucess("Operação realizada com sucesso!!");
        })
        .catch(function (error) {
          msgsToastr.addError(error.statusText);
        });
    };

    _self.showTabUpdate = function (billingCycle) {
      _self.billingCycle = billingCycle;
      _self.calculateValues();
      tabs.show(_self, { tabUpdate: true });
    };

    _self.showTabDelete = function (billingCycle) {
      _self.billingCycle = billingCycle;
      _self.calculateValues();
      tabs.show(_self, { tabDelete: true });
    };

    _self.update = function () {
      billingCycleService
        .updateBillingCycle(_self.billingCycle)
        .then(function (data) {
          _self.refresh();
          msgsToastr.addSucess("Operação realizada com sucesso!!");
        })
        .catch(function (error) {
          msgsToastr.addError(error.statusText);
        });
    };

    _self.delete = function () {
      billingCycleService
        .deleteBillingCycle(_self.billingCycle.id)
        .then(function (data) {
          _self.refresh();
          msgsToastr.addSucess("Operação realizada com sucesso!!");
        })
        .catch(function (error) {
          msgsToastr.addError(error.statusText);
        });
    };

    _self.addCredit = function (index) {
      _self.billingCycle.credits.splice(index + 1, 0, {});
    };

    _self.cloneCredit = function (index, { name, value }) {
      _self.billingCycle.credits.splice(index + 1, 0, { name, value });
      _self.calculateValues();
    };

    _self.deleteCredit = function (index) {
      if (_self.billingCycle.credits.length > 1) {
        _self.billingCycle.credits.splice(index, 1);
      }
      _self.calculateValues();
    };

    _self.addDebt = function (index) {
      _self.billingCycle.debts.splice(index + 1, 0, {});
    };

    _self.cloneDebt = function (index, { name, value, status }) {
      _self.billingCycle.debts.splice(index + 1, 0, { name, value, status });
      _self.calculateValues();
    };

    _self.deleteDebt = function (index) {
      if (_self.billingCycle.debts.length > 1) {
        _self.billingCycle.debts.splice(index, 1);
      }
      _self.calculeteValues();
    };

    _self.calculateValues = function () {
      _self.credit = 0;
      _self.debt = 0;

      if (_self.billingCycle) {
        _self.billingCycle.credits.forEach(function ({ value }) {
          _self.credit += !value || isNaN(value) ? 0 : parseFloat(value);
        });

        _self.billingCycle.debts.forEach(function ({ value }) {
          _self.debt += !value || isNaN(value) ? 0 : parseFloat(value);
        });
      }

      _self.total = _self.credit - _self.debt;
    };

    _self.refresh();
  }
})();

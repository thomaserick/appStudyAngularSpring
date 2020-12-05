(function () {

    angular
        .module('App')
        .controller('billingCycleCtrl', billingCycleController);

    billingCycleController.$inject = ['billingCycleService', 'msgsToastr', 'tabs'];

    function billingCycleController(billingCycleService, msgsToastr, tabs) {

        const _self = this;


        _self.refresh = function () {

            billingCycleService.getAllBillingCyle()
                .then((data) => {
                    _self.billingCycle = {};
                    _self.listBillingCycle = data;
                    tabs.show(_self, { tabList: true, tabCreate: true })
                })
        }

        _self.save = function () {

            billingCycleService.saveBillingCycle(_self.billingCycle)
                .then(function (data) {
                    _self.refresh();
                    msgsToastr.addSucess('Operação realizada com sucesso!!')
                })
                .catch(function (error) {
                    msgsToastr.addError(error.statusText)
                })

        };


        _self.showTabUpdate = function (billingCycle) {
            _self.billingCycle = billingCycle;
            tabs.show(_self, { tabUpdate: true })
        }

        _self.showTabDelete = function (billingCycle) {
            _self.billingCycle = billingCycle;
            tabs.show(_self, { tabDelete: true })
        }

        _self.update = function () {
            billingCycleService.updateBillingCycle(_self.billingCycle)
                .then(function (data) {
                    _self.refresh();
                    msgsToastr.addSucess('Operação realizada com sucesso!!')
                })
                .catch(function (error) {
                    msgsToastr.addError(error.statusText)
                })
        }

        _self.delete = function () {
            billingCycleService.deleteBillingCycle(_self.billingCycle.id)
                .then(function (data) {
                    _self.refresh();
                    msgsToastr.addSucess('Operação realizada com sucesso!!')
                })
                .catch(function (error) {
                    msgsToastr.addError(error.statusText)
                })
        }


        _self.refresh();
    }

})()
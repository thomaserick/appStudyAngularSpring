(function () {

    angular
        .module('App')
        .controller('billingCycleCtrl', billingCycleController);

    billingCycleController.$inject = ['billingCycleService', 'msgsToastr'];

    function billingCycleController(billingCycleService, msgsToastr) {

        const _self = this;

        _self.save = function () {

            billingCycleService.saveBillingCycle(_self.billingCycle)
                .then(function (data) {
                    _self.billingCycle = {};
                    msgsToastr.addSucess('Operação realizada com sucesso!!')
                })
                .catch(function (error) {
                    msgsToastr.addError(error.statusText)
                })

        };
    }

})()
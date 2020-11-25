(function () {
    "use strict";

    angular
        .module('App')
        .controller('BillingCycleCtrl', BillingCycleController);

    BillingCycleController.$inject = ['BillingCycleService'];

    function BillingCycleController(BillingCycleService) {

        const _self = this;

        _self.save = function () {

            BillingCycleService.saveBillingCycle(_self.billingCycle)
                .then(function (data) {
                    _self.billingCycle = {};
                    console.log('Sucesso!', data)
                })
                .catch(function (error) {
                    console.log(error, 'erro');
                })

        };
    }

})()
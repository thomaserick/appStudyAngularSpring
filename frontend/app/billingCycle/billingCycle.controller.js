(function () {

    angular
        .module('App')
        .controller('billingCycleCtrl', billingCycleController);

    billingCycleController.$inject = ['billingCycleService'];

    function billingCycleController(billingCycleService) {

        const _self = this;

        _self.save = function () {

            billingCycleService.saveBillingCycle(_self.billingCycle)
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
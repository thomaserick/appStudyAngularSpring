(function () {

    angular
        .module('App')
        .factory('billingCycleService', billingCycleService)

    billingCycleService.$inject = ['$http', '$q'];

    function billingCycleService($http, $q) {

        var service = {

            saveBillingCycle: saveBillingCycle

        }

        return service;

        function saveBillingCycle(billingCycle) {

            console.log('aqui')
            const url = `http://localhost:3003/billingCycles`;

            return $http.post(url, billingCycle)
                .then(saveBillingCyclData)
                .catch(function (err) {
                    return $q.reject(err);
                });

            function saveBillingCyclData(response) {
                return response.data;
            }




        }

    }

})()
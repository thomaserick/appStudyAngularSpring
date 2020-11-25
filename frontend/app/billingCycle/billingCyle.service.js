(function () {

    angular
        .module('App')
        .factory('billingCycleService', billingCycleService)

    billingCycleService.$inject = ['$http', '$q'];

    function billingCycleService($http, $q) {

        const url = `http://localhost:3003/billingCycles`;


        var service = {

            saveBillingCycle: saveBillingCycle,
            getAllBillingCyle: getAllBillingCyle

        }

        return service;

        function getAllBillingCyle() {

            return $http.get(url)
                .then(responseBillingCyclData)
                .catch(function (err) {
                    return $q.reject(err);
                });
        }

        function saveBillingCycle(billingCycle) {

            return $http.post(url, billingCycle)
                .then(responseBillingCyclData)
                .catch(function (err) {
                    return $q.reject(err);
                });
        }

        function responseBillingCyclData(response) {
            return response.data;
        }

    }

})()
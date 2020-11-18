(function (){
    'use strict'

    angular
        .module('App')
        .service('dashboardService', dashboardService);

        dashboardService.$inject = ['$http'];

        function dashboardService ($http){

            var service = {
                getBillingSummary: getBillingSummary,
            }

            return service;

            function getBillingSummary(){

                const url = `http://localhost:3003/billingSummary`;

                return $http.get(url)
                .then(getBillingSummaryData)              


                function getBillingSummaryData(response){                 
                    return response.data;
                }

        }
    }


})()
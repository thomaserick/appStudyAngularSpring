(function()
{
    angular.module('App').component('field',{
        bindings:{
            id:'@',
            label:'@',
            grid:'@',
            placeholder:'@',
            type:'@'
        },
        controller:[
            "gridSystem",
            function (gridSystem) {
              this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid);
            },
        ],
        templateUrl: 'common/components/fieldComponent.html'
    })

})();
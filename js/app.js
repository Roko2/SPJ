
var oVijestiModul = angular.module('vijesti-app', []);


oVijestiModul.controller('naslovniController', function ($scope, $http,modal) {
    $scope.oVijesti = [];
    $scope.modal=modal;
    $scope.Dodaj = function () {

        nazivVijesti = $scope.naziv;
        datumVijesti = $("#datum").val();   
        tekstVijesti = $scope.tekst;
        id = Math.max($scope.oVijesti.post_id);
        $scope.oVijesti.push({ post_id: id++, post_naziv: $scope.naziv, datum: datumVijesti, post_tekst: $scope.tekst });
    }

    $http({
        method: "GET",
        url: "./vijesti.json"
    }).then(function (response) {
        //console.log(response);
        $scope.oVijesti = response.data;
    }, function (response) {
        console.log('Doslo je do poreške');
    });
});

oVijestiModul.filter('promijeniFormat', function () {
    return function (tekst) {
        var sRezultat = "";
        if (tekst != undefined) {
            sRezultat = tekst.split("-").join(".");
        }
        return sRezultat;
    };
});

oVijestiModul.service('modal', function ($rootScope) {


    // this.Dodaj = function()
    // {
    //     console.log("Tst");
    // }

    // var self = this;
    // //private shared variable
    // var sharedVariables = { };
    // self.getSharedVariables = getSharedVariables;
    // self.setVariable = setVariable;

    // //function declarations
    // function getSharedVariables() {
    //     return sharedVariables;
    // }
    // function setVariable() {
    //     sharedVariables[paramName] = value;
    // }


    this.otvoriModal = function (sHref) {
        $('#modals').removeData('bs.modal');
        $('#modals').modal
            ({
                remote: sHref,
                show: true
            });
    };
});


oVijestiModul.directive("prikaziVijestiSve", function () {
    return {
        restrict: "E",
        templateUrl: "templates/vijesti.html"
    };
});
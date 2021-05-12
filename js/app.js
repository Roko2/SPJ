var oModul = angular.module('oModul', ['ngRoute']);

oModul.config(function($routeProvider){
    $routeProvider.when('/', {
   templateUrl: 'predlosci/naslovna.html',
   controller: 'naslovnicaKontroler'
   });
   $routeProvider.when('/taskovi', {
    templateUrl: 'predlosci/taskovi.html',
    controller: 'taskKontroler'
   });
   $routeProvider.when('/trgovina', {
    templateUrl: 'predlosci/trgovina.html',
    controller: 'trgovinaKontroler'
   });
   $routeProvider.otherwise({
   template:'Došlo je do pogreške'
   });
   });
   
   //definicija naslovnicaKontroler
   oModul.controller('naslovnicaKontroler', function ($scope) {
    $scope.pozdravnaPoruka = "Nalazite se na naslovnici";
   });
   //definicija taskKontroler
   oModul.controller('taskKontroler', function ($scope) {
    $scope.pozdravnaPoruka = "Nalazite se u taskKontroler..";
    $scope.obrisi=function(element){
    const index = $scope.oZadaci.indexOf(element.task);
    $scope.oZadaci.splice(index, 1);
    }
    $scope.spremi = function()
    {   
        noviId=$scope.oZadaci.length;
        $scope.oZadaci.push({id:++noviId,name:$scope.zadatak});
    }
    $scope.oZadaci = [
        {
        id: 1,
        name: 'Proučiti predložak'
        },
        {
        id: 2,
        name: 'Položiti blic'
        },
        {
        id: 3,
        name: 'Riješiti obavezne zadatke'
        }
        ]; 
   });
   //definicija trgovinaKontroler
   oModul.controller('trgovinaKontroler', function ($scope) {
    $scope.pozdravnaPoruka = "Nalazite se u trgovinaKontroler..";
     $scope.nLista=[];
     $scope.Izracunaj=function(x){
         return x.noviProizvodi.cijena*document.getElementById(x.noviProizvodi.id).value;
     }
    $scope.dodaj=function(element){
    $scope.nLista.push(element.proizvod);
    }
    
    $scope.dajCijenu = function (noviElement)
    {   
    cijena=noviElement.noviProizvodi.dostupna_kolicina*noviElement.noviProizvodi.cijena;
     return cijena;
    }

    $scope.oProizvodi = [
        {
        id: 1,
        name: 'Kruh',
        cijena: '6',
        dostupna_kolicina: '25'
        },
        {
            id: 2,
            name: 'Mlijeko',
            cijena: '10',
            dostupna_kolicina: '50'
        },
        {
            id: 3,
            name: 'Vrhnje',
            cijena: '20',
            dostupna_kolicina: '100'
        }
        ]; 
   });
   

  
/* global angular, document, window */
'use strict';

angular.module('app.controllers', [])

.controller('NavCtrl', function($scope, $state) {

})


.controller('HomeCtrl', function($scope, $ionicLoading, SITE_URL, $ionicPopup) {
})


.controller('EntryCtrl', function($scope, $state, $ionicLoading, $ionicPopup, SITE_URL, $ionicModal, $q, $http) {
    $scope.entry = {
        fname:"",
        lname:"",
        email:"",
        mail_fox:true,
        mail_flightcentre:true,
        mail_dreamworld:true,
        mail_morefm:true,
        amulet:""
    };
 
    $ionicModal.fromTemplateUrl('templates/form.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.formModal = modal;
      });   
      
    $scope.openForm = function(amulet){
        $scope.entry.amulet = amulet;
        $scope.formModal.show();
    }
    
    $scope.submitEntry = function(form){
        if (form.$valid){
            $ionicLoading.show({
                template: 'Submitting entry...'
            });             
            console.log($scope.entry);
            $scope.submitForm($scope.entry).then(function(data){
                
                $ionicLoading.hide();
                $scope.entry = {
                    fname:"",
                    lname:"",
                    email:"",
                    mail_fox:true,
                    mail_flightcentre:true,
                    mail_dreamworld:true,
                    mail_morefm:true,
                    amulet:""
                };  
                form.$setPristine();
                $scope.formModal.hide();
                $state.go("home");                
                $ionicPopup.alert({
                title: 'Success',
                template: "Your entry has been submitted! Goodluck."
                });                 
            },function(data){
                $ionicLoading.hide();
                $ionicPopup.alert({
                title: 'Error',
                template: "Uh oh, something went wrong. Please try again."
                });  
            })

        }

    }
    
    $scope.submitForm = function(entry){
        console.log(entry);
        var deferred = $q.defer();  
        $http({
            method:'POST',
            url:SITE_URL,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },            
            data:entry          
            })    
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function(data,status) {
                deferred.reject(data);
            });

        return deferred.promise;        
    }
    
    
})


.controller('TermsCtrl', function($scope, $ionicLoading, SITE_URL, $ionicPopup) {
    
})

.controller('PrizeCtrl', function($scope, $ionicLoading, SITE_URL, $ionicPopup) {
    
})

;



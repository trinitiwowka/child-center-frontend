/**
 * Created by den on 8/31/16.
 */
var app = angular.module('myApp');

'use strict';
app
    .controller('postArticleCtr', ['$scope', '$http','dataService',
        function ($scope, $http, dataService) {

            $scope.objArt ={
                headline: $scope.headline,
                summary: $scope.summary,
                fullText: $scope.fullText,
                dateOfPost: new Date(Date.parse($scope.month + '' + $scope.day + $scope.year)),
                image: $scope.image,
                user: $scope.user
            };

            $scope.submit = function() {
                dataService.addArticle($scope.objArt).success(function () {
                    //success
                });

            };
            //
            /*  $scope.isUploadAvailable = false;
             $scope.users = [];
             $scope.userName = "";

             $scope.fileUploadSuccess = false;
             $scope.fileUploadMessage = "";
             */



            /*dataService.getDashboard().success(function (data) {

             $scope.isUploadAvailable = data.isUploadAvailable;
             dataService.getEndUsers().success(function (data) {
             $scope.users = data;
             });
             });*/


            /* $scope.uploadFiles = function () {

             var request = {
             method: 'POST',
             url: globalConstants.apiUrl +'api/FileUpload/',
             data: formdata,
             headers: {
             'Content-Type': undefined,
             'Authorization': 'Bearer ' + authService.authentication.token
             }
             };

             $http(request)
             .success(function (d) {
             $scope.fileUploadMessage = d;
             $scope.fileUploadSuccess = true;
             reloadDocuments();
             })
             .error(function () {
             });
             };
             */
        }]);

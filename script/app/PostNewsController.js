/**
 * Created by den on 8/31/16.
 */
var app = angular.module('myApp');

'use strict';
app
    .controller('postNewsCtr', ['$scope', '$state', '$http', 'globalConstants','dataService',
        function ($scope, $state, $http, globalConstants, dataService) {

            var objNews ={
                Headline: $scope.Headline,
                Summary: $scope.Summary,
                FullText: $scope.FullText,
                DateOfPost: new Date(Date.parse($scope.month + '' + $scope.day + $scope.year)),
                Image: $scope.Image,
                User: $scope.User

            };
            function postArticles() {
                dataService.addArticle(objNews).success(function () {
                    //success
                });
            }


            //
            /*  $scope.isUploadAvailable = false;
             $scope.users = [];
             $scope.userName = "";

             $scope.fileUploadSuccess = false;
             $scope.fileUploadMessage = "";
             */

            postArticles();

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

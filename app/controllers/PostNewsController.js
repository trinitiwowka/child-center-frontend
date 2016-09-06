/**
 * Created by den on 8/31/16.
 */
var app = angular.module('myApp');

'use strict';
app.directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }]);
app.controller('postArticleCtr', ['$scope', '$http','dataService',
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

            var formdata = new FormData();
            $scope.getTheFiles = function ($files) {
                angular.forEach($files, function (value, key) {
                    formdata.append(key, value);
                });
            };

            $scope.uploadFiles = function () {

                var request = {
                    method: 'POST',
                    url: globalConstants.apiUrl +'api/FileUpload/',
                    data: formdata,
                    headers: {
                        'Content-Type': undefined,
                    }
                };

                $http(request)
                    .success(function (d) {
                        $scope.fileUploadMessage = d;
                        $scope.fileUploadSuccess = true;

                    })
                    .error(function () {
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

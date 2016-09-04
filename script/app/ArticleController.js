/**
 * Created by den on 8/31/16.
 */
var app = angular.module('myApp');

'use strict';
app.controller('ArticleCtr', ['$scope', '$http', 'dataService',
        function ($scope, $http, dataService) {



        //
            $scope.Article=[{
                Headline: "Что такое Аутизм",
                Summary: "",
                FullText: "Ребенок находится в ситуации постоянного общения - и в утробе матери, и после рождения. Но атмосфера общения - контакт - создается только после рождения. Если мы хотим общаться с конкретным человеком, то свое внимание мы сосредоточиваем на конкретном человеке. Другой человек понимает это и тоже сосредоточивает свое внимание.",
                DateOfPost: Date.now(),
                imgUrl: "content/img/news-image/news-image-1.jpg",
                User: "Admin"
        }];

            function reloadArticles() {
                dataService.getArticle().success(function (data) {
                   $scope.Articles = data;
               });
            }

            reloadArticles();

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

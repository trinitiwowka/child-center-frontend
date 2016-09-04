angular.module('dataServiceModule', []).factory('dataService', ['$http', 'globalConstants', dataService]);

function dataService($http, globalConstants) {

    // Change with appropriate url
    var urlBase = globalConstants.apiUrl;

    var service = {
        getArticle:getArticle,
        addArticle:addArticle,
        getAllArticles:getAllArticles
    };


    function getArticle()
    {
        var subUrl = 'api/article/Article';
        return $http.get(urlBase + subUrl);
    };

    function addArticle(data) {
        var destinationUrl = urlBase+'api/article/AddArticle';
        return $http.post(destinationUrl, data);
    };


    function getAllArticles()
    {
        var subUrl='api/article/GetAllArticles';
        return $http.get(urlBase + subUrl);
    }
    return service;
}
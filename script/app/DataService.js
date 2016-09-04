angular.module('dataServiceModule', []).factory('dataService', ['$http', 'globalConstants', dataService]);

function dataService($http, globalConstants) {

    // Change with appropriate url
    var urlBase = globalConstants.apiUrl;

    var service = {
        getArticle:getArticle,
        addArticle:addArticle
    };


    function getArticle()
    {
        var subUrl = 'api/Article';
        return $http.get(urlBase + subUrl);
    };

    function addArticle(data) {
        var destinationUrl = urlBase+'api/AddArticle';
        return $http.post(destinationUrl, data);
    };
    return service;
}

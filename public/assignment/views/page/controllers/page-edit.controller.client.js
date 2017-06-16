(function(){
    angular
        .module('WebAppMaker')
        .controller('PageEditController', PageEditController);

    function PageEditController($location, $routeParams, PageService, $rootScope){
        var model = this;

        function init(){
            model.pageId = $routeParams['pid'];
            model.websiteId = $routeParams['wid'];
            model.user = $rootScope.currentUser;
            PageService.findPageById(model.pageId)
                .then(function(response) {
                    model.page = response;
                });
            model.deletePage = deletePage;
            model.updatePage = updatePage;
        }
        init();

        function deletePage(){
            PageService.deletePage(model.pageId, model.websiteId);
            $location.url(
                '/user/website/' + model.websiteId + '/page/');
        }

        function updatePage(){
            if(model.page.name === undefined) {
                model.message = "Please input a valid name!";
                return ;
            }

            PageService.updatePage(model.pageId, model.page);
            $location.url(
                '/user/website/' + model.websiteId + '/page');
        }
    }
})();
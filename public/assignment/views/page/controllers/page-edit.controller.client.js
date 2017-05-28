(function(){
    angular
        .module('WebAppMaker')
        .controller('PageEditController', PageEditController);

    function PageEditController($location, $routeParams, PageService){
        var model = this;

        function init(){
            model.pageId = $routeParams['pid'];
            model.websiteId = $routeParams['wid'];
            model.userId = $routeParams['userId'];
            model.page = PageService.findPageById(model.pageId);
            model.deletePage = deletePage;
            model.updatePage = updatePage;
        }
        init();

        function deletePage(){
            PageService.deletePage(model.pageId);
            $location.url(
                '/user/' + model.userId + '/website/' + model.websiteId
                + '/page');
        }

        function updatePage(){
            model.page.lastVisited = (new Date()).getTime() + "";
            PageService.updatePage(model.pageId, model.page);
            $location.url(
                '/user/' + model.userId + '/website/' + model.websiteId
                + '/page');

        }
    }
})();
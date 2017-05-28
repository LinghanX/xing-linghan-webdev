(function(){
    angular.module('WebAppMaker').factory('PageService', PageService);

    function PageService() {
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem", "createdAt": "12/29/17", "lastVisited": "12/29/18" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem", "createdAt": "12/29/17", "lastVisited": "12/29/18" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem", "createdAt": "12/29/17", "lastVisited": "12/29/18" }
        ];

        var api = {
            createPage: createPage,
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById: findPageById,
            updatePage: updatePage,
            deletePage: deletePage
        };

        return api;

        function createPage(websiteId, page) {
            page.websiteId = websiteId;
            pages.push(page);
        }

        function findPagesByWebsiteId(websiteId) {
            for(var p in pages){
                if(pages[p].websiteId === websiteId){
                    return pages[p];
                }
            }
        }

        function findPageById(pageId) {
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    return pages[p];
                }
            }
        }

        function updatePage(pageId, page) {
            for(var p in pages) {
                if(pages[p]._id === pageId){
                    pages[p] = page;
                }
            }
        }

        function deletePage(pageId) {
            for(var p in pages) {
                if(pages[p]._id === pageId) {
                    pages.splice(p, 1);
                }
            }
        }
    }
})();
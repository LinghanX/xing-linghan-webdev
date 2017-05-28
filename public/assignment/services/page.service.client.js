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
            page.createdAt = (new Date()).getTime() + "";
            page.lastVisited = (new Date()).getTime() + "";
            pages.push(page);
        }

        function findPagesByWebsiteId(websiteId) {
            var candidates = [];
            for(var p in pages){
                if(pages[p].websiteId === websiteId){
                    candidates.push(pages[p]);
                }
            }

            return candidates;
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
(function(){
    angular
        .module('WebAppMaker')
        .controller('ProfileController', ProfileController);

    function ProfileController($location,
                               $routeParams,
                               UserService,
                               $rootScope) {
        var model = this;

        function init(){
            model.userId = $routeParams['userId'];
            model.user = $rootScope.currentUser;
            model.updateUser = updateUser;
            model.logout = logout;
        }
        init();

        function updateUser(){
            UserService.updateUser(model.userId, model.user)
                .then(function(){
                    model.message = "User update was successful";
                });
        }

        function logout() {
            UserService.logout()
                .then(function(response) {
                    $rootScope.currentUser = null;
                    $location.url('/users');
                })
        }
    }
})();
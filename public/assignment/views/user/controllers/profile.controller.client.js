(function(){
    angular
        .module('WebAppMaker')
        .controller('ProfileController', ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.user = UserService.findUserById(model.userId);
    }
})();
(function(){
    angular
        .module('WebAppMaker')
        .controller('ProfileController', ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var model = this;

        model.userId = $routeParams['userId'];
        UserService.findUserById(model.userId)
            .then(function(response){
                model.user = response;
            });
    }
})();
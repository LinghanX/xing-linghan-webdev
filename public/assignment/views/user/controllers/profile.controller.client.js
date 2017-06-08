(function(){
    angular
        .module('WebAppMaker')
        .controller('ProfileController', ProfileController);

    function ProfileController($location, $routeParams, UserService) {
        var model = this;

        function init(){
            model.userId = $routeParams['userId'];
            UserService.findUserById(model.userId)
                .then(function(response){
                    model.user = response;
                }, function(err) {
                    model.error = "User not found";
                });
            model.updateUser = updateUser;
        }
        init();

        function updateUser(){
            UserService.updateUser(model.userId, model.user)
                .then(function(){
                    model.message = "User update was successful";
                });
        }
    }
})();
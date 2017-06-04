(function() {
    angular
        .module('WebAppMaker')
        .controller('LoginController', LoginController);

    function LoginController($location, UserService) {
        var model = this;

        model.login = login;

        function login(username, password) {
            UserService.findUserByCredentials(username, password)
                .then(function(response){
                    if(response !== null) {
                        $location.url('/user/' + response._id);
                    } else {
                        model.message = username + "not found.";
                    }
                });
        }
    }
})();
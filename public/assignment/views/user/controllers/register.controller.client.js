(function(){
    angular.module('WebAppMaker').controller('RegisterController', RegisterController);

    function RegisterController($location, UserService) {
        var model = this;

        model.registerUser = registerUser;

        function registerUser(username, password, veryfyPassword) {
            if(password !== veryfyPassword) {
                model.message = 'Error, veryfy password not correct, please try again';
                return ;
            }

            var user = {
                username: username,
                password: password
            };

            UserService.createUser(user)
                .then(function(response){
                    $location.url('/user/' + response._id);
                });

        }
    }
})();
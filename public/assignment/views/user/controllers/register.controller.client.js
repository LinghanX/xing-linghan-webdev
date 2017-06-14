(function(){
    angular.module('WebAppMaker').controller('RegisterController', RegisterController);

    function RegisterController($location, UserService) {
        var model = this;

        function init(){
            model.registerUser = registerUser;
        }
        init();

        function registerUser(username, password, veryfyPassword) {
            if(password !== veryfyPassword) {
                model.message = 'Error, veryfy password not correct, please try again';
                return ;
            }

            const user = {
                username: username,
                password: password
            };

            UserService.register(user)
                .then(function(response) {
                    $location.url('/user');
                })
        }
    }
})();
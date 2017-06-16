(function(){
    angular.module('WebAppMaker').controller('RegisterController', RegisterController);

    function RegisterController($location, UserService) {
        var model = this;

        function init(){
            model.registerUser = registerUser;
        }
        init();

        function registerUser(username, password, veryfyPassword) {
            if(
                username === undefined ||
                password === undefined ||
                veryfyPassword === undefined
            ) {
                model.message = "Please fillin all fields!";
                return;
            }

            if(password !== veryfyPassword) {
                model.message = 'Error, verify password not correct, please try again';
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